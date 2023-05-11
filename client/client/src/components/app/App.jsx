import { Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { RegisterPage } from "../pages/registerPage/RegisterPage";
import { LoginPage } from "../pages/loginPage/LoginPage";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
