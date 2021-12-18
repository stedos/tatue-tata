import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';
import App from './App';

const theme = createTheme();

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalPoliceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Polizei Tatue Tata Schliersee
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <App />
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
