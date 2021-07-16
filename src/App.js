import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage user={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
