import { Box, Switch, Typography } from '@mui/material';

type ThemeToggleProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
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
