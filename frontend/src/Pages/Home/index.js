import React from "react";
import { HomeContainer } from "./styled";
import * as images from "../../assets/index";
import { Box } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import { Divider, Grid, Link, TextField } from "@mui/material";
import FormItem from "../../components/molecules/FormItem";

const specialties = [
  {
    id: 1,
    name: "Cơ Xương Khớp",
    url: "/",
    image:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
  },
  {
    id: 2,
    name: "Thần Kinh",
    url: "/",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
  },
  {
    id: 3,
    name: "Tiêu Hoá",
    url: "/",
    image:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
  },
  {
    id: 4,
    name: "Tim Mạch",
    url: "/",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
  },
  {
    id: 5,
    name: "Tai Mũi Họng",
    url: "/",
    image:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
  },
];

const Home = () => {
  return (
    <Box>
      <HomeContainer>
        <Box>NỀN TẢNG Y TẾ</Box>
        <Box>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</Box>
        <Box maxWidth={456} sx={{ width: "100%" }}>
          <Autocomplete
            sx={{
              bgcolor: "#F7D800",
              borderRadius: 10,
              height: 50,
              display: "flex",
              alignItems: "center",
            }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={specialties}
            getOptionLabel={(specialty) => specialty.name}
            renderOption={(props, specialty) => (
              <Box key={specialty.id}>
                <Link
                  href={specialty.url}
                  underline="none"
                  color="#333333"
                  fontWeight="400"
                  fontSize={15}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    p: 1,
                  }}
                >
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    width={30}
                    height={30}
                  />
                  {specialty.name}
                </Link>
                <Divider />
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                placeholder="Tìm Gói Khám"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  disableUnderline: true,
                }}
              />
            )}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link href="https://bookingcare.vn/app/android">
            <img
              src="https://bookingcare.vn/assets/icon/google-play-badge.svg"
              alt="App Store Badge"
              width={108}
              height={32}
            />
          </Link>
          <Link href="https://bookingcare.vn/app/ios">
            <img
              src={images.AppStoreBadge}
              alt="App Store Badge"
              width={108}
              height={32}
            />
          </Link>
        </Box>
        <Grid
          container
          maxWidth="lg"
          columns={{ lg: 16, md: 12, sm: 6, xs: 6 }}
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {specialtiesButton.map((specialtyButton, index) => (
            <Grid item xs={2} key={index}>
              <Link
                href={specialtyButton.url}
                sx={{
                  py: 0.5,
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: 600,
                  "&:hover": {
                    color: "#45c3d2",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#ffffff",
                    display: "flex",
                    p: 1.5,
                    borderRadius: 32,
                    boxShadow: "#000000 0px 1px 2px 0px",
                  }}
                >
                  <img
                    src={specialtyButton.image}
                    alt={specialtyButton.name}
                    width={32}
                    height={32}
                  />
                </Box>
                {specialtyButton.name}
              </Link>
            </Grid>
          ))}
        </Grid>
      </HomeContainer>

      <FormItem
        label="Chuyên khoa phổ biến"
        options={options}
        bgcolor="#f5f5f5"
        buttonTitle="XEM THÊM"
      />
    </Box>
  );
};

const specialtiesButton = [
  {
    name: "Khám Chuyên Khoa",
    url: "/",
    image: images.KhamChuyenKhoa,
  },
  {
    name: "Khám Từ Xa",
    url: "/",
    image: images.KhamTuXa,
  },
  {
    name: "Khám Tổng Quát",
    url: "/",
    image: images.KhamTongQuat,
  },
  {
    name: "Xét Nghiệm Y Học",
    url: "/",
    image: images.XetNgiemYHoc,
  },
  {
    name: "Sức Khoẻ Tinh Thần",
    url: "/",
    image: images.SucKhoeTinhThan,
  },
  {
    name: "Khám Nha Khoa",
    url: "/",
    image: images.KhamNhaKhoa,
  },
  {
    name: "Gói Phẫu Thuật",
    url: "/",
    image: images.GoiPhauThuat,
  },
  {
    name: "Sản Phẩm Y Tế",
    url: "/",
    image: images.SanPhamYTe,
  },
];

const options = [
  {
    title: "Cơ Xương Khớp",
    image:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
  },
  {
    title: "Thần Kinh",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
  },
  {
    title: "Tiêu hóa",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg",
  },
  {
    title: "Tim mạch",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg",
  },
  {
    title: "Tai mũi họng",
    image:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
  },
  {
    title: "Cột sống",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
  },
  {
    title: "Y học cổ truyền",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg",
  },
  {
    title: "Châm cứu",
    image: "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg",
  },
];

export default Home;
