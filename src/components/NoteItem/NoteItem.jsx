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
