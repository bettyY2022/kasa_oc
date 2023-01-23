import "./App.css";
import AppRouter from "./routes/AppRouter";
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    <RouterProvider router={AppRouter}></RouterProvider>
  );
}

export default App;
