import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bag_container from "./Components/Bag_container/Bag_container";

import CategoriesDashboard from "./Components/CategoriesDash/Categoriesdash";
import Footer from "./Components/Footer/Footer";
import Homedash from "./Components/HomeDash/Homedash";
import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import MensDashboard from "./Components/MensDashboard/MensDashboard";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <HomeNavbar />
        {/* <Bag_container /> */}

        <Switch>
          <Route exact path="/">
            <Homedash />
          </Route>

          <Route exact path="/mendashboard">
            <MensDashboard />
          </Route>

          <Route exact path="/categoriesdashboard">
            <CategoriesDashboard />
          </Route>
          {/* <MensDashboard /> */}
          {/* <CategoriesDashboard /> */}
          {/* <ProductDetails /> */}

          <Route exact path="/:shirt">
            <ProductDetails />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
