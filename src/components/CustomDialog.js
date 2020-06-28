import React from 'react';
import { AboutUs } from '../constants/strings';

const styles = {
  noSpaces: {
    margin: 0,
    padding: 0
  }
};

export default function AboutTheTeam(props) {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <p style={{textAlign: 'justify'}}>Este proyecto está bajo la dirección de Maestría en Ciencias de la Computación del TecNM, Instituto Tecnológico de Culiacán</p>
        <p style={styles.noSpaces}>Dirigido por:</p>
        <ul>
          {AboutUs.headNames.map(head => <li style={styles.noSpaces} id={head}>{head}</li>)}
        </ul>
        <p style={styles.noSpaces}>Y los prestadores:</p>
        <ul>
          {AboutUs.workerNames.map(worker => <li style={styles.noSpaces} id={worker}>{worker}</li>)}
        </ul>
      </section>
    </div>
  )
}