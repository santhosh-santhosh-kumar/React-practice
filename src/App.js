import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Details from "./Details";
import Form from "./Form";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import View from "./View"
import Edit from "./Edit";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/"} element={<Form></Form>}></Route>
    <Route path={"/details"} element={<Details></Details>}></Route>
    <Route path={"/view/:id"} element={<View></View>}></Route>
    <Route path={"/edit/:id"} element={<Edit></Edit>}></Route>
    </Routes></BrowserRouter>
    </>
  );
}

export default App;
