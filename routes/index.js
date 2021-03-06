const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");
const ProductRouter = require("./ProductRoute");
const CategoryRouter = require("./CategoryRoute");
const PaketRoute = require("./PaketRoute");
const OrderRoute = require("./OrderRoute");
const HomeRoute = require("./HomeRoute");

const AdminRouter = require("./AdminRoute");
const DetailController = require("../controllers/DetailController");

router.use("/", HomeRoute);
router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/categories", CategoryRouter);
router.use("/pakets", PaketRoute);
router.use("/admin", AdminRouter);
router.use("/orders", OrderRoute);
router.use("/detail/:id", DetailController.getDetail);
router.use("/customdetail/:id", DetailController.getPaketCustomDetail);
router.use(errorHandler);


//LOGIN ROUTES
router.get("/login", (req, res) => {
  let error = "";
  if (req.query.error) {
    error = req.query.error;
  }
  res.render("login", { error });
});

//REGISTER ROUTES
router.get("/register", (req, res) => {
  let error = "";
  if (req.query.error) {
    error = req.query.error;
  }
  res.render("register", { error });
});

//RESET EMAIL ROUTES
router.get("/resetemail", (req, res) => {
  res.render("resetemail");
});

//RESET PASSWORD ROUTES
router.get("/resetpass", (req, res) => {
  res.render("resetpass");
});

//PASSWORD TELAH DIUBAH ROUTES
router.get("/resetdone", (req, res) => {
  res.render("resetdone");
});

router.get("/tracking", (req, res) => {
  res.render("tracking");
});

router.get("/detail-transaksi", (req, res) => {
  res.render("detail-transaksi");
});

module.exports = router;
