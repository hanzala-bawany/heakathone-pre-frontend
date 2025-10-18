import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import HomeParent from "./routes/HomeParent";
import AuthParent from "./routes/AuthParent";
import AppLayout from "./layout/AppLayout";



function App() {

  return (

    <AppLayout>
      <Routes>

        <Route element={<HomeParent />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthParent />} >
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<h1 className="text-[60px] bg-red-200 p-4 flex justify-center" >Page Not Found</h1>} />

      </Routes>
    </AppLayout>

  );
}

export default App;
