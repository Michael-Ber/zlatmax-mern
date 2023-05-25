import { Routes, Route } from "react-router-dom";
import { useEffect, memo } from "react";
import { useDispatch } from "react-redux";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import { RegisterPage } from "../pages/registerPage/RegisterPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { MainPage } from "../pages/mainPage/MainPage";
import { CartPage } from "../pages/cortPage/CartPage";
import { CategoryPage } from "../pages/categoryPage/CategoryPage";
import { CatalogPage } from "../pages/catalogPage/CatalogPage";
import { FavoritesPage } from "../pages/favoritesPage/FavoritesPage";
import { Modal } from "../modal/Modal";

import { me } from "../../redux/auth/authSlice";
import { getGoods } from "../../redux/goods/goodsSlice";

const App = memo(() => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(me())
  dispatch(getGoods())
}, [dispatch])


return (
  <div className="app">
    <Header />

    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/cort" element={<CartPage/>}/>
      <Route path="/category/:categoryName" element={<CategoryPage />}/>
      <Route path="/catalog/:catalogName" element={<CatalogPage />}/>
      <Route path="/favorites" element={<FavoritesPage />}/>
      <Route path="/" element={<MainPage/>}/>

    </Routes>
    <Modal  />

    <Footer />
  </div>
);
})

export default App;
