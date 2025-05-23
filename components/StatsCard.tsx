import { Card, CardContent, Typography } from '@mui/material';

const StatsCard = ({ completed, pending }) => {
  const total = completed + pending;
  const percentage = Math.round((completed / total) * 100);

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6">Task Statistics</Typography>
        <Typography>Completed: {completed}</Typography>
        <Typography>Pending: {pending}</Typography>
        <Typography>Total Completion: {percentage}%</Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
