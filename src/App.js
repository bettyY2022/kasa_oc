import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404 from './pages/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error404/>
  },
  {
    path: "/details",
    element: <Details/>,
  },
  {
    path: "/about",
    element: <About/>,
  },

]);


function App() {
  return (
    <RouterProvider router={router} >
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </RouterProvider>
  );
}

export default App;
