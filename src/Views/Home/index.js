import React, {useEffect, useState} from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Category from '../../Components/Category';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
},
}));



function Home() {
  const classes = useStyles();
  const [apiData, setApiData] = useState(null);
  const dummyImage = "https://react.semantic-ui.com/images/wireframe/image.png"

useEffect(() => {

  const getData = async () => {
    let baseUrl = "https://www.cubyt.io/data/categories"
    let response = await axios.get(baseUrl);
    setApiData(response.data);
    console.log("apoi", apiData)
  }
  getData()
}, [])

    return (
       <div>
          <Container maxWidth="md">
            <Paper className={classes.paper}>
              <Typography variant="h4" align="center" gutterBottom>
              Categories
              </Typography>
              {apiData ?
                apiData.map((data, index) =>
                  <Category 
                  key= {index}
                  image_uri = {data.image_uri ? data.image_uri : dummyImage }
                  category_name = {data.display_name}
                  />
                )
                : null}
              
            </Paper>
          </Container>
        </div>
    )
}

export default Home
