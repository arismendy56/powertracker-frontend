import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import WorkoutDayTable from './WorkoutDayTable';
const WeekAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>Week 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <WorkoutDayTable / >
      </AccordionDetails>
    </Accordion>
  );
}

export default WeekAccordion;