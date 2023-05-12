import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../header/Header";
import { RegisterPage } from "../pages/registerPage/RegisterPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { MainPage } from "../pages/mainPage/MainPage";
import { me } from "../../redux/auth/authSlice";

function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(me())
}, [dispatch])

return (
  <div className="app">
    <Header />

    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<MainPage/>}/>

    </Routes>
  </div>
);
}

export default App;
