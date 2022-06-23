import React, {useEffect, useState} from 'react';
import {deviceApi} from "../../../api/deviceApi";
import {isSelectedBrand, isSelectedType, setBrands, setTypes} from "../../../store/devices/devicesAction";
import {useDispatch, useSelector} from "react-redux";
import {getBrands, getSelectedBrand, getSelectedType, getTypes} from "../../../store/devices/devicesSelectors";
import Box from "@mui/material/Box";
import {Input, InputAdornment, ListItem, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';

import Modal from '@mui/material/Modal';
import {resetError} from "../../../store/auth/authAction";



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


const CreateDevice = ({handleClose, open}) => {
    const dispatch = useDispatch();

    const [type, setType] = React.useState('');
    const [brand, setBrand] = React.useState('');


    const [name, setName] = useState('')
    const [price, setPrice] = useState(null)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])


    const selectedType = useSelector(getSelectedType);
    const selectedBrand = useSelector(getSelectedBrand);
    const types = useSelector(getTypes);
    const brands = useSelector(getBrands);


    const resetData = () => {
        setType('')
        setBrand('')
        setName('')
        setPrice(0)
        setFile(null)
        setInfo([])
    }


    useEffect(() => {
        deviceApi.fetchTypes().then(data => setTypes(data))
        deviceApi.fetchBrands().then(data => setBrands(data))
    }, [])

    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', selectedBrand.id)
        formData.append('typeId', selectedType.id)
        formData.append('info', JSON.stringify(info))
        deviceApi.createDevice(formData).then(data => {
            handleClose('deviceVisible')
            resetData()
        })
    }

    return (

        <div>
            <Modal
                open={open}
                onClose={() => handleClose('deviceVisible')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Device
                    </Typography>
                    <form>
                        <Button variant="outlined" onClick={resetData} startIcon={<DeleteIcon />}>
                            Reset All data
                        </Button>
                    <FormControl variant="standard" sx={{m: 1, minWidth: 310}}>
                        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                            label="Type"
                        >
                            {types.map(type =>
                                <MenuItem value={type.name} key={type.id}   onClick={() => dispatch(isSelectedType(type))}>
                                    {type.name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{m: 1, minWidth: 310}}>
                        <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            label="Brand"
                        >
                            {brands.map(brand =>
                                <MenuItem value={brand.name} key={brand.id} onClick={() => dispatch(isSelectedBrand(brand))}>
                                    {brand.name}
                                </MenuItem>
                            )}
                        </Select>


                    </FormControl>
                    {/*<FormControl>*/}
                        <TextField fullWidth
                                   sx={{m: 1, minWidth: 295}}
                                   color="teal"
                                   type={'text'}
                                   label="Name item"
                                   id="nameItem" variant="standard"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}

                        />
                    {/*</FormControl>*/}
                    {/*<FormControl fullWidth sx={{ m: 1,  minWidth: 290 }} variant="standard">*/}
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={price}
                            type={'number'}
                            onChange={e => setPrice(Number(e.target.value))}
                            startAdornment={<InputAdornment position="start">£</InputAdornment>}
                        />
                    {/*</FormControl>*/}
                    {/*    <FormControl fullWidth sx={{ m: 1,  minWidth: 290 }} variant="standard">*/}
                        <TextField fullWidth
                                   sx={{m: 1, minWidth: 295}}
                                   color="teal"
                                   type={'file'}
                                   id="file" variant="standard"
                                   onChange={selectFile}

                        />
                        {/*</FormControl>*/}

                    <Button variant="outlined" onClick={addInfo}>Add description</Button>
                    {
                        info.map((i) =>
                            <div>
                                <TextField fullWidth
                                           sx={{m: 1, minWidth: 295}}
                                           color="teal"
                                           type={'text'}
                                           id="title" variant="standard"
                                           value={i.title}
                                           onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                           placeholder="Name"

                                />
                                <TextField fullWidth
                                           sx={{m: 1, minWidth: 295}}
                                           color="teal"
                                           type={'text'}
                                           id="description" variant="standard"
                                           value={i.description}
                                           onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                           placeholder="Description"

                                />
                                <div>
                                    <Button variant="outlined" onClick={() => removeInfo(i.number)}>Delete description</Button>
                                </div>
                            </div>
                        )
                    }
                    </form>
                    <Button variant="contained" onClick={addDevice}>Add</Button>
                    <Button variant="outlined" onClick={() => handleClose('deviceVisible')}>Cancel</Button>

                </Box>
            </Modal>
        </div>
    );
}

export default CreateDevice;