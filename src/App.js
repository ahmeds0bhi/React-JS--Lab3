import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import ErrorPage from "./Components/ErrorPage";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AddProduct from "./Components/Add_product";
import ShowProduct from "./Components/showProduct";
import EditProduct from './Components/EditProduct';
import TodosTable from "./Components/TodosTable";
import { TodosContextProvider } from "./ContextApis/TodosContext";
import Todos from "./Components/Todo";

function App() {
  return (
    <TodosContextProvider>  
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </TodosContextProvider>
  );
}

function AppRoutes() {

  return (
    <>
    <NavBar />
      <div className="container mt-3">
        <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/home" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/products/:id" element={<ShowProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
              <Route path="/todostable" element={<TodosTable/>} />
              <Route path="/todos" element={<Todos/>} />

            <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;