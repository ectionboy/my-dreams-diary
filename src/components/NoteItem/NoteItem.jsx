import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { formatDate } from 'helpers';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NoteItem = ({ item }) => {
  const itemDate = formatDate(item.createdAt);

  const navigate = useNavigate();

  const openMax = () => {
    navigate(item._id);
  };
  return (
    <>
      <Card component="li" sx={{ width: 245 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.imgUrl}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}
        >
          <Typography variant="body2">{itemDate}</Typography>
          <Box>
            {/* <Button size="small">Share</Button> */}
            <Button size="small" onClick={openMax}>
              More
            </Button>
          </Box>
        </CardActions>
        <Outlet />
      </Card>
    </>
  );
};

export default NoteItem;
