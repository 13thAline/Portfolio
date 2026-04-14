import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PersonaContext = createContext(null);

export function PersonaProvider({ children }) {
  const location = useLocation();
  const [persona, setPersona] = useState("neutral");

  useEffect(() => {
    if (location.pathname.startsWith("/aiml")) {
      setPersona("aiml");
    } else if (location.pathname.startsWith("/fullstack")) {
      setPersona("fullstack");
    } else {
      setPersona("neutral");
    }
  }, [location.pathname]);

  const togglePersona = () => {
    if (persona === "aiml") return "fullstack";
    if (persona === "fullstack") return "aiml";
    return "aiml";
  };

  const getOppositeRoute = () => {
    const path = location.pathname;
    if (path.startsWith("/aiml")) {
      return path.replace("/aiml", "/fullstack");
    }
    if (path.startsWith("/fullstack")) {
      return path.replace("/fullstack", "/aiml");
    }
    return "/aiml";
  };

  return (
    <PersonaContext.Provider
      value={{ persona, setPersona, togglePersona, getOppositeRoute }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
