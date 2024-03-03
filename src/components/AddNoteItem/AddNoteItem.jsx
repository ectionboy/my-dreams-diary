import {
  Alert,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import PhotoUploadBtn from 'components/PhotoUploadBtn/PhotoUploadBtn';

const AddNoteItem = () => {
  const categories = ["Sport", "Machinery", "Technics", "Electronics" ];

  // Modal
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  const handleOpenAddNoteModal = () => {
    setOpenAddNoteModal(true);
  };

  const handleCloseAddNoteModal = () => {
    setOpenAddNoteModal(false);
    setCategory("");
    setName("");
    setDescription("");
    handleFileClear();
  };

  // category
  const [category, setCategory] = useState('');

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  // isPhoto ?
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = event => {
    const file = event.target.files[0];
    const fileType = file.type;
    if (fileType.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      handleOpenSnackbar()
    }
  };
  const handleFileClear = event => {
    setSelectedFile(null);

  }
  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  // form controll
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const inputTitle = ({ target: { value } }) => {
    setName(value);
  };
  const inputDescription = ({ target: { value } }) => {
    setDescription(value);
  };


  return (
    <>
      <Card
        component="li"
        sx={{ width: 245, display: 'flex', justifyContent: 'center' }}
      >
        <Button
          onClick={handleOpenAddNoteModal}
          size="small"
          sx={{ flexDirection: 'column', width: '100%', height: '100%' }}
        >
          <Typography variant="h1" component="p">
            +
          </Typography>
          <Typography variant="h2" component="p">
            Add
          </Typography>
        </Button>
      </Card>
      {/* -------form------- */}
      <Dialog
        open={openAddNoteModal}
        onClose={handleCloseAddNoteModal}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>Add note</DialogTitle>
        <DialogContent
          sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* -------title input------- */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            value={name}
            onChange={inputTitle}
          />
          {/* -------category select------- */}
          <FormControl>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              label="Category"
              value={category}
              onChange={handleChangeCategory}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* -------description input------- */}
          <TextField
            multiline
            rows={4}
            margin="dense"
            id="description"
            name="description"
            label="Description"
            value={description}
            onChange={inputDescription}
          />
          {/* -------photo upload------- */}
          {selectedFile ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: 37,
                padding: 1,
                backgroundColor: '#ced5d875',
                borderRadius: 1,
              }}
            >
              <Typography>{selectedFile.name.length > 20 ? selectedFile.name.substring(0, 20)+"...": selectedFile.name}</Typography>
              <IconButton onClick={handleFileClear} aria-label="Delete photo">
                <DeleteIcon />
              </IconButton>
            </Box>
          ) : (
            <PhotoUploadBtn handle={handleFileChange} />
          )}
        </DialogContent>
        {/* -------form actions buttons -------*/}
        <DialogActions sx={{ padding: '0 24px 20px 24px' }}>
          <Button onClick={handleCloseAddNoteModal}>Cancel</Button>
          <Button variant="outlined" type="submit" endIcon={<CreateIcon />}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/*------- Alert -------*/}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={7000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This file is not a photo
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddNoteItem;
