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
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import { loginThunk } from '../../redux/auth/authThunk';
  const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword(show => !show);
  
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };
    const navigate = useNavigate();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
  
    const inputEmail = ({ target: { value } }) => {
      setEmail(value);
    };
    const inputPassword = ({ target: { value } }) => {
      setPassword(value);
    };
  
    const dispatch = useDispatch();
  
    // const Log = data => {
    //   dispatch(loginThunk(data));
    // };
  
    const Log = async body => {
      try {
        await dispatch(loginThunk(body)).unwrap();
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
      Log({ email, password });
  
      setPassword('');
    };
  
    const navToRegPage = () => {
      navigate('/register', { replace: true });
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
          <Alert severity="warning">Incorrect login or password</Alert>
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
          {/* <h2>Sign in</h2> */}
          {/* <p>You need to sign in first</p> */}
          {/* <form  onSubmit={formSubmit}>
          <input type="email" id="email"  value={email} onChange={inputEmail}  required/>
          <input type="password" id="password" value={password} onChange={inputPassword}  required/>
          <button type="submit">Sign in</button>
        </form> */}
  
          <Typography variant="h4" gutterBottom>
            Sign in
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
              Login
            </Button>
          </Box>
          <Button
            sx={{
              maxWidth: '180px',
              margin: '8px auto',
            }}
            onClick={navToRegPage}
            type="button"
            size="small"
          >
            Create an account
          </Button>
          {/* <Link to="/register">Create an account</Link> */}
        </Container>
      </Box>
    );
  };
  
  export default Login;