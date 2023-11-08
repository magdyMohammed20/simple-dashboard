import { Home } from '@mui/icons-material';
import SpeedIcon from '@mui/icons-material/Speed';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const navConfig = [

  {
    title: 'Home1',
    icon: <Home style={{ fill: "white" }} fontSize='10' />,
    path: '/',

  },
  {
    title: 'Home2',
    icon: <ViewInArIcon style={{fill: "white"}}/>,
   
    path: '/',
  },
  {
    title: 'Home3',
    icon: <PeopleOutlineIcon style={{fill: "white"}}/>,
  },
  {
    title: 'Home4',
    icon: <HelpOutlineIcon style={{ fill: "white" }} />,
    
  },
  {
    title: 'Home5',
    icon: <LocalMallOutlinedIcon style={{fill: "white"}}/>,
  },
  {
    title: 'Home6',
    icon: <SpeedIcon style={{fill: "white"}}/>,
  },
  {
    title: 'Home7',
    icon: <CampaignOutlinedIcon style={{fill: "white"}}/>,
  },
  {
    title: 'Home8',
    icon: <SettingsOutlinedIcon style={{fill: "white"}}/>,
  },
  {
    title: 'Home9',
    icon: <LogoutOutlinedIcon style={{fill: "white"}}/>,
  },
  
];

export default navConfig;
