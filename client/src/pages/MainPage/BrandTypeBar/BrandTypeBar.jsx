import React from 'react';
import { Box, Divider, List, Typography } from '@mui/material';
import TypeItem from "./TypeItem/TypeItem";

export const BrandTypeBar = ({ title, items, selectedItem, onSelectItem }) => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 360,
                backgroundColor: '#ffffff',
                boxShadow: '4px 4px 8px 0px rgba(0, 111, 116, 0.2)',
                fontFamily: 'Raleway',
            }}
        >
            <Typography
                variant={'p'}
                color='#006f74'
                align={'center'}
                p={1}
                sx={{ display: 'inline-block', width: '100%', fontFamily: 'Raleway', fontSize: '18px'}}
            >
                {title}
            </Typography>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                {items.map((item) => (
                    <TypeItem
                        key={item.id}
                        item={item}
                        isSelect={item.id === (selectedItem && selectedItem.id)}
                        onSelectItem={onSelectItem}
                    />
                ))}
            </List>
        </Box>
    );
};
