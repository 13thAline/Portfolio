import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PersonaProvider } from "./context/PersonaContext";
import SlimNav from "./components/Navigation/SlimNav";
import PersonaSwitcher from "./components/PersonaSwitcher/PersonaSwitcher";
import Gateway from "./pages/Gateway/Gateway";
import AimlHome from "./pages/AimlHome/AimlHome";
import FullstackHome from "./pages/FullstackHome/FullstackHome";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Gateway />} />
        <Route path="/aiml" element={<AimlHome />} />
        <Route path="/fullstack" element={<FullstackHome />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PersonaProvider>
        <SlimNav />
        <PersonaSwitcher />
        <AnimatedRoutes />
      </PersonaProvider>
    </BrowserRouter>
  );
}
