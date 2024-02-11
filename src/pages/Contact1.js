import React from 'react'
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Experience() {
  return (
    <div className='ContContainer'>
      <div className='ContElements'>
        <ol>
          <li>
            <PhoneIcon/>
            <h3>telefon</h3>
            <p> 0332 320 10 00</p>
          </li>
          <li>
            <AlternateEmailIcon/>
            <h3>Mail</h3>
            <p>bizimmeram@meram.bel.tr</p>
          </li>
          <li>
            <InstagramIcon/>
            <h3>instagram</h3>
            <p>https://www.instagram.com/meram.belediyesi/</p>
          </li>
          <li>
            <LocationOnIcon/>
            <h3>adres</h3>
            <p>Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience