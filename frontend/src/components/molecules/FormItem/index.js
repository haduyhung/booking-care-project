import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function FormItem({ bgcolor, options, label, buttonTitle, itemPerRow }) {
  const settings = {
    // autoplay: true,
    // autoplaySpeed: 30000,
    arrows: false,
    speed: 500,
    slidesToShow: itemPerRow,
    slidesToScroll: itemPerRow,
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
              xs={12 / itemPerRow}
              px={1}
              onDoubleClick={() => {
                alert("navigation");
              }}
            >
              <Stack
                sx={
                  !!option.work && {
                    alignItems: "center",
                    height: 280,
                    p: 3,
                    border: "1px solid #efeef5",
                  }
                }
              >
                <Avatar
                  sx={
                    !!option.work
                      ? { width: 120, height: 120 }
                      : { height: 128, width: "auto", borderRadius: 0 }
                  }
                  src={option.image}
                  alt=""
                />
                <Typography
                  py={1}
                  fontSize={13}
                  sx={!!option.work && { textAlign: "center" }}
                >
                  {option.title}
                </Typography>
                <Typography
                  color="#555"
                  fontSize={12}
                  sx={!!option.work && { textAlign: "center" }}
                >
                  {option.work}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
}

export default FormItem;
