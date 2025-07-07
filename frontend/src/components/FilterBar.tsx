import React from 'react';
import { Grid, TextField, MenuItem, IconButton, InputAdornment, Box, Collapse, Button } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dayjs } from 'dayjs';
import { TextFieldProps } from '@mui/material/TextField';

const statusOptions = ['New', 'In Progress', 'Completed', 'On Hold', 'Escalated', 'Delayed'];
const departmentOptions = ['Patient Experience'];

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  department: string;
  setDepartment: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  status,
  setStatus,
  department,
  setDepartment
}) => {
  const [dateRange, setDateRange] = React.useState<DateRange<Dayjs>>([null, null]);
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  };

  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  return (
    <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={2} alignItems="center">
        {/* Main Row: Search, Status, Department, Download+Filter */}
        <Grid item xs={12} md={3}>
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
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            variant="outlined"
            label="Status"
            value={status}
            onChange={handleStatusChange}
            size="small"
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            variant="outlined"
            label="Department"
            value={department}
            onChange={handleDepartmentChange}
            size="small"
          >
            {departmentOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              endIcon={<ExpandMoreIcon />}
              onClick={toggleAdvancedFilters}
              size="small"
              sx={{ minWidth: 0, px: 1 }}
            >
              Filters
            </Button>
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Advanced Filters - Collapsible on mobile/tablet */}
        <Grid item xs={12}>
          <Collapse in={showAdvancedFilters || window.innerWidth >= 1200}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {/* Date Range Picker */}
              <Grid item xs={12} sm={12} md={4}>
                <DateRangePicker
                  startText="Start Date"
                  endText="End Date"
                  value={dateRange}
                  onChange={(newValue: DateRange<Dayjs>) => setDateRange(newValue)}
                  renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <TextField {...startProps} fullWidth variant="outlined" size="small" />
                      <TextField {...endProps} fullWidth variant="outlined" size="small" />
                    </Box>
                  )}
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterBar;
