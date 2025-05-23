// components/Dashboard.tsx
'use client';
import React, { useState } from 'react';
import TaskCard from './TaskCard';
import StatsCard from './StatsCard';
import ProgressCard from './ProgressCard';
import { Section, Task } from '../types';

const Dashboard = () => {
  const [tasks, setTasks] = useState<Record<Section, Task[]>>({
    Morning: [
      { id: 1, label: 'Wake up', done: true },
      { id: 2, label: 'Brush Teeth', done: false },
      { id: 3, label: 'Exercise', done: true },
      { id: 4, label: 'Walk', done: true }
    ],
    Work: [
      { id: 4, label: 'Check Email', done: true },
      { id: 5, label: 'Team Meeting', done: false },
      { id: 6, label: 'Code Review', done: true },
      { id: 10, label: 'Code', done: true }
    ],
    Evening: [
      { id: 7, label: 'Dinner', done: true },
      { id: 8, label: 'Read Book', done: true },
      { id: 9, label: 'Sleep', done: true },
      { id: 11, label: 'Walk', done: true }
    ],
  });

  const handleToggle = (section: Section, id: number) => {
    const updated = { ...tasks };
    updated[section] = updated[section].map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  const getStats = () => {
    let completed = 0;
    let total = 0;
    Object.values(tasks).forEach((section) => {
      completed += section.filter((t) => t.done).length;
      total += section.length;
    });
    return { completed, total };
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Dashboard</h1>

      {/* Top Green Progress Bars */}
      {(Object.keys(tasks) as Section[]).map((section) => {
        const completed = tasks[section].filter((t) => t.done).length;
        const total = tasks[section].length;
        const percent = Math.round((completed / total) * 100);
        return <ProgressCard key={section} label={section} percent={percent} />;
      })}

      {/* Task Cards */}
      <div className="task-section">
        {(Object.entries(tasks) as [Section, Task[]][]).map(([section, sectionTasks]) => (
          <TaskCard
            key={section}
            section={section}
            tasks={sectionTasks}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Stats Summary */}
      <StatsCard completed={getStats().completed} pending={getStats().total - getStats().completed} />
    </div>
  );
};

export default Dashboard;
