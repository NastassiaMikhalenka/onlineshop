import React, {useState} from 'react';
import {deviceApi} from "../../../api/deviceApi";
import {useDispatch, useSelector} from "react-redux";
import {getIsError} from "../../../store/auth/authSelectors";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import {setIsError} from "../../../store/auth/authAction";

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

const CreateType = ({handleClose, open}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const isError = useSelector(getIsError);

    const addType = () => {
        deviceApi.createType({name: value}).then(data => {
            setValue('')
            handleClose('typeVisible')
        }).catch((e) => {
            // console.log(e)
            dispatch(setIsError(e.response.data.message));
        })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleClose('typeVisible')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Type
                    </Typography>
                    {/*{*/}
                    {/*    isError && <Typography variant={'h4'} align={'center'} gutterBottom*/}
                    {/*                           sx={{*/}
                    {/*                               fontFamily: 'Raleway',*/}
                    {/*                               color: '#d73b3b',*/}
                    {/*                               fontSize: '15px'*/}
                    {/*                           }}*/}
                    {/*    >*/}
                    {/*        {isError}*/}
                    {/*    </Typography>*/}
                    {/*}*/}
                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <TextField
                            id="standard-number"
                            label="New Type"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            value={value} onChange={e => setValue(e.target.value)}
                        />
                    </FormControl>
                    <Button variant="contained" onClick={addType}>Add</Button>
                    <Button variant="outlined" onClick={() => handleClose('typeVisible')}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateType;