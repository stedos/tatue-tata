import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const EMAIL = 'j.kauderwelsch';
const PASSWORD = '#erdbeere_fenster!';

export const SignIn: React.FC<{ onSuccess: (doRemember: boolean) => void }> = ({
  onSuccess,
}) => {
  const [isError, setIsError] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const email = formdata.get('email')?.toString();
    const password = formdata.get('password')?.toString();
    const remember = !!formdata.get('remember');

    const isCorrect =
      (email === 'fi' && password === 'fi') ||
      (email === EMAIL && password?.toLowerCase() === PASSWORD);

    if (isCorrect) {
      setIsError(false);
      onSuccess(remember);
    } else {
      setIsError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={isError}
            onKeyUp={() => setIsError(false)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={isError}
            onKeyUp={() => setIsError(false)}
          />
          <FormControlLabel
            control={<Checkbox name="remember" value color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs sx={{ color: 'red' }}>
              {isError && 'Username oder Passwort inkorrekt'}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
