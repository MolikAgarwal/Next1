'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const NotesCard = () => {
  const [notes, setNotes] = useState('');
  const [hasMounted, setHasMounted] = useState(false); // 👈 hydration-safe flag

  useEffect(() => {
    setHasMounted(true); // flag true only after component mounts
    const saved = localStorage.getItem('notes');
    if (saved) setNotes(saved);
  }, []);

  const saveNotes = () => {
    localStorage.setItem('notes', notes);
  };

  if (!hasMounted) return null; // 👈 Don't render anything on first SSR pass

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6">Notes</Typography>
        <TextField
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          multiline
          rows={4}
          fullWidth
          placeholder="Write your notes here..."
        />
        <Button sx={{ mt: 2 }} variant="contained" onClick={saveNotes}>
          Save Notes
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotesCard;
