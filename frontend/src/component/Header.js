import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/job.jpeg';
import SearchInputEl from './SearchInputEI';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems:'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundColor: theme.palette.secondary.main
        }

    ));
    return (
        <>
            <StyleHeader >
                <SearchInputEl/>
            </StyleHeader>
        </>
    )
}

export default Header;