import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIsError} from "../../../store/auth/authSelectors";
import {List, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {resetError} from "../../../store/auth/authAction";
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import {addNewBrand, fetchBrands, onDeleteBrand} from "../../../store/devices/devicesThunk";
import {getBrands} from "../../../store/devices/devicesSelectors";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #006f74',
    boxShadow: 24,
    p: 4,
};

const CreateBrand = ({handleClose, open}) => {
    const dispatch = useDispatch();
    const isError = useSelector(getIsError);
    const brands = useSelector(getBrands);
    const [value, setValue] = useState('');


    useEffect(() => {
        dispatch(fetchBrands())
    }, [brands, dispatch]);

    const addBrand = () => {
        dispatch(addNewBrand(value));
        setValue('');
    }

    const onClickDelete = (id) => {
        dispatch(onDeleteBrand(id));
    };


    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleClose('brandVisible')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Brand
                    </Typography>
                    <div>
                        {isError && <Typography variant={'h4'} align={'center'} gutterBottom
                                                sx={{
                                                    fontFamily: 'Raleway',
                                                    color: '#d73b3b',
                                                    fontSize: '15px'
                                                }}
                        >
                            {isError}
                        </Typography>
                        }

                        <List style={{height: '75px', overflow: 'scroll'}}>
                            {brands.map((brand) => (
                                <Stack direction="row" alignItems="center" spacing={1}   key={brand.id}>
                                    <Typography
                                    > {brand.name} </Typography>
                                    <IconButton aria-label="delete" size="small"
                                                onClick={() => onClickDelete(brand.id)}>
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                </Stack>
                            ))}
                        </List>

                    </div>
                    <FormControl fullWidth sx={{margin: '20px 0'}} variant="standard">
                        <TextField
                            color="teal"
                            label="New brand"
                            id="newBrand"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            value={value} onChange={e => {
                            setValue(e.target.value)
                            dispatch(resetError())
                        }}
                        />
                    </FormControl>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained" onClick={addBrand} color="tea">Add</Button>
                        <Button variant="outlined" onClick={() => {
                            handleClose('brandVisible')
                            setValue('')
                        }}
                                color="teal">Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateBrand;

