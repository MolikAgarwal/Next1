'use client';
import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import GreetingHeader from '../components/GreetingHeader';
import ThemeToggle from '../components/ThemeToggle';
import NotesCard from '../components/NotesCard';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="app-container">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <GreetingHeader />
        <Dashboard />
        <NotesCard />
      </main>
    </div>
  );
}
