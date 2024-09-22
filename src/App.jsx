import UseRouteCustom from "./hooks/UseRouteCustom";
import UserLayout from "./template/UserLayout/UserLayout";

function App() {
  const routes = UseRouteCustom();
  return routes;
}

export default App;
