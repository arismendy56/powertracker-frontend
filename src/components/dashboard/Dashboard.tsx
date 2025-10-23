import { Box, Typography } from "@mui/material";
import LiftTotalVolumeCard from "../shared/LiftTotalVolumeCard";
import WeekAccordion from "../shared/WeekAccordion";
const blockName: String = "1";
const activeWeekNum: String = "Week " + "2";
const activeBlockTotalWeeks: number = 5;
const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4">
        Block {blockName} {activeWeekNum} {activeBlockTotalWeeks}{" "}
      </Typography>
      <Box sx={{ height: 20 }} />
      <Box
        sx={{
          display: "flex",
          gap: 2, // Space between cards
          flexWrap: "wrap", // Wrap to next line on smaller screens
        }}
      >
        <LiftTotalVolumeCard
          cardSize={250}
          liftName="Squat"
          totalVolume={150}
        />
        <LiftTotalVolumeCard
          cardSize={250}
          liftName="Bench"
          totalVolume={150}
        />
        <LiftTotalVolumeCard
          cardSize={250}
          liftName="Deadlift"
          totalVolume={150}
        />
      </Box>

      <Box sx={{ height: 20 }} />
      {/* Additional dashboard content can go here */}

      <WeekAccordion />
    </Box>
  );
};

export default Dashboard;
