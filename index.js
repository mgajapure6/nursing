var express = require("express");
var app = express();
var path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.use("/assets", express.static(__dirname + "/assets"));
//app.use(express.static(__dirname + '/pages'));

router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/index/index.html"));
});

router.get("/dashboard", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/dashboard/dashboard2.html"));
});

router.get("/app/chat", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/app/chat.html"));
});
router.get("/app/inbox", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/app/inbox.html"));
});

router.get("/app/chat", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/app/chat.html"));
});

router.get("/app/fileManager", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/app/file-manager.html"));
});

router.get("/app/invoice", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/app/invoice.html"));
});

router.get("/app/createInvoce", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/app/createInvoce.html"));
});

router.get("/layout/boxed", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/layout/boxed.html"));
});

router.get("/layout/full", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/layout/full.html"));
});

router.get("/user/login", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/user/login.html"));
});

router.get("/component/alert", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/component/alert.html"));
});

router.get("/component/button", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/component/button.html"));
});

router.get("/component/tab", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/component/tab.html"));
});

router.get("/component/icons", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/component/icons.html"));
});

router.get("/component/datatables", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/component/datatables.html"));
});

router.get("/form/formEle", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/form/form-ele.html"));
});

router.get("/form/advFormEle", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/form/adv-form-ele.html"));
});

router.get("/form/formLayout", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/form/form-layout.html"));
});

router.get("/form/formValidation", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/form/form-validation.html"));
});

router.get("/form/formWizard", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/form/form-wizard.html"));
});

//add the router
app.use("/", router);
app.listen(PORT || 3000);

console.log("Server Running at Port " + PORT);
