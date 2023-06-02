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
import { PaymentPage } from "../pages/paymentPage/PaymentPage";
import { NewsPage } from "../pages/newsPage/NewsPage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { ContactsPage } from "../pages/contactsPage/ContactsPage";
import { SearchResultsPage } from "../pages/searchResultsPage/searchResultsPage";
import { CardDetail } from "../pages/cardDetail/CardDetail";
import { Flashlight } from "../pages/Flashlight";
import { Rules } from "../pages/Rules";
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
    <div className="app__overlay"></div>
    <Header />
    <div className="app-container">
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cort" element={<CartPage/>}/>
        <Route path="/category/:categoryName" element={<CategoryPage />}/>
        <Route path="/catalog/:catalogName" element={<CatalogPage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>

        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contacts" element={<ContactsPage />}/>
        <Route path="/payment" element={<PaymentPage />}/>
        <Route path="/news" element={<NewsPage />}/>
        <Route path="/search_results" element={<SearchResultsPage />}/>
        <Route path="/card_detail/:id" element={<CardDetail />}/>
        <Route path="/rules" element={<Rules />}/>
        <Route path="/flashlight" element={<Flashlight />}/>

        <Route path="/" element={<MainPage/>}/>

      </Routes>
      <Modal  />
    </div>
    

    <Footer />
  </div>
);
})

export default App;
