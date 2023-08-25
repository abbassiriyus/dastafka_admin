
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Construction from "./pages/Construction";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useState } from "react";

function App() {
  const [token,setToken]=useState(sessionStorage.getItem("token"))
  return (
    <div className="App">
      <Switch>
       
         {token?( <Main>
           <Route exact path="/dashboard" component={Home} />
           <Route exact path="/tables" component={Users} />
           <Route exact path="/Products" component={Products} />
           <Route exact path="/Construction" component={Construction} />
           <Route exact path="/profile" component={Profile} />
           <Redirect from="*" to="/dashboard" /></Main>
         ):(
      <div>
            <Route exact path="/login" component={SignIn} />
          <Redirect from="*" to="/login" />
      </div>
         )}
        
      </Switch>
    </div>
  );
}

export default App;
