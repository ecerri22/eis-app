import { createContext, useCallback, useState, useEffect } from "react";
import axios from "axios";

const EisContext = createContext();

const getInitialData = () => {
  const login = localStorage.getItem("login");
  if(login === "undefined"){
    return false;
  } else {
    return JSON.parse(login); 
  }
}

const getInitialUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : [];
}

function Provider({ children }) {
  //////NAVIGATION//////////
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    }
    
    window.addEventListener('popstate', handler);
    
    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, []);
  
  const navigation = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };
  
  /////////////////////////////API CALLS////////////////////////////
  ///////LOGIN//////////
  // const [users, setUsers] = useState([]);
  const [login, setLogin] = useState(getInitialData);
  const [currentUser, setCurrentUser] = useState(getInitialUser);
  
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  });

  const loginApp = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3001/login", { email, password });
      if (response.status === 200) {
        setLogin(true);
        setCurrentUser(response.data.user);
      } else {
        throw new Error(response.status); 
      }
    } catch (error) {
      throw error; 
    }
  };

  const removeDataFromStorage = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("currentUser");
    setLogin(false);
    setCurrentUser([]);
  }
  
  /////////GET USERS/////////
  const fetchUsers = useCallback(async (email, password) => {
    const response = await axios.post("http://localhost:3001/login", { email, password });
    // console.log(response);
    setCurrentUser(response.data.user); 
  });
  
  ///////////GET ENROLLED COURSES//////////
  const [courses, setCourses] = useState([]);

  const getCourses = async (studentid) => {
    try {
      const response = await axios.get(`http://localhost:3001/course/${studentid}`);
      setCourses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  ////////GET ALL ATTENDANCE RECORDS/////
  const [attendance, setAttendance] = useState([]);

  const getAttendances = async (studentid) => {
    try {
      const response = await axios.get(`http://localhost:3001/attendance/${studentid}`);
      // console.log(response);
      setAttendance(response.data);
    } catch(err){
      console.error(err);
    }
  }

  // console.log(attendance);

  ////////GET ATTENDANCE RECORDS FOR X COURSE/////
  const [attendanceCourse, setAttendanceCourse] = useState([]);

  const getAttendanceCourse = async (studentid, coursecode) => {
    try {
      const response = await axios.get(`http://localhost:3001/attendance/${studentid}/${coursecode}`);
      setAttendanceCourse(response.data); 
    } catch(err) {
      console.error(err);
    }
  };
  
  ////////GET ALL INTERIM GRADES/////
  const [interimGrades, setInterimGrades] = useState([]);

  const getAllInterimGrades = async (studentid) => {
    try {
      const response = await axios.get(`http://localhost:3001/interimgrades/${studentid}`);
      setInterimGrades(response.data);
    } catch(err){
      console.error(err);
    }
  }
  
  ///////GET ALL INTERIM GRADES FOR X COURSE/////////
  const [interimGradesCourse, setInterimGradesCourse] = useState([]);
  
  const getIntGrades = async (studentid, courseCode = '' ) => {
    try {
      const response = await axios.get(`http://localhost:3001/interimgrades/${studentid}/${courseCode}`);
      setInterimGradesCourse(response.data);
    } catch(err){
      console.error(err);
    }
  }
  
  //////////////////////
    const valueToShare = {
    currentPath, 
    navigation,
    loginApp,
    removeDataFromStorage,
    fetchUsers,
    currentUser,
    login,

    courses,
    getCourses,

    attendance,
    getAttendances,

    attendanceCourse,
    getAttendanceCourse,

    interimGrades,
    getAllInterimGrades,

    interimGradesCourse,
    getIntGrades
  };

  return (
    <EisContext.Provider value={valueToShare}>
      {children}
    </EisContext.Provider>
  );
}

export { Provider };
export default EisContext;
