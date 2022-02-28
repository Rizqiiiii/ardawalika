const { User } = require("../models");
const { Op } = require("sequelize");
const { sign, verify } = require("../helpers/jwt");
const { decode } = require("../helpers/bcrypt");
const {
  sendEmail,
  sendEmailResetPassword,
  sendEmailForgotPassword,
} = require("../helpers/nodemailer");
const generator = require("generate-password");

class UserController {
  static async register(req, res, next) {
    try {
      let {
        email,
        password,
        username,
        fullname,
        phoneNumber = "",
        imgUrl = "",
        address = "",
        role = "user",
      } = req.body;
      const result = await User.create({
        email,
        password,
        username,
        fullname,
        phoneNumber,
        imgUrl,
        address,
        role,
      });
      if (!result) throw { status: 400, message: "Register failed" };

      const token = sign({ email, username, id: result.id });

      const url = `http://localhost:3000/users/verification/${token}`;
      sendEmail(email, url);
      res.status(201).json({
        status: 201,
        message: "We have sent you an verification link through email",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: { [Op.eq]: email } },
      });
      if (!user) throw { status: 404, message: "User not found" };
      const isMatch = await decode(password, user.password);
      if (!isMatch) throw { status: 400, message: "Wrong Email or Password" };
      const token = sign({ email, username: user.username, id: user.id });

      res.status(200).json({
        status: 200,
        message: "Login success",
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async sendLinkforChangePassword(req, res, next) {
    try {
      const email = req.body.email;

      const user = await User.findOne({
        where: { email: email },
      });

      if (user) {
        const token = sign({ email, username: user.username, id: user.id });
        const url = `http://localhost:3000/users/forgotpassword/${token}`;
        sendEmailResetPassword(email, url);
        res.status(200).json({
          status: 200,
          message: "Success",
        });
      } else {
        throw { status: 400, message: "Email not found" };
      }
    } catch (error) {
      next(error);
    }
  }

  static async resetPasswordForm(req, res, next) {
    try {
      const { accessToken } = req.params;
      const payload = verify(accessToken);
      res.send(
        "Use this link as new password and confirm password form. Don't tell to others about your AccessKey"
      );
    } catch (error) {
      next(error);
    }
  }

  static async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (!user) {
        throw {
          name: "authentication",
          message: "Email doesnt exist",
        };
      }
      const newPassword = generator.generate({
        length: 10,
        numbers: true,
      });
      await User.update({ password: newPassword }, { where: { email } });
      sendEmailForgotPassword(email, newPassword);
      res.status(200).json({
        status: 200,
        message: "Your new password has been sent to your email",
      });
    } catch (error) {
      next(error);
    }
  }

  static async verification(req, res, next) {
    try {
      const { accessToken } = req.params;
      const payload = verify(accessToken);

      await User.update(
        { status: "active" },
        {
          where: {
            id: payload.id,
            email: payload.email,
            username: payload.username,
          },
        }
      );

      res.status(200).json({ status: 200, message: "Your account is active" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UserController;
