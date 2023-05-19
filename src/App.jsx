import React, { createContext } from "react";
import "./index.scss";

import { Footer, Header } from "./Layouts";
import { Route, Router, Routes } from "react-router-dom";
import { HomePage, SolutionsPage } from "./Pages";
import MainContext from "./context";

export const Context = createContext(null);

export default function App() {
  const [state, setState] = React.useState(MainContext);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setState((prev) => {
        return {
          ...prev,
          window: {
            scrollTop: window.scrollY,
          },
        };
      });
    });
  }, [state]);

  return (
    <Context.Provider value={{ state, setState }}>
      <div className="App">
        <Header />
        <main className="main" style={{ flex: 1 }}>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Context.Provider>
  );
}
