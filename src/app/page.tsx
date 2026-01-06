"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
    const titles = [
        "Software Engineer",
        "Yogi",
        "Martial Artist",
        "Salsa Dancer",
        "World Traveler",
        "Writer",
        "Life Coach",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((i) => (i + 1) % titles.length),
            3500
        );
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <div className="max-w-3xl mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-8xl tracking-tight text-center ">Tolu Stevens</h1>

            <div className="text-lg sm:text-xl md:text-2xl text-[rgb(134,134,134)] h-6 sm:h-7 md:h-8 relative overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={titles[index]}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute"
                    >
                        {titles[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}