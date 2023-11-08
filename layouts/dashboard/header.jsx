import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';

import Searchbar from './common/searchbar';

export default function Header({ onOpenNav }) {
  const theme = useTheme();


  const renderContent = (
    <>
      <Searchbar />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: 200,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
  
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
