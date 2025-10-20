import { useRoutes } from "react-router-dom";
import Router from "./routes";
function App() {
  const routes = useRoutes(Router);
  return <>{routes}</>;
}

export default App;
