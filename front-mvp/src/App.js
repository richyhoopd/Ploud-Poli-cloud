import "./Styles/App.scss";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RegisterPersonal from "./Pages/RegisterPersonal";
import RegisterHome from "./Pages/RegisterHome";
import RegisterCode from "./Pages/RegisterCode";
import RegisterConfirm from "./Pages/RegisterConfirm";
import PasswordChange from "./Pages/PasswordChange";
import PasswordChangeEmail from "./Pages/PasswordChangeEmail";
import FormType from "./Pages/FormType";
import FormProblem from "./Pages/FormProblem";
import FormConfirm from "./Pages/FormConfirm";
import FormDevice from "./Pages/FormDevice";
import ProductScreen from "./Pages/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import CartScreen from "./Pages/CartScreen";
import ShippingAddressScreen from "./Pages/ShippingAddressScreen";
import Logout from "./Pages/Logout";
import PaymentMethodScreen from "./Pages/PaymentMethodScreen";
import PlaceOrderScreen from "./Pages/PlaceOrderScreen";
import OrderScreen from "./Pages/OrderScreen";
import Tarea from "./Pages/Tarea";
import ProfileScreen from "./Pages/ProfileScreen";
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardScreen from "./Pages/DashboardScreen";
import AdminRoute from "./Components/AdminRoute";
import SearchScreen from "./Pages/SearchScreen";
import ProductListScreen from "./Pages/ProductListScreen";
import ProductEditScreen from "./Pages/ProductEditScreen";
import OrderListScreen from "./Pages/OrderListScreen";
import UserListScreen from "./Pages/UserListScreen";
import UserEditScreen from "./Pages/UserEditScreen";
import SellerRoute from "./Components/SellerRoute";
import SellerScreen from './Pages/SellerScreen';
import CategoryCreateScreen from "./Pages/CategoryCreateScreen";
import CategoryLIstScreen from "./Pages/CategoryLIstScreen";
import PhoneRepairOptions from "./Pages/PhoneRepairOptions";
import AppleRepairOptions from './Pages/AppleRepairOptions';
import PcRepairOptions from "./Pages/PcRepairOptions";
import LaptopRepairOptions from "./Pages/LaptopRepairOptions";
import PerifericsRepairOptions from "./Pages/PerifericsRepairOptions";
import ComponentsRepairOptions from "./Pages/ComponentsRepairOptions";
import Terminos from "./Pages/Terminos";
import Cookies from "./Pages/Cookies";
import Datos from "./Pages/Datos";
import Finanzas from "./Pages/Finanzas";
import Privacidad from "./Pages/Privacidad";
import Creditos from "./Pages/Creditos";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import TableroAlumno from "./Pages/TableroAlumnos";
import Materia from "./Pages/Materia";
import Entrega from './Pages/Entrega';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/registro-personal" element={<RegisterPersonal />} />
          <Route path="/signout" element={<Logout />} />
          <Route path="/envio" element={<ShippingAddressScreen />} />
          <Route path="/pago" element={<PaymentMethodScreen />} />
          <Route path="/orden" element={<PlaceOrderScreen />} />
          <Route path="/domicilio" element={<RegisterHome />} />
          <Route path="/confirma-registro" element={<RegisterCode />} />
          <Route path="/confirma-registro2" element={<RegisterConfirm />} />
          <Route path="/repara/dispositivo" element={<FormDevice />} />
          <Route path="/problema" element={<FormProblem />} />
          <Route path="/repara/opciones" element={<FormConfirm />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/cambiar-contraseña" element={<PasswordChange />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/repara" element={<FormType />} />
          <Route path="/repara/celulares" element={<PhoneRepairOptions />} />
          <Route path="/repara/laptop" element={<LaptopRepairOptions />} />
          <Route path="/repara/pc" element={<PcRepairOptions />} />
          <Route path="/repara/apple" element={<AppleRepairOptions />} />
          <Route path="/repara/componentes" element={<ComponentsRepairOptions />} />
          <Route path="/repara/lineablanca" element={<PerifericsRepairOptions />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/finanzas" element={<Finanzas />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/creditos" element={<Creditos />} />
          <Route path="/*" element={<div>Lo sentimos, estamos trabajando en ello :(</div>} />
          <Route path="/seller/:id?" element={<SellerScreen />} />
          <Route
            path="/confirmar-cambiar-contraseña"
            element={<PasswordChangeEmail />}
          />
          <Route path="/carrito" element={<CartScreen />} />
          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tarea"
            element={
              <ProtectedRoute>
                <Tarea />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <ProfileScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tablero"
            element={
              <ProtectedRoute>
                <TableroAlumno />
              </ProtectedRoute>
            }
          />
          <Route
            path="/materia"
            element={
              <ProtectedRoute>
                <Materia />
              </ProtectedRoute>
            }
          />
          <Route
            path="/materia/entrega"
            element={
              <ProtectedRoute>
                <Entrega />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <DashboardScreen />
              </AdminRoute>
            }
          ></Route>
          
          
          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <OrderListScreen />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <UserListScreen />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/user/:id"
            element={
              <AdminRoute>
                <UserEditScreen />
              </AdminRoute>
            }
          ></Route>
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
