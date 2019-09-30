import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/card.css';

export default function DailyPrice(props) {
  return (
    <Card className="CustomFontSize" style={{height: '93%', width: '98%'}}>
      <CardContent className="CardContent" style={{display: 'flex', flexDirection: 'column'}}>
        <Typography gutterBottom style={{fontSize: '0.6em', textAlign: 'center'}} color="textPrimary">
          Precio estimado para el día de hoy
        </Typography>
        <Typography component="p" style={{fontSize: '0.5em', textAlign: 'center', marginTop: '15px'}} color="textPrimary">
            {props.currencyFormatter.format(props.price ? props.price: 0)} MXN
        </Typography>
      </CardContent>
    </Card>
  );
}