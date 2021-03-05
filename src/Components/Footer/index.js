import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Footer() {
    return (
        <div>
             <Typography variant="body2" color="textSecondary" align="center">
      {'Made with ❤️ by isuchit. Copyright © '}
      <Link color="inherit" target="_blank" href="https://suchitrotti.com/">
        suchitrotti
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </div>
    )
}

export default Footer
