import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '../components/Select';
import Radio from '../components/Radio';
import Button from '@material-ui/core/Button';
import '../styles/card.css';

export default function FilterCard(props) {
  return (
    <Card className="CustomFontSize" style={{width: '100%', height: '55%'}}>
      <CardContent className="FilterCardContent">
        <Typography className="DisplayTitle" style={{fontSize: '0.7em'}} variant="inherit" color="textPrimary" gutterBottom>
          {props.text}
        </Typography>
        <Select selectedMarket={props.selectedMarket} handleOnChange={props.handleOnSelect} markets={props.markets} />
        <div className="Radios">
          <Radio value={props.selectedDirection} onChange={props.handleDirectionChange} radios={props.radios}/>
        </div>
        <Button className="FilterButton" onClick={props.handleOnFilter} variant="contained">
          Filtrar
        </Button>
      </CardContent>
    </Card>
  );
}