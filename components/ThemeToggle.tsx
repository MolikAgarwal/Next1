import { Box, Switch, Typography } from '@mui/material';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <Typography>{darkMode ? 'Dark Mode' : 'Light Mode'}</Typography>
    </Box>
  );
};

export default ThemeToggle;
