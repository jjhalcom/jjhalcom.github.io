import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabContent = {
    Home: {
      title: "Welcome to My Website",
      text: "This is the home page. The text is displayed inside a responsive box with padding that adapts to any screen size.",
    },
    Portfolio: {
      title: "My Portfolio",
      text: "Showcase of my projects and achievements will go here.",
    },
    "Educational History": {
      title: "Educational History",
      text: "Information about my academic journey will be displayed here.",
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-blue-900 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/coolbackgrounds-particles-stellar.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 z-10" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-center space-x-8 py-6 z-20 bg-opacity-60 bg-blue-900 backdrop-blur-lg">
        {Object.keys(tabContent).map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className="rounded-xl px-6 py-2 text-white border-white hover:bg-white hover:text-blue-900"
          >
            {tab}
          </Button>
        ))}
      </nav>

      {/* Page Content with Transitions */}
      <div className="flex items-center justify-center min-h-screen relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 rounded-2xl shadow-2xl max-w-3xl w-11/12 p-8 md:p-12 text-center"
          >
            <h1 className="text-4xl font-bold text-blue-900 mb-6">
              {tabContent[activeTab].title}
            </h1>
            <p className="text-lg text-blue-800">{tabContent[activeTab].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
