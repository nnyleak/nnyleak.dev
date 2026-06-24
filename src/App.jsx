import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Nav from "./components/Nav";
import Creative from "./pages/Creative";
import "./styles/globals.css";
import "./styles/vars.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/creative" element={<Creative />} />
      </Routes>
    </>
  );
}

export default App;
