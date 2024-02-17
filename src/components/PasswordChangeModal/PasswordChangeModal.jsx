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
  const { onClose, open } = props;

  const [oldPasswordValue, setOldPassword] = useState('');
  const [newPasswordValue, setNewPassword] = useState('');
console.log("oldPassword",oldPasswordValue)
console.log("newPassword",newPasswordValue)

  const inputOldPassword = ({ target: { value } }) => {
    setOldPassword(value);
  };
  const inputNewPassword = ({ target: { value } }) => {
    setNewPassword(value);
  };

  const handleClose = () => {
    onClose();
    setOldPassword('');
    setNewPassword('');
  };

  const handleSave = value => {
    onClose(value);
    setOldPassword('');
    setNewPassword('');
  };

  const [showOldPassword, setShowOldPassword] = useState(false);

  const handleClickShowOldPassword = () => setShowOldPassword(show => !show);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleClickShowNewPassword = () => setShowNewPassword(show => !show);

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
      <Box component="form" sx={{display:"flex", flexDirection:"column",gap:2, mx: 3, my: 1, minWidth: 10, minHeight: 200 }}>
      <FormControl variant="standard">
          <InputLabel htmlFor="oldPassword">Old password</InputLabel>
          <Input
            value={oldPasswordValue}
            onChange={inputOldPassword}
            id="oldPassword"
            type={showOldPassword ? 'text' : 'password'}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowOldPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showOldPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="newPassword">New password</InputLabel>
          <Input
            value={newPasswordValue}
            onChange={inputNewPassword}
            id="newPassword"
            type={showNewPassword ? 'text' : 'password'}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleSave({oldPasswordValue, newPasswordValue})}
        >
          Change
        </Button>
      </Box>
    </Dialog>
  );
}

export default PasswordChangeModal;
