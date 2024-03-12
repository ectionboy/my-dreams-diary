import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import BigNoteItem from 'components/BigNoteItem/BigNoteItem';
import { formatDate } from 'helpers';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NoteItem = ({ item }) => {
  const itemDate = item.createdAt;

  const [openBig, setOpenBig] = useState(false);

  const handleClickOpenBig = () => {
    setOpenBig(true);
  };

  const handleCloseBig = () => {
    setOpenBig(false);
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
          <Typography variant="body2">{formatDate(itemDate)}</Typography>
          <Box>
            {/* <Button size="small">Share</Button> */}
            <Button size="small" onClick={handleClickOpenBig}>
              More
            </Button>
            <Link to="mission">More</Link>
          </Box>
        </CardActions>
        <Outlet />
        {/* {openBig ? (
          <BigNoteItem item={item} isOpen={openBig} close={handleCloseBig} />
        ) : (
          ''
        )} */}
      </Card>
    </>
  );
};

export default NoteItem;
