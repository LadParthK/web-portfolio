import React from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const year = new Date().getFullYear();
    const name = "Parth";

    // Inline style for the footer
    const footerStyle = {
        justifyContent: 'center',
        background: 'transparent',
        alignItems: 'center',
        color: theme.palette.text.primary,
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        padding: '20px 0', // Add some padding for aesthetic spacing
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%', // Ensure the footer takes up the full width
    };

    return (
        <footer style={footerStyle}>
            <p>© {year} All rights reserved. Made with love ❤️ by {name}</p>
        </footer>
    );
};

export default Footer;
