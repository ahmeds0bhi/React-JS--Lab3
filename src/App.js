import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import ErrorPage from "./Components/ErrorPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AddProduct from "./Components/Add_product";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  let location = useLocation();
  let isValidRoutes = ["/", "/home", "/products", "/add"].includes(
    location.pathname
  );

  return (
    <>
      {isValidRoutes && <NavBar />}
        <Routes>
          {isValidRoutes ? (
            <>
              <Route>
                {["products", "/", "home"].map((path, index) => (
                  <Route path={path} element={<Products />} key={index} />
                ))}
              </Route>
              <Route path="/add" element={<AddProduct />} />
            </>
          ) : (
            <Route path="*" element={<ErrorPage />} />
          )}
        </Routes>
    </>
  );
}

export default App;
