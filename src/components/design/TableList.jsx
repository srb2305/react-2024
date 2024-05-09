import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function TableList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
		fetchData();
	}, []);

  const fetchData = async () => {
		try {
			const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
			if (!responce.status) {
				console.log('Something went wrong');
				throw new Error('Responce was not ok');
			}
			const jsonData = await responce.json();
			setData(jsonData); 
		} catch (error) {
			console.log('Error in fetching data', error);
		}
	};


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell key="0" align="right">Name </TableCell>
                <TableCell key="1" align="right">Population </TableCell>
                <TableCell key="2" align="right">Age </TableCell>
                <TableCell key="4" align="right">Gender </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
				data
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map( key => 
              <TableRow hover role="checkbox" tabIndex={-1} key={key.id}>
                    <TableCell key="0" align="right">{key.id}</TableCell>
                    <TableCell key="1" align="right">{key.userId}</TableCell>
                    <TableCell key="2" align="right">{key.title}</TableCell>
                    <TableCell key="3" align="right">{key.body}</TableCell>
              </TableRow>
            )
            } 
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
