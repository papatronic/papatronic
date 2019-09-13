import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function MyTable(props) {
  console.log(props);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.dia}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}