"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/quiz");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="mt-4 text-4xl font-bold text-white">
          Willkommen zum Quiz!
        </h1>
        <p className="mt-2 text-lg text-white">
          Danke fürs Zuhören bei meiner Präsentation
        </p>
      </motion.div>
    </div>
  );
}
