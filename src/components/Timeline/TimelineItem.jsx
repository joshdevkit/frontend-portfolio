import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative mb-8 md:mb-16 ${isEven ? 'md:pr-[50%]' : 'md:pl-[50%] md:ml-auto '
        }`}
    >
      <div className="hidden md:block absolute top-6 left-[50%] w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10" />

      <div className={`relative ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
        <Card className="w-full md:max-w-[calc(100%-1rem)]">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary md:hidden" />
              <CardDescription className="text-primary font-bold">{item.year}</CardDescription>
            </div>
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription className="text-lg">{item.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-sm md:text-base">
                  <span className="ml-[-0.5rem]">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default TimelineItem;