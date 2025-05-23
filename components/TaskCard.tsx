import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@mui/material';

const TaskCard = ({ section, tasks, onToggle }) => (
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

export default TaskCard;
