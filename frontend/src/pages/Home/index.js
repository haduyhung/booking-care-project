import React from "react";
import { HomeContainer } from "./styled";
import * as images from "../../assets/index";
import { Box } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import SliderAutoForm from "../../components/atoms/SliderAutoForm";
import SliderForm from "../../components/atoms/SliderForm";

const Home = () => {
  return (
    <Box>
      <HomeContainer>
        <Stack py={3} spacing={2} alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "300",
              color: "white",
              textTransform: "uppercase",
              textShadow: "1px 1px 1px #333",
            }}
          >
            NỀN TẢNG Y TẾ
          </Typography>
          <Typography
            align="center"
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
              textShadow: "1px 1px 1px #333",
            }}
          >
            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
          </Typography>
        </Stack>
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
              <Stack key={specialty.id}>
                <Link
                  href={specialty.url}
                  underline="none"
                  color="#333333"
                  fontWeight="400"
                  fontSize={15}
                  sx={{ display: "flex", alignItems: "center", px: 2, p: 1 }}
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
              </Stack>
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
        <Stack direction="row" spacing={1} sx={{ py: 10 }}>
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
        </Stack>
        <Grid
          container
          maxWidth="lg"
          justifyContent="center"
          columns={{ lg: 16, md: 12, sm: 6, xs: 6 }}
          spacing={3}
          direction="row"
        >
          {specialtiesButton.map((specialtyButton, index) => (
            <Grid item xs={2} key={index}>
              <Link
                href={specialtyButton.url}
                sx={{
                  py: 1,
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
                <Stack
                  p={1}
                  direction="row"
                  bgcolor="white"
                  sx={{
                    borderRadius: 16,
                    boxShadow: "#000000 0px 1px 2px 0px",
                  }}
                >
                  <img
                    src={specialtyButton.image}
                    alt={specialtyButton.name}
                    width={32}
                    height={32}
                  />
                </Stack>
                {specialtyButton.name}
              </Link>
            </Grid>
          ))}
        </Grid>
      </HomeContainer>

      <SliderAutoForm options={autoplaySliderOptions.options} />

      <SliderForm
        label={firstOptions.label}
        options={firstOptions.options}
        bgcolor={firstOptions.color}
        buttonTitle={firstOptions.buttonTitle}
      />

      <SliderForm
        label={secondOptions.label}
        options={secondOptions.options}
        bgcolor={secondOptions.color}
        buttonTitle={secondOptions.buttonTitle}
      />

      <SliderForm
        label={thirdOptions.label}
        options={thirdOptions.options}
        bgcolor={thirdOptions.color}
        buttonTitle={thirdOptions.buttonTitle}
      />

      <Stack px={8} py={3}>
        <Typography
          sx={{ flex: 7, fontSize: 24, fontWeight: "bold", pt: 3, pb: 1 }}
        >
          Truyền thông nói về BookingCare
        </Typography>
        <Stack
          direction={{ mobile: "row", desktop: "column" }}
          alignItems="center"
        >
          <ReactPlayer url="https://youtu.be/FyDQljKtWnI" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;

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

const specialtiesButton = [
  {
    name: "Khám Chuyên Khoa",
    url: "/DepthsListPage",
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

const autoplaySliderOptions = {
  options: [
    {
      title: "Ưu đãi 50% phí khám tại Phòng khám Mediplus",
      image:
        "https://cdn.bookingcare.vn/fo/2022/06/14/090430-uu-dai-di-kham-mediplus.jpg",
      info: [
        { id: 1, text: "Áp dụng với khách hàng đặt lịch qua BookingCare" },
        {
          id: 2,
          text: "Áp dụng với chuyên khoa Cơ xương khớp, Tim mạch và Tiêu hóa",
        },
      ],
    },
    {
      title: "Bệnh viện Quốc tế City: Ưu đãi nội soi tiêu hóa",
      image: "https://cdn.bookingcare.vn/fo/2022/06/07/101348-website.jpg",
      info: [
        { id: 1, text: "Ưu đãi 15% phí nội soi đường tiêu hóa" },
        { id: 2, text: "Bác sĩ chuyên môn cao" },
        { id: 3, text: "Trang thiết bị hiện đại" },
      ],
    },
    {
      title: "Xét nghiệm COVID",
      image: "https://cdn.bookingcare.vn/fo/2021/07/27/140801-test-covid.jpg",
      info: [
        { id: 1, text: "Tầm soát và xác định COVID-19" },
        { id: 2, text: "Phương pháp Test nhanh & PCR" },
        { id: 3, text: "Theo quy chuẩn Bộ Y tế" },
      ],
    },
    {
      title: "Tư vấn F0 điều trị tại nhà",
      image:
        "https://cdn.bookingcare.vn/fo/2022/02/23/173702-ca03c7ec7699e0c21a18096495e31ab5.jpg",
      info: [
        { id: 1, text: "Đội ngũ bác sĩ giỏi, giàu kinh nghiệm" },
        { id: 2, text: "Tư vấn F0 điều trị tại nhà" },
        { id: 3, text: "Đối tượng áp dụng: F0, F1" },
      ],
    },
    {
      title: "Kit Test COVID bằng nước bọt",
      image:
        "https://cdn.bookingcare.vn/fo/2022/01/21/170022-kit-test-nhanh.png",
      info: [
        { id: 1, text: "Kit Test nhanh bằng nước bọt" },
        { id: 2, text: "Đơn giản, tiện lợi, chính xác" },
        { id: 3, text: "Bộ Y tế Việt Nam cấp chứng nhận" },
      ],
    },
    {
      title: "Tư vấn phẫu thuật bao quy đầu trọn gói",
      image:
        "https://cdn.bookingcare.vn/fo/2022/05/18/115424-221d510df8a339fd60b2.jpg",
      info: [
        { id: 1, text: "Thực hiện bởi bác sĩ Nam học" },
        { id: 2, text: "Thực hiện tại cơ sở y tế" },
        { id: 3, text: "Chi phí minh bạch" },
      ],
    },
  ],
};

const firstOptions = {
  label: "Chuyên khoa phổ biến",
  color: "#f5f5f5",
  buttonTitle: [{ title: "XEM THÊM" }],
  options: [
    {
      title: "Cơ Xương Khớp",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
    },
    {
      title: "Thần Kinh",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
    },
    {
      title: "Tiêu hóa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg",
    },
    {
      title: "Tim mạch",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg",
    },
    {
      title: "Tai mũi họng",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg",
    },
    {
      title: "Cột sống",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg",
    },
    {
      title: "Y học cổ truyền",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg",
    },
    {
      title: "Châm cứu",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg",
    },
  ],
};

const secondOptions = {
  label: "Cơ sở y tế nổi bật",
  color: "#fff",
  buttonTitle: [{ title: "TÌM KIẾM" }],
  options: [
    {
      title: "Bệnh viện Hữu nghị Việt Đức",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg",
    },
    {
      title: "Bệnh viện Chợ Rẫy",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2021/09/14/095119-benh-vien-cho-ray-h1.jpg",
    },
    {
      title: "Phòng khám Bệnh viện Đại học Y Dược 1",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg",
    },
    {
      title: "Bệnh viện K - Cơ sở Phan Chu Trinh",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2020/04/13/114446-anh-bia-bvk.jpg",
    },
    {
      title: "Bệnh viện Ung bướu Hưng Việt",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2020/06/04/095412-bv-hung-viet.jpg",
    },
    {
      title: "Hệ thống Y tế Thu Cúc",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2020/06/04/093035-benh-vien-thu-cuc-1.jpg",
    },
    {
      title: "Phòng khám Đa khoa Saigon Healthcare",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2022/05/12/101727-anh-sg-toan-dien-ben-ngoai.jpg",
    },
    {
      title: "Bệnh viện Nam học và Hiếm muộn Hà Nội ",
      image:
        "https://cdn.bookingcare.vn/fr/w500/2021/04/29/145224-bn-nam-hoc-va-hiem-muon-hn.jpg",
    },
  ],
};

const thirdOptions = {
  label: "Bác sĩ nổi bật tuần qua",
  color: "#f5f5f5",
  buttonTitle: [{ title: "XEM THÊM" }],
  options: [
    {
      title: "Bác sĩ Chuyên khoa II Trần Minh Khuyên",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg",
      work: "Sức khỏe tâm thần",
    },
    {
      title: "Bác sĩ chuyên khoa II Trần Thị Hoài Hương",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg",
      work: "Da liễu",
    },
    {
      title: "Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng",
      image: "https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg",
      work: "Da liễu",
    },
    {
      title: "Tiến sĩ, Bác sĩ Đào Đình Thi",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2017/03/16/115950bs-dao-dinh-thi.jpg",
      work: "Tai mũi họng",
    },
    {
      title: "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thọ Lộ",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2019/12/31/155850-pgs-nguyen-tho-lo.jpg",
      work: "Thần kinh - Cột sống - Ngoại thần kinh",
    },
    {
      title: "Giáo sư, Thầy thuốc nhân dân Đỗ Như Hơn",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2020/01/03/113131-gs-do-nhu-hon.jpg",
      work: "Chuyên khoa Mắt",
    },
    {
      title: "Bác sĩ Chuyên khoa II Lê Hồng Anh",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2020/07/16/103447-bs-hong-anh.jpg",
      work: "Hô hấp - Phổi",
    },
    {
      title: "Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân",
      image:
        "https://cdn.bookingcare.vn/fr/w200/2018/04/09/151800292142135730131997187173031663525568184320n.jpg",
      work: "Cơ Xương Khớp",
    },
  ],
};
