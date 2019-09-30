import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function MyTable(props) {
  console.log(props)
  return (
    <Card style={{width: '98%', marginLeft: '5px'}}>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map(row => (
              <TableRow style={{height: '50px'}} key={row.name}>
                <TableCell align="left">{row.dia}</TableCell>
                <TableCell align="left">{props.currencyFormatter.format(row.precio)} MXN</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}