// pages/index.jsx or app/page.jsx
import React from 'react';
import TypingTest from '../components/Test';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Main content will take up remaining space */}
      <div className="flex-grow">
        <TypingTest />
      </div>
      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}
