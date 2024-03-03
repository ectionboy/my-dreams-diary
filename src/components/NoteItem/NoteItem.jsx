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

const NoteItem = ({ item }) => {
  const itemDate = item.createdAt;
  // console.log(itemDate)
  // console.log(formatDate("2024-02-11T20:34:48.459Z"))
  // console.log(formatDate("2023-03-03T20:34:48.459Z"))
//  const inputDate = new Date(itemDate);
//  const formattedDate = inputDate.toLocaleString('en-GB', {
//    day: 'numeric',
//    month: 'short',
//  });
// const inputDate = new Date(itemDate);
// const formattedDate = `${('0' + inputDate.getDate()).slice(-2)}.${('0' + (inputDate.getMonth() + 1)).slice(-2)}.${inputDate.getFullYear()}`;


  return (
    <Card component="li" sx={{ width: 245 }}>
      <CardMedia sx={{ height: 140 }} image={item.imgUrl} title={item.title} />
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
          <Button size="small">Share</Button>
          <Button size="small">More</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default NoteItem;
