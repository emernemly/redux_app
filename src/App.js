import "./App.css";
import { Route, Switch } from "react-router-dom";
import Edit from "./page/Edit";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Edit/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
