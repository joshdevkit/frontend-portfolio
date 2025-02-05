import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { timelineItems } from '../../data/timelineItems';

const Timeline = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-4xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Experience Timeline</h2>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />

        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Timeline;
