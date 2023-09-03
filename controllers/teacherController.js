const Student = require("../public/model/students");
const path = require("path");

const authorizedUsers = [
  { email: "admin@example.com", password: "admin" },
  { email: "teacher@example.com", password: "teacher" },
];

const getLogin = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../public/pages/teacher/staffLogin.html"
  );
  res.sendFile(filePath);
};

const postLogin = async (req, res) => {
  const { emailL, passwordL } = req.body;
  try {
    const user = authorizedUsers.find(
      (item) => item.email === emailL && item.password === passwordL
    );
    if (!user) {
      return res.send("Please check your email or password");
    }
    res.redirect("/teacher/dashboard#home");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const getDashboard = async (req, res) => {
  try {
    const students = await Student.find().exec();
    res.render("teacher/dashboard", { students });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const postAdmitStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    prnNo,
    dateofbirth,
    addr,
    countryName,
    stateName,
    zipcode,
  } = req.body;

  const newStudent = new Student({
    fname: firstName,
    lname: lastName,
    prn: prnNo,
    dob: dateofbirth,
    address: addr,
    country: countryName,
    state: stateName,
    zip: zipcode,
  });
  try {
    await newStudent.save();
    res.redirect("/teacher/dashboard#successful");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while saving the student.");
  }
};

module.exports = {
  getLogin,
  postLogin,
  getDashboard,
  postAdmitStudent,
};
