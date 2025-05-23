import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const ProgressCard = ({ label, percent }) => (
  <Card sx={{ my: 2 }}>
    <CardContent>
      <Typography>{label}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={percent} />
        </Box>
        <Typography variant="body2" color="text.secondary">{`${percent}%`}</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default ProgressCard;
