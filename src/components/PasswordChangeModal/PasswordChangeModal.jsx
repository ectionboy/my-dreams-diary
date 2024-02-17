import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

function PasswordChangeModal(props) {
  const { onClose, selectedValue, open } = props;

  const [password, setPassword] = useState('');

  const inputPassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
 
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change password</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: '#808080',
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ mx: 3, my: 1, minWidth: 10, minHeight: 200 }}>
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
        <Button
          variant="contained"
          size="small"
          sx={{ ml: '12px' }}
          onClick={() => handleListItemClick(password)}
        >
          Change
        </Button>
      </Box>
    </Dialog>
  );
}

export default PasswordChangeModal;
