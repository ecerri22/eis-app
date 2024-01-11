import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import SelectedCoursesPage from './pages/SelectedCoursesPage' 
import InterimGradesPage from './pages/InterimGradesPage' 
import AttendancePage from './pages/AttendancePage'
import MyProfilePage from './pages/MyProfilePage';
import Route from "./components/Route.js";

function Dashboard() {

  return (
    <div className='h-full w-full bg-gray-200 flex flex-col'>
      <div className=''>
        <Header  />
      </div>
      <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-300'> 
        <Route path="/homepage">
          <HomePage/>
        </Route>
        <Route path="/my-profile">
          <MyProfilePage />
        </Route>
        <Route path="/selected-courses">
          <SelectedCoursesPage/>
        </Route>
        <Route path="/interim-grades">
          <InterimGradesPage />
        </Route>
        <Route path="/attendance">
          <AttendancePage/>
        </Route>
      </div>
    </div>
  );
}

export default Dashboard;