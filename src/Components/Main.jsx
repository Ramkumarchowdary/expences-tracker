import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

const Main = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <Stack>
      <div sx={{}}>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          sx={{ border: 1, p: "20px", background: "#4490FA", color: "white" }}
        >
          Cash Flow Monitor
        </Typography>
        {/* <Typography variant="h6" sx={{ mr: "30px", border: 1, width: 1 / 8 }}>
          {" "}
          Time:{time.toLocaleTimeString()}
        </Typography> */}
      </div>
    </Stack>
  );
};

export default Main;
