import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../redux/selectors';
import PasswordChangeModal from 'components/PasswordChangeModal/PasswordChangeModal';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Profile = () => {
  const profile = useSelector(profileSelector);

  const [saveBtnIsDisable, setSaveBtnIsDisable] = useState(true);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (!name && !email) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [email, name, profile.email, profile.name]);

  const inputName = ({ target: { value } }) => {
    setName(value);
  };
  const inputEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  useEffect(() => {
    if (profile) {
      setSaveBtnIsDisable(true);

      if (profile.name !== name) {
        setSaveBtnIsDisable(false);
      }

      if (profile.email !== email) {
        setSaveBtnIsDisable(false);
      }
    }
  }, [email, name, profile, profile.email, profile.name]);

  // const [newProfileState, setNewProfileState] = useState(null);

  // console.log(profile);

  const [open, setOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = ({ oldPasswordValue, newPasswordValue }) => {
    setOpen(false);
    if (oldPasswordValue && newPasswordValue) {
      setOldPassword(oldPasswordValue);
      setNewPassword(newPasswordValue);
    }
  };
  console.log(oldPassword);

  console.log(newPassword);

  return (
    <Container
      maxWidth="xl"
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: '24px 0',
        maxWidth: 345,
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
        }}
      >
        <Button component="label">
          <Badge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Avatar sx={{ width: 35, height: 35, right: 140 / 2 }} alt="+">
                <AddCircleIcon color="action" sx={{ width: 45, height: 45 }} />
              </Avatar>
            }
          >
            <Avatar
              sx={{ bgcolor: '#092ff3', width: 140, height: 140 }}
              alt="avatar"
              src={profile.avatar}
            >
              {typeof profile.name === 'string'
                ? profile.name.trimStart().slice(0, 1).toUpperCase()
                : 'A'}
            </Avatar>
            <VisuallyHiddenInput type="file" />
          </Badge>
        </Button>
        <Typography variant="h5" component="h2" sx={{ margin: '12px 0' }}>
          My Profile
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '16px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
          }}
        >
          <TextField
            id="name"
            label="Name"
            defaultValue={profile.name}
            onChange={inputName}
          />
          <TextField
            id="email"
            label="Email"
            defaultValue={profile.email}
            onChange={inputEmail}
          />
        </Box>
        <Button type="submit" variant="contained" disabled={saveBtnIsDisable}>
          Save
        </Button>
      </Box>
      <Divider />
      <Box component="div" sx={{ display: 'flex', width: '100%', mt: '12px' }}>
        <Typography variant="p" component="h2" sx={{ margin: '4px 0' }}>
          Password
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ ml: '12px' }}
          onClick={handleClickOpen}
        >
          Change
        </Button>
      </Box>

      <PasswordChangeModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default Profile;
