import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabContent = {
    Home: {
      title: "Welcome to My Website",
      text: "This is the home page. The text is displayed inside a responsive box with padding that adapts to any screen size."
    },
    Portfolio: {
      title: "My Portfolio",
      text: "Showcase of my projects and achievements will go here."
    },
    "Educational History": {
      title: "Educational History",
      text: "Information about my academic journey will be displayed here."
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: "url('./coolbackgrounds-particles-stellar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
        position: "relative"
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          background: "rgba(0,0,50,0.6)",
          position: "sticky",
          top: 0
        }}
      >
        {Object.keys(tabContent).map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab)}
            style={{
              border: activeTab === tab ? "2px solid white" : "1px solid #ccc",
              borderRadius: "12px",
              padding: "10px 20px",
              background: activeTab === tab ? "white" : "transparent",
              color: activeTab === tab ? "navy" : "white",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            {tab}
          </motion.button>
        ))}
      </nav>

      {/* Page Content with Transitions */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.85)",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "600px",
              color: "#003366",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <h1>{tabContent[activeTab].title}</h1>
            <p>{tabContent[activeTab].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
