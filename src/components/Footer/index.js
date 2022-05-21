import React from 'react';
import {Box} from './FooterElements';

function Footer() {
    return (
        <Box>
      <h4 style={{ color: "black", 
                   textAlign: "center",
                   justifyContent: 'Center',
                   alignItems: 'center',
                   right: '50%',
                   top: '50%',
                   position: 'absolute',
                   transform: 'translate(50%, -50%)'
                   }}>
        <i>by: owhyy & kr1sto</i>
      </h4>
      </Box>
    );
}
    
    export default Footer;