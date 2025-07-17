"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setShowButton(false);
      });
    }
  };

  return (
    <>
      {showButton && (
        <motion.div
          className="flex items-center justify-items-start p-0 m-0 mb-[20px] list-none cursor-pointer w-full"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onPointerDown={handleInstall}
            onClick={() => {
              if (!window.PointerEvent) handleInstall();
            }}
            className="bg-pinklet-400 hover:bg-pinklet-200 text-white shadow-md rounded-full w-[110px] h-[33px]"
          >
            Install App
          </button>
        </motion.div>
      )}
    </>
  );
}
