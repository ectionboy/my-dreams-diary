import React from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../redux/selectors';
import { Avatar } from '@mui/material';
const AvatarComonent = ({ size = 40 }) => {
  const profile = useSelector(profileSelector);
  return (
    <Avatar
      sx={{ bgcolor: '#092ff3', width: size, height: size }}
      alt="avatar"
      src={profile.avatar}
    >
      {typeof profile.name === 'string'
        ? profile.name.trimStart().slice(0, 1).toUpperCase()
        : 'A'}
    </Avatar>
  );
};

export default AvatarComonent;
