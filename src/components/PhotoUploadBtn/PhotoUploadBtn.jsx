import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React from 'react';

const PhotoUploadBtn = ({ handle }) => {
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
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<AddPhotoAlternateIcon />}
      sx={{ width: '100%' }}
    >
      Upload photo
      <VisuallyHiddenInput type="file" accept="image/*" onChange={handle} />
    </Button>
  );
};

export default PhotoUploadBtn;
