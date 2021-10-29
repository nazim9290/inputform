import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import Tourmanage from "./Component/Tourmanage/Tourmanage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Tourmanage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
