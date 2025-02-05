import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Sidebar from './components/Sidebar';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <MobileNavbar />
        <Sidebar />
        <main className="md:pl-64 pt-10 md:pt-0">
          <div className="p-4 md:p-8">
            <Header />
            <Timeline />
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
