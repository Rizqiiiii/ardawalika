const { User } = require("../models");
const { Op } = require("sequelize");
const { decode } = require("../helpers/bcrypt");

async function updateDataUser(req, res, next) {
  try {
    const { id, email } = req.user;
    const obj = JSON.parse(JSON.stringify(req.body));
    const { username, fullname, phoneNumber, address, password, confirm_password, confirm_new_password } = obj;
    const currentUser = await User.findOne({
      [Op.or]: [{ id }, { email }]
    });
    if (!currentUser) {
      throw { status: 400, message: "User not found" };
    }
    if (confirm_password !== confirm_new_password) {
      throw { status: 400, message: "Confirm password and New password Not match" };
    }
    if(password){
      const isPasswordMatch = await decode(password, currentUser.password);
      if (!isPasswordMatch) {
        throw { status: 400, message: "Password is incorrect" };
      }
      const update = await User.update(
        { username, fullname, phoneNumber, address, password: password },
        {
          where: {
            [Op.or]: [{ id }, { email }],
          },
        }
      );
    }else{
    await User.update(
      {
        username,
        fullname,
        phoneNumber,
        address,
      },
      {
        where: { id, email },
        returning: true,
      }
    );
    }
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = updateDataUser;
