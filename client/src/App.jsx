import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/login/loginoptions";
import Userlogin from "./screens/login/user";
import AdminLogin from "./screens/login/admin";
import HotelLogin from "./screens/login/hotel";
import HotelRegister from "./screens/register/hotel";
import UserRegister from "./screens/register/user";
import RegisterPage from "./screens/register/registerpage";
import HomePage from "./screens/home";
import Protectedroute from "./protectedroute";
import HotelIndex from "./components/hotelcom";
import LoginProtectedroute from "./loginprotectedroute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <LoginProtectedroute>
        <LoginPage />
        </LoginProtectedroute>
        } />
        <Route path="/login/user" element={
        <LoginProtectedroute><Userlogin /></LoginProtectedroute>
        } />
        <Route path="/login/admin" element={<LoginProtectedroute><AdminLogin /></LoginProtectedroute>} />
        <Route path="/login/hotel" element={<LoginProtectedroute><HotelLogin /></LoginProtectedroute>} />
        <Route path="/register" element={<LoginProtectedroute><RegisterPage /></LoginProtectedroute>} />
        <Route path="/register/hotel" element={<LoginProtectedroute><HotelRegister /></LoginProtectedroute>} />
        <Route path="/register/user" element={<LoginProtectedroute><UserRegister /></LoginProtectedroute>} />
        <Route
          path="/hotelhome"
          element={
            <Protectedroute>
              <HotelIndex />
            </Protectedroute>
          }
        />
        <Route
          path="/home"
          element={
            <Protectedroute>
              <HomePage />
            </Protectedroute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
