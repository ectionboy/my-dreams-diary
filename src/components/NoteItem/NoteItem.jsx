import React from 'react';

const NoteItem = ({ item }) => {
  return (
    <>
      <img src={item.imgUrl} alt="" />
      <p key={item._id}>{item.title}</p>
    </>
  );
};

export default NoteItem;
