import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

function PasswordChangeModal(props) {
  const { onClose, open } = props;
  const [changeBtnIsDisable, setChangeBtnIsDisable] = useState(true);

  const [oldPasswordValue, setOldPasswordValue] = useState('');
  const [newPasswordValue, setNewPasswordValue] = useState('');

  const inputOldPassword = ({ target: { value } }) => {
    setOldPasswordValue(value);
  };
  const inputNewPassword = ({ target: { value } }) => {
    setNewPasswordValue(value);
  };

  const handleClose = () => {
    onClose({ oldPasswordValue: null, newPasswordValue: null });
    setOldPasswordValue('');
    setNewPasswordValue('');
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };
  const handleSave = value => {
    if (oldPasswordValue === newPasswordValue) {
      return handleOpenSnackbar();
    }
    onClose(value);
    setOldPasswordValue('');
    setNewPasswordValue('');
  };

  const [showOldPassword, setShowOldPassword] = useState(false);

  const handleClickShowOldPassword = () => setShowOldPassword(show => !show);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleClickShowNewPassword = () => setShowNewPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  useEffect(() => {
    setChangeBtnIsDisable(true);
    if (oldPasswordValue !== '' && newPasswordValue !== '') {
      setChangeBtnIsDisable(false);
    }
  }, [newPasswordValue, oldPasswordValue]);

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
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mx: 3,
          my: 1,
          minWidth: 10,
          minHeight: 200,
        }}
      >
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
          <InputLabel error={openSnackbar} htmlFor="newPassword">
            New password
          </InputLabel>
          <Input
            value={newPasswordValue}
            error={openSnackbar}
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
          onClick={() => handleSave({ oldPasswordValue, newPasswordValue })}
          disabled={changeBtnIsDisable}
        >
          Change
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={7000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Change new password
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default PasswordChangeModal;
