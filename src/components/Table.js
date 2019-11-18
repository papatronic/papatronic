import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { formatWeekDays, currencyFormatter } from '../utils/index';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '98%',
  },
});

export default function MyTable(props) {
  const formattedWeekDays = formatWeekDays(props.prediction);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Fecha</TableCell>
            <TableCell align="left">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedWeekDays.map(row => (
            <TableRow key={row.dia}>
              <TableCell align="left">{row.dia}</TableCell>
              <TableCell align="left">{currencyFormatter.format(row.precio)} MXN</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}