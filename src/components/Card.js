import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Select from '../components/Select';
import Button from '@material-ui/core/Button';
import '../styles/card.css';

const useStyles = makeStyles({
  card: {
    height: '45%'
  },
  title: {
    fontSize: '0.7em',
  },
  subtitle: {
    fontSize: '0.5em',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '45%',
  },
});

export default function FilterCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Cambiar estado
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary" gutterBotton>
          Seleccione el estado del cual busca obtener predicciones
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Select selectedMarket={props.selectedMarket} handleOnChange={props.handleOnSelect} markets={props.markets} />
        <Button className="FilterButton" onClick={props.handleOnFilter} variant="contained">
          Predecir
        </Button>
      </CardActions>
    </Card>
  );
}