import React, { useState } from 'react';
import { Grid, TextField, MenuItem, IconButton, InputAdornment } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import { Dayjs } from 'dayjs';
import { TextFieldProps } from '@mui/material/TextField';

const statusOptions = ['New', 'In Progress', 'Completed', 'On Hold', 'Escalated', 'Delayed'];
const departmentOptions = ['Patient Experience'];

const FilterBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([null, null]);
  const [status, setStatus] = useState<string>('');
  const [department, setDepartment] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
      {/* Search Bar */}
      <Grid item xs={3}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={4}>
        <DateRangePicker
          startText="Start Date"
          endText="End Date"
          value={dateRange}
          onChange={(newValue: DateRange<Dayjs>) => setDateRange(newValue)}
          renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
            <>
              <TextField {...startProps} fullWidth variant="outlined" />
              <TextField {...endProps} fullWidth variant="outlined" />
            </>
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Status"
          value={status}
          onChange={handleStatusChange}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={2}>
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Department"
          value={department}
          onChange={handleDepartmentChange}
        >
          {departmentOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={1} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <IconButton>
          <DownloadIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
