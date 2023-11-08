
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { account } from 'src/_mock/account';

export default function AccountPopover() {
  
  return (
  
      <IconButton
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
    
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
        
      </IconButton>
  );
}
