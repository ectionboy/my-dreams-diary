import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const NoteItem = ({ item }) => {
  const itemDate = item.created;
  const inputDate = new Date(itemDate);
  const formattedDate = inputDate.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
  });

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
        <Typography variant="body2">{formattedDate}</Typography>
        <Box>
          <Button size="small">Share</Button>
          <Button size="small">More</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default NoteItem;
