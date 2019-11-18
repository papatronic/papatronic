import React from 'react';
import DailyPrice from './DailyPrice';
import MyTable from './Table';
import Chart from './Chart';
import '../styles/prediction-section.css';

export default function PredictionSection(props) {
  
  const shared = props.predictions.length > 0 ? [...props.predictions] : [];
  return (
    <>
     <div className="Chart">
       <Chart prediction={props.predictions} />
     </div>
     <div className="DailyAndTable">
       <DailyPrice prediction={props.predictions[0]} />
       <MyTable prediction={shared} />
     </div>
    </>
  );
}