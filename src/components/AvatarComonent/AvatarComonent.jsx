import React from 'react';
import { useSelector } from 'react-redux';
import { nameSelector } from '../../redux/selectors';
import { Avatar } from '@mui/material';
const AvatarComonent = ({ size = 40 }) => {
  const name = useSelector(nameSelector);
  return (
    <Avatar
      sx={{ bgcolor: '#092ff3', width: size, height: size }}
      alt="avatar"
      src="/broken-image.jpg"
    >
      {typeof name === 'string'
        ? name.trimStart().slice(0, 1).toUpperCase()
        : 'A'}
    </Avatar>
  );
};

export default AvatarComonent;
