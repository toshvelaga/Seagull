import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards(props) {
  const classes = useStyles();
  let styles;

  return (
    <Card style={{...props.styles, margin: '2rem'}} className={classes.root}>
      <CardContent>

        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>

        <Typography variant="body2" component="p">
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}