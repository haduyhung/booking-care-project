import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function FormItem({ bgcolor, options, label, buttonTitle }) {
  return (
    <Stack
      sx={{
        minHeight: 330,
        p: 5,
        bgcolor: bgcolor,
        borderBottom: "3px solid #efeef5",
      }}
    >
      <Stack direction="row">
        <Typography
          sx={{ flex: 5, fontSize: 24, fontWeight: "bold", pt: 4, pb: 1 }}
        >
          {label}
        </Typography>
        <Button sx={{ borderRadius: 1, flex: 1, height: 40 }}>
          <Typography>{buttonTitle}</Typography>
        </Button>
      </Stack>
      <Stack sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {options.map((option, index) => (
            <Grid key={index} xs={3} item>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height={128}
                  image={option.image}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 13 }} py={1}>
                    {option.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default FormItem;
