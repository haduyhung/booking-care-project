import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function FormItem({ bgcolor, options, label, buttonTitle }) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Stack
      sx={{
        minHeight: 330,
        p: 8,
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
        <Slider {...settings}>
          {options.map((option, index) => (
            <Grid
              key={index}
              xs={3}
              sx={{ px: 1, hover: { color: "#45c3d2" } }}
            >
              <Avatar
                sx={{ height: 128, width: "auto", borderRadius: 0 }}
                src={option.image}
                alt=""
              />
              <Typography sx={{ fontSize: 13 }} py={1}>
                {option.title}
              </Typography>
            </Grid>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
}

export default FormItem;
