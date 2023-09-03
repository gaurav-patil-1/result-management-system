const Student = require("../public/model/students");
const path = require("path");

const getLogin = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../public/pages/student/studentLogin.html"
  );
  res.sendFile(filePath);
};

const postLogin = async (req, res) => {
  const { prnL, dateofbirthL } = req.body;

  try {
    const student = await Student.findOne({
      prn: prnL,
      dob: new Date(dateofbirthL),
    }).exec();

    if (!student) {
      return res.send("Student not found. Please check your PRN and DOB.");
    }

    res.render("student/studentMarksheet", { student: student });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const getDelete = async (req, res) => {
  const studentId = req.params.id;

  try {
    const removedStudent = await Student.findByIdAndRemove(studentId).exec();

    if (!removedStudent) {
      return res.status(404).send("Student not found.");
    }

    res.redirect("/teacher/dashboard#students");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const getEdit = async (req, res) => {
  const studentId = req.params.id;

  try {
    const student = await Student.findById(studentId).exec();
    if (!student) {
      return res.status(404).send("Student not found.");
    }
    res.render("student/editStudent", { student: student });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const postEdit = async (req, res) => {
  const studentId = req.params.id;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      {
        fname: req.body.firstName,
        lname: req.body.lastName,
        prn: req.body.prnNo,
        dob: req.body.dateofbirth,
        address: req.body.addr,
        country: req.body.countryName,
        state: req.body.stateName,
        zip: req.body.zipcode,
      },
      { new: true }
    ).exec();

    if (!updatedStudent) {
      return res.status(404).send("Student not found.");
    }

    res.redirect("/teacher/dashboard#students");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const getModuleResult = async (req, res) => {
  const module = req.params.module;

  try {
    const students = await Student.find({}, `prn fname lname ${module}`).exec();

    if (students.length === 0) {
      return res.status(404).send("No students found.");
    }

    res.render("student/moduleResult", { students: students, module: module });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

const postEditMarks = async (req, res) => {
  const module = req.params.module;
  const updatedMarks = req.body;

  try {
    for (const prn in updatedMarks) {
      await Student.updateOne({ prn: prn }, { [module]: updatedMarks[prn] });
    }

    res.redirect(`/student/moduleResult/${module}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred.");
  }
};

module.exports = {
  getLogin,
  postLogin,
  getDelete,
  getEdit,
  postEdit,
  getModuleResult,
  postEditMarks,
};
