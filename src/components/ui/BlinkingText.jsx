import React from 'react';
import { motion } from 'framer-motion';

const BlinkingText = ({ position }) => {
    return (
        <motion.p
            className="text-xl text-blue-900 mb-2"
            animate={{
                opacity: [1, 0, 1], // Animate opacity to create the blink effect
            }}
            transition={{
                duration: 3, // Total duration for one blink cycle
                repeat: Infinity, // Repeat indefinitely
                repeatType: "loop",
                ease: "easeInOut",
            }}
        >
            {position}
        </motion.p>
    );
};

export default BlinkingText;
