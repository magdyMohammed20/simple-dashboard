import { useQuery } from 'react-query';
import React, { useState, useEffect } from 'react';

import { Box } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import {
  Table,
  Paper,
  styled,
  Button,
  Select,
  TableRow,
  Checkbox,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from '@mui/material';

const StyleTable = styled('table')`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse; /* Add this line to remove the space between table cells */
`;

const CustomCheckboxCell = styled(TableCell)`
  padding: 2px;
  border: none;
  font-weight: 600
`;

const CustomSelect = styled(Select)`
  height: 42px; /* Adjust the height as needed */
`;

const CustomTableHead = styled(TableHead)`
  background-color: transparent; /* Set the background to transparent */
`;

/* const rowsData = [
  { id: 1, domain: 'example.com', price: 10, status: 'Active', createdAt: '2023-01-01', action: 'Edit' },
  { id: 2, domain: 'sample.com', price: 15, status: 'Inactive', createdAt: '2023-02-01', action: 'Edit' },
]; */

async function fetchData() {
  const response = await fetch('http://localhost:3000/domains_show');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

function CustomTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rows, setRows] = useState([]);
  const isAllSelected = selectedRows.length === rows.length;

  // Get Request
  const { isLoading, data, error } = useQuery('get-supers', fetchData);

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `Error: ${error.message}`;
  }
  // Now, 'data' contains the response data array
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(rows.map((row) => row.id));
    }
  };

  const isRowSelected = (rowId) => selectedRows.includes(rowId);

  const toggleRowSelect = (rowId) => {
    if (isRowSelected(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleStatusChange = (rowId, newStatus) => {
    const updatedRows = rows.map((row) => {
      if (row.id === rowId) {
        return { ...row, status: newStatus };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <StyleTable component={Paper}>
      <Table>
        <CustomTableHead className="customTableHead">
          <TableRow>
            <CustomCheckboxCell>
              <Checkbox
                checked={isAllSelected}
                indeterminate={!isAllSelected && selectedRows.length > 0}
                onChange={toggleSelectAll}
              />
              ID
            </CustomCheckboxCell>
            
            
            <TableCell>Domain Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <CustomCheckboxCell>
                <Checkbox
                  checked={isRowSelected(row.id)}
                  onChange={() => toggleRowSelect(row.id)}
                />
                #{row.id}
                </CustomCheckboxCell>
              
              <TableCell>$ {row.price.toFixed(2)}</TableCell>
              <TableCell>
                <CustomSelect
                  value={row.status}
                  style={{
                    borderRadius: '100px',
                    padding: '10px 20px',
                    backgroundColor: (row.status === "1" && '#e9f8e9' || row.status === '2' && '#e6b3b34f' ||  row.status === '3' && '#ff550026'),
                    width: '170px',
                    fontSize: '1em',
                    textAlign: 'center',
                    color: row.status === '1' && 'green' || row.status === '2' && 'red' || row.status === '2' && '#f50',
                  }}
                  onChange={(event) => handleStatusChange(row.id, event.target.value)}
                >
                  <MenuItem value="1">Running</MenuItem>
                  <MenuItem value="2">Expired</MenuItem>
                  <MenuItem value="3">Will Expire</MenuItem>
                </CustomSelect>
              </TableCell>
              <TableCell> 
                <Box sx={{display: 'flex' , alignItems: 'center'}}>
                  <DateRangeOutlinedIcon sx={{color: '#1877F2' , mr: 1}} />{row.createdAt}
                </Box>
              </TableCell>
              <TableCell>
                <Button  color="success" sx={{display: 'flex' , alignItems: 'center'}}>
                  <VisibilityIcon/> <Typography variant='subtitle2' color="success" sx={{ml: 1}}>show details</Typography>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyleTable>
  );
}

export default CustomTable;
