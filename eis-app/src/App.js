import { useContext, useState } from "react";
import Dashboard from "./Dashboard";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar/Sidebar";
import EisContext from "./components/context/eis";
 
function App() {
    const { login } = useContext(EisContext);

    return (
        <div className="flex h-screen">
            {!login &&(
                <LoginPage />
            )} 
            {login && (
                <>
                    <div className="w-1/6 h-screen sticky top-0">
                        <Sidebar/>
                    </div>
                    <div className="w-5/6">
                        <Dashboard />
                    </div>
                </>
            )}
         </div>
    )
 }
 
 
export default App;