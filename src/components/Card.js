import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import six from '../assets/6.png'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ width:{lg:'30%',md:'49%',sm:'100%',xs:'100%'},marginBottom:'15px' ,padding:'30px',boxShadow:'0px 0px 30px 0px rgb(21 21 21 / 10%)'}} variant="outlined">
      <CardContent>
        <Typography className={props.align} color="text.secondary" gutterBottom>
    <img src={props.img} alt="" style={{width:'70%'}}/>
        </Typography>
        <Typography variant="h6" style={{fontWeight:'bold',marginBottom:'20px', fontSize:'20px',fontFamily:'jost'}} component="div">
 {props.text}
        </Typography>
        
        <Typography variant="body2" sx={{lineHeight:'2em',fontSize:'18px'}}>
         {props.para}
     
        </Typography>
      </CardContent>
 
    </Card>
  );
}