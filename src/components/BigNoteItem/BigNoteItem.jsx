import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,

  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BigNoteItem = () => {
  const item = {
    _id: '65e513acc6f6b0e5057f7c46',
    owner: '65d7c9a6835c35f7fb4745ff',
    description: 'wdsafv',
    imgUrl:
      'https://s.gravatar.com/avatar/055a397fe8da44d1be11ef06cc2dbcea?s=200',
    title: 'qwertgvh1',
    category: 'None',
    createdAt: '2024-03-04T00:19:56.053Z',
    updatedAt: '2024-03-04T00:19:56.053Z',
  };
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/diary');

  };


  return (
    // <Card component="li"}>
    <Backdrop
      open={true}
      onClick={handleClose}
      sx={{
        backgroundColor: '#00000018',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {item.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Backdrop>

    // <Box sx={{ width: 445, display: 'flex', justifyContent: 'center' }}>
    //   <Dialog open={isOpen} onClose={close} >
    //     <DialogTitle>

    //     </DialogTitle>
    //     <DialogContent
    //       sx={{
    //         width: 300,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         gap: '12px',
    //       }}
    //     >
    //       <Typography variant="body2" color="text.secondary">
    //         {item.description}
    //       </Typography>
    //     </DialogContent>
    //     <DialogActions sx={{ padding: '0 24px 20px 24px' }}>
    //       <Button onClick={close}>Close</Button>
    //       {/* <Button variant="outlined" type="submit">
    //         Add
    //       </Button> */}
    //     </DialogActions>
    //   </Dialog>
    //   </Box>
    // </Card>
  );
};

export default BigNoteItem;
