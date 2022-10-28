import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Error from "./pages/Error";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about/*" element={<AboutComponent />} />

        <Route path="users" element={<Users />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
