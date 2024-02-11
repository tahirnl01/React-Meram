import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://www.instagram.com/meram.belediyesi/'><InstagramIcon/></a>
        <a href='https://www.meram.bel.tr/'><LanguageIcon/></a>
        <a href='tel:0332 320 10 00'><PhoneIcon/></a>
        <a href='https://www.google.com/maps/dir//37.85624,32.471911/@37.8562362,32.389'><LocationOnIcon/></a>     
        </div>
        <p> &copy; Github.com/tahirnl01 </p>
    </div>
  )
}

export default Footer