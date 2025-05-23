// components/TaskCard.tsx
'use client';
import React from 'react';
import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { Task, Section, OnToggle } from '../types';

type TaskCardProps = {
  section: Section;
  tasks: Task[];
  onToggle: OnToggle;
};

const TaskCard = ({ section, tasks, onToggle }: TaskCardProps) => {
  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6">{section} Tasks</Typography>
        {tasks.map((task) => (
          <FormControlLabel
            key={task.id}
            control={
              <Checkbox
                checked={task.done}
                onChange={() => onToggle(section, task.id)}
              />
            }
            label={task.label}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TaskCard;
