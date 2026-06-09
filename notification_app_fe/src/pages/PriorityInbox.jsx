import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
} from "@mui/material";

const PriorityInbox = ({ notifications }) => {
  return (
    <Grid container spacing={2}>
      {notifications.map((item) => (
        <Grid item xs={12} md={6} key={item.id}>
          <Card>
            <CardContent>
              <Chip
                color="primary"
                label={item.Type}
              />
              <Typography variant="h6">
                {item.Message}
              </Typography>
              <Typography variant="body2">
                {item.Timestamp}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PriorityInbox;