import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import Table from './Table'
import CreateDialog from '../../../../layouts/dashboard/dialog'




const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#605bff',
  '&:hover': {
    backgroundColor: '#605bf1',
  },
}));


export default function DoaminsPage() {
const [open , setOpen] = useState(false)

  const toggleDialog = () => {
    setOpen(prevOpen => !prevOpen)
  }
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <CreateDialog open={ open}  toggleDialog={toggleDialog}/>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Domains</Typography>
          <ColorButton onClick={toggleDialog} variant="contained" style={{borderRadius: '50px'}} startIcon={<Iconify icon="eva:plus-fill" />}>Buy Domain</ColorButton>
        </Stack>
        <Container maxWidth="xl">
          <Card>
            <Scrollbar>
              <Table/>
            </Scrollbar>
          </Card>
        </Container>
    </Container>
  );
}
