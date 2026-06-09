import { useMemo, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const mockNotifications = [
  {
    id: 1,
    Type: "Placement",
    Message: "Google Hiring Drive",
    Timestamp: "2026-06-09T10:00:00Z",
  },
  {
    id: 2,
    Type: "Placement",
    Message: "Amazon Hiring Drive",
    Timestamp: "2026-06-09T09:30:00Z",
  },
  {
    id: 3,
    Type: "Result",
    Message: "Mid Sem Result Published",
    Timestamp: "2026-06-09T08:00:00Z",
  },
  {
    id: 4,
    Type: "Event",
    Message: "Tech Fest Registration Open",
    Timestamp: "2026-06-08T12:00:00Z",
  },
  {
    id: 5,
    Type: "Placement",
    Message: "Microsoft Internship Program",
    Timestamp: "2026-06-09T07:00:00Z",
  },
  {
    id: 6,
    Type: "Result",
    Message: "Quiz Result Released",
    Timestamp: "2026-06-08T15:00:00Z",
  },
  {
    id: 7,
    Type: "Event",
    Message: "Coding Contest Tomorrow",
    Timestamp: "2026-06-08T18:00:00Z",
  },
  {
    id: 8,
    Type: "Placement",
    Message: "Adobe Placement Opportunity",
    Timestamp: "2026-06-09T06:00:00Z",
  },
];

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function App() {
  const [filter, setFilter] = useState("All");
  const [topCount, setTopCount] = useState(10);

  const filteredNotifications = useMemo(() => {
    let data = [...mockNotifications];

    if (filter !== "All") {
      data = data.filter((item) => item.Type === filter);
    }

    return data;
  }, [filter]);

  const priorityNotifications = useMemo(() => {
    return [...mockNotifications]
      .sort((a, b) => {
        const scoreA =
          weights[a.Type] * 1000000000000 +
          new Date(a.Timestamp).getTime();

        const scoreB =
          weights[b.Type] * 1000000000000 +
          new Date(b.Timestamp).getTime();

        return scoreB - scoreA;
      })
      .slice(0, topCount);
  }, [topCount]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Notification Dashboard
      </Typography>

      <FormControl sx={{ minWidth: 220, mb: 3 }}>
        <InputLabel>Filter Type</InputLabel>
        <Select
          value={filter}
          label="Filter Type"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Placement">Placement</MenuItem>
          <MenuItem value="Result">Result</MenuItem>
          <MenuItem value="Event">Event</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5" gutterBottom>
        All Notifications
      </Typography>

      <Grid container spacing={2}>
        {filteredNotifications.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card>
              <CardContent>
                <Chip label={item.Type} />
                <Typography variant="h6" sx={{ mt: 1 }}>
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

      <Typography variant="h5" sx={{ mt: 5 }}>
        Priority Inbox
      </Typography>

      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <Button
          variant="contained"
          onClick={() => setTopCount(10)}
          sx={{ mr: 1 }}
        >
          Top 10
        </Button>

        <Button
          variant="contained"
          onClick={() => setTopCount(15)}
          sx={{ mr: 1 }}
        >
          Top 15
        </Button>

        <Button
          variant="contained"
          onClick={() => setTopCount(20)}
        >
          Top 20
        </Button>
      </div>

      <Grid container spacing={2}>
        {priorityNotifications.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card>
              <CardContent>
                <Chip color="primary" label={item.Type} />
                <Typography variant="h6" sx={{ mt: 1 }}>
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
    </Container>
  );
}

export default App;