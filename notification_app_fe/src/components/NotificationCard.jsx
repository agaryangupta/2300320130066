import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const NotificationCard = ({ notification }) => {
  return (
    <Card>
      <CardContent>
        <Chip label={notification.Type} />
        <Typography variant="h6">
          {notification.Message}
        </Typography>
        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;