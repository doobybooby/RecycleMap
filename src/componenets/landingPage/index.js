import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';
import '../../resources/images/pizzabox.jpeg'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (

    <Card className = "card" className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://imcoutdoorliving.com/wp-content/uploads/rubberific/blog-pizza.jpg"
          title="Pizza Box"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pizza Box
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" position="center">
            Oily pizza boxes are not considered as a good "recyclable item". Please do not recycle if your pizza box looks like this.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>


  );
}
