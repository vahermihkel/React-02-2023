import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import Cart from "./pages/public/Cart";
import Shops from "./pages/public/Shops";
import {ContactUs} from "./pages/public/ContactUs";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import MaintainCategories from "./pages/admin/MaintainCategories";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import SingleProduct from './pages/public/SingleProduct';

// 1h15min
// 13.03  13.00-16.30  paus: 14.45-15.00
// 15.03  13.00-16.30  14.45-15.00
// 20.03  13.00-16.30  14.45-15.00
// 22.03  13.00-16.15  xxxxxxxxxx
// 27.03  13.00-16.30  14.45-15.00
// 29.03  13.00-16.15  xxxxxxxxxx
// 03.04  13.00-16.30  14.45-15.00

function App() {
  const { t, i18n } = useTranslation();

  const updateLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <div className="App">
      {/* <h1>{t('Welcome to React')}</h1> */}

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
          </Nav>
          <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")} />
          <img className="lang" src="/estonian.png" alt=""  onClick={() => updateLang("ee")} />
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
      </Routes>
    </div>
  );
}

export default App;

// LinkedIn
// MeetFrank
// Ettevõtete kodulehed

// CVOnline / CVKeskus on jäämäe pealne tipp

// 3-4-5 vähemalt projekti algusest lõpuni - ideaalis 10 projekti

// 1-2 kuud palgata
// 3-4 kuud miinimum
// 5kuud-12kuud 1000bruto
// 1-1.5a 1500bruto
// 2 2000 bruto
// 3 3000 bruto 2313€   ---  4414
// 4 4000 bruto
// 5 5000 bruto 3856€   ---  6690

// 1. kood selgeks saada
// 2. ettevõttesse tööle jõuda - 20CV-d vähe
// 3. esimest korda ettevõttes muudatusi

// 1.-1.5a   3nädalat   i62    6 inimest korraga