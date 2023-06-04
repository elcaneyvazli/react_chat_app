import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavPage from "./components/nav_component/NavPage";
import Chat from "./components/user_component/chat";
import Contacts from "./components/user_component/contacts";
import Group from "./components/user_component/group";
import Profile from "./components/user_component/profile";
import Settings from "./components/user_component/settings";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-row">
        <NavPage />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/group" element={<Group />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
