import "./App.css";
import Home from "./Pages/TrangChu/Home";
import DetailPage from "./Pages/ChiTiet/DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

//config for director page
// import { createBrowserHistory } from "history";
import DatVe from "./Pages/DatVe/DatVe";
import Admin from "./Pages/QuanLy/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" exact component={DetailPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/booking" exact component={DatVe} />

        <Route path="/admin" exact component={Admin} />

        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
