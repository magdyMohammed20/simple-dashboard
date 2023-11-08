import * as React from 'react';

import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import LanguageIcon from '@mui/icons-material/Language';

import OutlinedCard from './card';
import BuyDomainForm from './buyDomainForm';

export default function CreateDialog({ open , toggleDialog}) {


  return (
      <Dialog
       maxWidth='lg'
        open={open}
        onClose={toggleDialog}
        aria-labelledby="responsive-dialog-title"
      >
      <DialogTitle id="responsive-dialog-title" variant='h4' sx={{ fontWeight: 600 , display: 'flex' , alignItems: 'center' }}>
        <LanguageIcon sx={{mr : 1}} color='success'/>
      Buy Domain
      </DialogTitle>

      <Typography sx={{px: 3 , width: '64%' , color: '#b7b7b7' , fontWeight: 400}} variant='subtitle1'>
      This information is required in order to reach you in case of problems with your<br/> registration
      </Typography>
        <DialogContent sx={{px: 5}}>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{px: 3}}>
            <BuyDomainForm/>
          </Grid>
          <Grid item xs={3}>
            <OutlinedCard/>
          </Grid>
        
        </Grid>
        </DialogContent>
  
      </Dialog>
    
  );
}
