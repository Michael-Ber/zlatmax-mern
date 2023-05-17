import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { RegisterPage } from "../pages/registerPage/RegisterPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { MainPage } from "../pages/mainPage/MainPage";
import { me } from "../../redux/auth/authSlice";
import { getGoods } from "../../redux/goods/goodsSlice";

function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(me());
  dispatch(getGoods());
}, [dispatch])

return (
  <div className="app">
    <Header />

    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<MainPage/>}/>

    </Routes>

    <Footer />
  </div>
);
}

export default App;
