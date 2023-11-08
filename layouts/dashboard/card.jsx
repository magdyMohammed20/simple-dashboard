import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export default function OutlinedCard() {

    return (
    
      <Card sx={{ background: '#f3f3f3' }}>
              <Box sx={{width: '100%'}}>
        <CardContent>
        <Typography sx={{ fontSize: 14 , borderBottom:"2px dashed #DDD" , pb: 1 , fontWeight: 500}}  gutterBottom>
            Doamin Details
        </Typography>
            <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
                <Typography variant="subtitle2" component="div">
                    Tridmark.net
                </Typography>
                    
                <Typography variant="subtitle2" component="div" color="text.success" fontWeight={400}>
                    15.40 USD
                </Typography>
            </Box>
                
            <Box sx={{ mt: 4 , mb: 1 , display: 'flex' }}>
                <Typography >
                    <TaskAltOutlinedIcon color='success' />
                </Typography>
                <Typography variant='caption'  sx={{marginLeft: 1 , mt:.5}}>
                    Privacy protection is on
                </Typography>
                    </Box>
                    
                    <Box sx={{  display: 'flex' }}>
                <Typography >
                    <TaskAltOutlinedIcon color='success' />
                </Typography>
                <Typography variant='caption'  sx={{marginLeft: 1 , mt:.5}}>
                Auto-renew is on
                </Typography>
                    </Box>
                    
                    <Box sx={{mt: 1}}>
                    <Typography variant='caption' >
                This domain will be auto-renewed around August 1 every year. You will automatically be billed when the renewal occurs.
                </Typography>
               </Box>

    
        </CardContent>

    </Box>

      </Card>
    
  );
}