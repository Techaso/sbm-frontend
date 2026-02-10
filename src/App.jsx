import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateEditPost from "./pages/CreateEditPost/CreateEditPost";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateEditPost />} />
          <Route path="/edit/:id" element={<CreateEditPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
