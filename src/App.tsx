import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SoulCalc from './components/SoulCalc';
import './App.css';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<'calc'>('calc');
  
  return (
    <div className="app-container">
      <div className="content-area">
        <AnimatePresence mode="wait">
          {activeModule === 'calc' && (
            <motion.div
              key="calc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="module-container"
            >
              <SoulCalc />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;