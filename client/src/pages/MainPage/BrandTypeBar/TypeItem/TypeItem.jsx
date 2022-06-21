import React from 'react';
import {ListItemButton, ListItemText} from '@mui/material';


const TypeItem = ({item, isSelect, onSelectItem}) => {
    return (
        <ListItemButton
            selected={isSelect}
            sx={{
                '&.Mui-selected': {
                    backgroundColor: '#d9e9ea',
                },
                ':hover': {
                    color: '#000000',
                },
                '&.Mui-selected:hover': {
                    backgroundColor: '#cff0f0',
                },

            }}
            onClick={() => {
                onSelectItem(item);
            }}
        >
                <ListItemText primary={item.name}/>
        </ListItemButton>
    );
};

export default TypeItem;