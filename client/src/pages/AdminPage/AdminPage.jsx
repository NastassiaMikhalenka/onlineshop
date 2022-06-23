import React from 'react';
import Button from '@mui/material/Button';
import CreateBrand from "./CreateBrand/CreateBrand";
import CreateType from "./CreateType/CreateType";
import CreateDevice from "./CreateDevice/CreateDevice";


const AdminPage = () => {
    const [brandVisible, setBrandVisible] = React.useState(false);
    const [typeVisible, setTypeVisible] = React.useState(false);
    const [deviceVisible, setDeviceVisible] = React.useState(false);

    const handleOpen = (name) => {
        if (name === 'brandVisible') {
            setBrandVisible(true)
        } else if (name === 'typeVisible') {
            setTypeVisible(true)
        } else if (name === 'deviceVisible') {
            setDeviceVisible(true)
        }
    }

    const handleClose = (name) => {
        if (name === 'brandVisible') {
            setBrandVisible(false)
        } else if (name === 'typeVisible') {
            setTypeVisible(false)
        } else if (name === 'deviceVisible') {
            setDeviceVisible(false)
        }
    }


    return (
        <div>
            <Button onClick={() => handleOpen('brandVisible')}>Add Brand</Button>
            <Button onClick={() => handleOpen('typeVisible')}>Add Type</Button>
            <Button onClick={() => handleOpen('deviceVisible')}>Add Device</Button>
            <CreateBrand handleClose={handleClose} open={brandVisible}/>
            <CreateType handleClose={handleClose} open={typeVisible}/>
            <CreateDevice handleClose={handleClose} open={deviceVisible}/>
        </div>
    );
};

export default AdminPage;


// <FormControl fullWidth sx={{ m: 1 }} variant="standard">
//     <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//     <Input
//         id="standard-adornment-amount"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//         startAdornment={<InputAdornment position="start">£</InputAdornment>}
//     />
// </FormControl>