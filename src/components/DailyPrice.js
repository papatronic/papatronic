import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { currencyFormatter, getPriceDay } from '../utils';

const useStyles = makeStyles({
  card: {
    minWidth: '100%',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'center'
  }
});

export default function DailyPrice(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {getPriceDay()}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.subtitle}>
          {currencyFormatter.format(props.prediction)}
        </Typography>
      </CardContent>
    </Card>
  );
}