const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());

app.use(express.json()); //req.body


//student login
app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM student WHERE primaryemail = $1', [email]);

    if (user.rows.length === 0) {
    return res.status(401).json({ message: 'No user' });
    } 
    
    if (user.rows[0].password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful', user: user.rows[0] });

});
  

//get all actual courses
app.get("/course/:studentidnumber", async (req, res) => {
    try {
        const { studentidnumber } = req.params;
        const allCourses = await pool.query("SELECT * " +
        "FROM enrolls e, teaches t, course c, lecturer l " + 
        "WHERE e.coursecode = c.coursecode " + 
        "AND c.coursecode = t.coursecode " + 
        "AND t.lecturerid = l.lecturerid " + 
        "AND e.academicyear = '2023' " + 
        "AND e.semester = 'Fall' " + 
        "AND e.studentidnumber = $1",
        [studentidnumber]);
        res.json(allCourses.rows);

    } catch(err) {
        console.error(err);
    }
})

//get all attendance for a course based on the client req
app.get("/attendance/:studentidnumber/:coursecode", async (req, res) => {
    try {
        const { studentidnumber, coursecode } = req.params; 
        const allAttendance = await pool.query("SELECT a.* FROM attendance a WHERE a.coursecode = $1 AND a.studentidnumber = $2", [coursecode, studentidnumber]);
        res.json(allAttendance.rows);
    } catch(err) {
        console.error(err);
    }
});

//get all interim grades for a course based on the client req
app.get("/interimgrades/:studentidnumber/:courseCode", async (req, res) => {
    try {
        const { studentidnumber, courseCode }  = req.params;
        const allIntGrades = await pool.query(
            "SELECT * FROM takes t, assignment a WHERE t.courseCode = $1 AND t.coursecode = a.coursecode AND a.assignmentname = t.assignmentname AND StudentIdNumber = $2",
            [courseCode, studentidnumber]
        );
        res.json(allIntGrades.rows);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//get all interim grades
app.get("/interimgrades/:studentidnumber", async (req, res) => {
    try{
        const { studentidnumber }  = req.params;
        const allIntGrades = await pool.query(
            "SELECT * FROM takes t, course c, assignment a WHERE t.coursecode = c.coursecode AND t.coursecode = a.coursecode AND a.assignmentname = t.assignmentname AND StudentIdNumber = $1", 
            [studentidnumber]);
        res.json(allIntGrades.rows);
    } catch(err) {
        console.error(err);
    }
})


//get all attendance records
app.get("/attendance/:studentidnumber", async (req, res) => {
    try{
        const { studentidnumber }  = req.params;
        const allAttendance= await pool.query("SELECT * FROM attendance a, course c WHERE a.coursecode = c.coursecode AND studentidnumber = $1", [studentidnumber]);
        res.json(allAttendance.rows);
    } catch(err) {
        console.error(err);
    }
})

app.listen(3001, () => {
    console.log("server has started");
})
