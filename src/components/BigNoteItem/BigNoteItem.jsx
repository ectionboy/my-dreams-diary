import {
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BigNoteItem = () => {
  const item = {
    _id: '65e513acc6f6b0e5057f7c46',
    owner: '65d7c9a6835c35f7fb4745ff',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta dolores distinctio quia nesciunt doloribus, incidunt, asperiores atque necessitatibus, animi nam tenetur quibusdam porro nulla quam natus quod ipsa dolore?',
    imgUrl:
      'https://s.gravatar.com/avatar/055a397fe8da44d1be11ef06cc2dbcea?s=200',
    title: 'qwertgv h1,dspgols=e deglo=spdlghw=ep lg=welg-=wl-',
    category: 'None',
    createdAt: '2024-03-04T00:19:56.053Z',
    updatedAt: '2024-03-04T00:19:56.053Z',
  };

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/diary');
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      scroll="paper"
      sx={{ backgroundColor: 'rgba(54, 53, 53, 0.089)' }}
      BackdropProps={{ style: { backgroundColor: 'transparent' } }}
      PaperProps={{
        component: 'div',
        style: {
          boxShadow: 'none',
          minWidth: 300,
          maxWidth: 370,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        },
      }}
    >
      <DialogTitle variant="h5" maxWidth="320px" sx={{ width: 320 }}>
        {item.title}
      </DialogTitle>
      <DialogContent>
        <CardMedia
          sx={{ maxWidth: 320, height: 200, mb: 2 }}
          image={item.imgUrl}
          title={item.title}
        />
        <Typography variant="body2">{item.description}</Typography>
      </DialogContent>
      <DialogActions sx={{ padding: '0 24px 20px 24px' }}>
        {/* <Button onClick={handleClose}>Edit</Button> */}
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BigNoteItem;
