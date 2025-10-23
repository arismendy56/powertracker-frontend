import { Card, CardContent, Typography } from "@mui/material";

interface LiftTotalVolumeCardProps {
    cardSize: number,
    liftName: string,
    totalVolume: number
}
const LiftTotalVolumeCard: React.FC<LiftTotalVolumeCardProps> = ({ cardSize, liftName, totalVolume }) => {
  return (
    <Card sx={{ width: cardSize }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {liftName}
        </Typography>
        <Typography variant="body2">
          Total Volume: {totalVolume} lbs
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LiftTotalVolumeCard;
