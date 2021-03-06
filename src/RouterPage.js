import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Forget from "./components/forgot_pass/Forgot";
import Nav from "./components/navbarContent/Nav";
import ManCont from "./components/navbar/ManCont";
import AddContractor from "./components/Add/AddContractor";


function RouterPage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgotPassword" component={Forget} />
        <Route exact path='/nav' component={Nav} />
        <Route exact path='/ManangeContractors' component={ManCont} />
        <Route exact path='/AddNewContractors' component={AddContractor}/>
      </Switch>
    </Router>
  );
}

export default RouterPage;
