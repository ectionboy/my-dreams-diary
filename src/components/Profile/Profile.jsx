import { Box, Container, TextField, Typography } from '@mui/material';
import AvatarComonent from 'components/AvatarComonent/AvatarComonent';
import React from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../redux/selectors';

const Profile = () => {
  const profile = useSelector(profileSelector);

  // const [newProfileState, setNewProfileState] = React.useState(null);

  console.log(profile);

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
      <AvatarComonent size={140} />
      <Typography variant="h5" component="h2" sx={{ margin: '4px 0' }}>
        My Profile
      </Typography>

      <Box component="form">
        <TextField id="name" label="Name" defaultValue={profile.name} />
        <TextField id="email" label="Email" defaultValue={profile.email} />
      </Box>
    </Container>
  );
};

export default Profile;
