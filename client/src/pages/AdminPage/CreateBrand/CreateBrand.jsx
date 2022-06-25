import React, {useState} from 'react';
import {deviceApi} from "../../../api/deviceApi";
import {useDispatch, useSelector} from "react-redux";
import {getIsError} from "../../../store/auth/authSelectors";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {resetError, setIsError} from "../../../store/auth/authAction";
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import {addNewBrand} from "../../../store/devices/devicesThunk";

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
    const [value, setValue] = useState('');

    const addBrand = () => {
        deviceApi.createBrand({name: value}).then(data => {
            setValue('');
            handleClose('brandVisible')
            dispatch(resetError())
        }).catch((e) => {
            dispatch(setIsError(e.response.data.message.message));
        })

    }

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

