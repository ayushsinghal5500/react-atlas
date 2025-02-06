// App.jsx
import { RouterProvider } from "react-router-dom";
import router from "./routers/AppRouter";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;