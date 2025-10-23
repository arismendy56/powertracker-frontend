import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const rows = [
  { id: 'Squat', additionInfo: ' ', sets: 4, reps: 8, targetRPE: 8, lastSetRPE: null, lastWeekLoad: 200 },
  { id: 'Bench Press', additionInfo: '', sets: 4, reps: 8, targetRPE: 8, lastSetRPE: null, lastWeekLoad: 150 },
  { id: 'Deadlift', additionInfo: '', sets: 3, reps: 5, targetRPE: 9, lastSetRPE: null, lastWeekLoad: 250 },
  { id: 'Overhead Press', additionInfo: '', sets: 4, reps: 6, targetRPE: 8, lastSetRPE: null, lastWeekLoad: 100 },
  { id: 'Barbell Row', additionInfo: '', sets: 4, reps: 8, targetRPE: 8, lastSetRPE: null, lastWeekLoad: 120 },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'Excercise', width: 150 },
  { field: 'additionInfo', headerName: 'Additional Info', width: 50, editable: true },
  { field: 'sets', headerName: 'Sets', width: 50, editable: true, sortable: false },
  { field: 'reps', headerName: 'Reps', width: 50, editable: true, sortable: false },
  { field: 'targetRPE', headerName: 'Target RPE', width: 110, editable: true },
  { field: 'lastSetRPE', headerName: 'Last Set RPE', width: 110, editable: true },
  { field: 'lastWeek', headerName: 'Last Week', width: 110, editable: true }
];

const WorkoutDayTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
    '& .MuiDataGrid-columnHeader': {
      whiteSpace: 'normal !important',
      lineHeight: '1.2 !important',
      height: 'auto !important',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      whiteSpace: 'normal',
      overflow: 'visible',
      textOverflow: 'unset',
      wordWrap: 'break-word',
      lineHeight: '1.2',
    }}}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default WorkoutDayTable;
