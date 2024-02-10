import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from '../../redux/auth/authThunk';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const Reg = async body => {
    try {
      await dispatch(signUpThunk(body)).unwrap();
    } catch (error) {
      setError(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  const formSubmit = e => {
    e.preventDefault();
    Reg({ name, email, password });
    setPassword('');
  };
  const inputName = ({ target: { value } }) => {
    setName(value);
  };
  const inputEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const inputPassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const navigate = useNavigate();

  const navToLogPage = () => {
    navigate('/login', { replace: true });
  };
  const navToMainPage = () => {
    navigate('/', { replace: true });
  };

  return (
    <Box>
            <Snackbar
        open={error}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity="warning">Something is wrong</Alert>
      </Snackbar>
      <Button
        sx={{
          maxWidth: '180px',
          margin: '16px',
        }}
        onClick={navToMainPage}
        type="button"
        size="small"
      >
        <ArrowBackIosIcon />
        Go to main page
      </Button>
      
      <Container
        sx={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign up
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          You need to sign in first
        </Typography>
        <Box
          onSubmit={formSubmit}
          component="form"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <TextField
            value={name}
            onChange={inputName}
            id="name"
            label="Name"
            variant="standard"
            type="text"
            required
          />
          <TextField
            value={email}
            onChange={inputEmail}
            id="email"
            label="Email"
            variant="standard"
            type="email"
            required
          />
          <FormControl variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              value={password}
              onChange={inputPassword}
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button type="submit" variant="contained">
            Register
          </Button>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            maxWidth: '180px',
            margin: '0 auto',
            marginTop: '16px',
          }}
        >
          Already have an account?
        </Typography>
        <Button
          sx={{
            maxWidth: '180px',
            margin: '0 auto',
          }}
          onClick={navToLogPage}
          type="button"
          size="small"
        >
          Sign in
        </Button>
      </Container>
    </Box>
    // </div>
  );
};

export default Register;