import { Avatar, Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../redux/auth/authThunk';
import { nameSelector } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const name = useSelector(nameSelector);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logOutThunk());
  };

  const navToProfilePage = () => {
    navigate('/profile');
  };

  return (
    <Box
      component="div"
      sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      <Button
        sx={{ padding: '0px', textTransform: 'none', minWidth: '24px' }}
        onClick={navToProfilePage}
        type="button"
        size="small"
      >
        <SettingsIcon sx={{ fontSize: 30 }}  ></SettingsIcon>
      </Button>
      <Button
        sx={{ padding: '2px', textTransform: 'none', minWidth: '24px' }}
        onClick={navToProfilePage}
        type="button"
        size="small"
      >
        <Avatar
          sx={{ bgcolor: '#092ff3' }}
          alt="avatar"
          src="/broken-image.jpg"
        >
          {typeof name === 'string'
            ? name.trimStart().slice(0, 1).toUpperCase()
            : 'A'}
        </Avatar>
      </Button>
      <Button
        sx={{ padding: '8px 2px', textTransform: 'none', minWidth: '24px' }}
        onClick={exit}
        type="button"
        size="small"
      >
        <LogoutIcon></LogoutIcon>
      </Button>
    </Box>
  );
};

export default UserMenu;
