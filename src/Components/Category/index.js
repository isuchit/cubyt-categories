import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './category.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 15,
    marginBottom: 15
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151
  },
}));

function Product({image_uri, category_name}) {
    const classes = useStyles();
    return (
      <div className="trans">
        <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={image_uri}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
            {category_name}
            </Typography>
           
          </CardContent>
         
        </div>
        
      </Card>
      </div>
    )
}

export default Product
