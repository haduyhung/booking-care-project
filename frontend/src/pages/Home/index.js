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
import FormItem from "../../components/molecules/FormItem";

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

      <FormItem
        label={firstOptions.label}
        options={firstOptions.options}
        bgcolor={firstOptions.color}
        buttonTitle={firstOptions.buttonTitle}
        itemPerRow={firstOptions.itemPerRow}
      />

      <FormItem
        label={secondOptions.label}
        options={secondOptions.options}
        bgcolor={secondOptions.color}
        buttonTitle={secondOptions.buttonTitle}
        itemPerRow={secondOptions.itemPerRow}
      />

      <FormItem
        label={thirdOptions.label}
        options={thirdOptions.options}
        bgcolor={thirdOptions.color}
        buttonTitle={thirdOptions.buttonTitle}
        itemPerRow={thirdOptions.itemPerRow}
      />

      <FormItem
        label={forthOptions.label}
        options={forthOptions.options}
        bgcolor={forthOptions.color}
        buttonTitle={forthOptions.buttonTitle}
        itemPerRow={forthOptions.itemPerRow}
      />

      <FormItem
        label={fifthOptions.label}
        options={fifthOptions.options}
        bgcolor={fifthOptions.color}
        buttonTitle={fifthOptions.buttonTitle}
        itemPerRow={fifthOptions.itemPerRow}
      />
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

const firstOptions = {
  label: "Bác sĩ từ xa qua Video",
  color: "#f5f5f5",
  buttonTitle: "XEM THÊM",
  itemPerRow: 4,
  options: [
    {
      title: "Tư vấn, trị liệu Tâm lý từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2020/12/20/111237-tam-ly-2.jpg",
    },
    {
      title: "Sức khỏe tâm thần từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2020/12/09/100650-doctor-57101521920.jpg",
    },
    {
      title: "Bác sĩ Da liễu từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/11/04/163921da-lieu-hn.jpg",
    },
    {
      title: "Bác sĩ Cơ-Xương-Khớp từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/02/27/165326kham-benh-co-xuong-khop-1.jpg",
    },
    {
      title: "Bác sĩ Cột sống từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2020/03/04/094112-quy-trinh-kham-cot-song-benh-vien-viet-duc.jpg",
    },
    {
      title: "Bác sĩ Tiêu hóa từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2018/01/17/171636bac-si-tieu-hoa.jpg",
    },
    {
      title: "Bác sĩ Nội khoa từ xa",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg",
    },
    {
      title: "Bác sĩ Nam học từ xa",
      image: "https://cdn.bookingcare.vn/fr/w300/2018/10/16/151254nam-hoc.jpg",
    },
  ],
};

const secondOptions = {
  label: "Chuyên khoa phổ biến",
  color: "#fff",
  buttonTitle: "XEM THÊM",
  itemPerRow: 4,
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

const thirdOptions = {
  label: "Cơ sở y tế nổi bật",
  color: "#f5f5f5",
  buttonTitle: "TÌM KIẾM",
  itemPerRow: 4,
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

const forthOptions = {
  label: "Bác sĩ nổi bật tuần qua",
  color: "#fff",
  buttonTitle: "XEM THÊM",
  itemPerRow: 4,
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

const fifthOptions = {
  label: "Cơ sở y tế nổi bật",
  color: "#f5f5f5",
  buttonTitle: "XEM THÊM",
  itemPerRow: 2,
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
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
    },
    {
      title: "Cột sống",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
    },
    {
      title: "Y học cổ truyền",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg",
    },
    {
      title: "Châm cứu",
      image:
        "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg",
    },
  ],
};
