import { Box, Input, List, ListItem, ListItemText, Link } from "@mui/material";
import React from "react";

const DoctorsListPage = () => {
  return (
    <Box bgcolor="#F5F5F5">
      <Box sx={{ px: 2, pt: 2 }}>
        <Input
          disableUnderline={true}
          sx={{
            outline: "none",
            border: "1px #888888 solid",
            borderRadius: 5,
            width: "100%",
            px: 2,
            bgcolor: "white",
          }}
          placeholder="Tìm kiếm bác sĩ"
        />
      </Box>
      <Box bgcolor="#FFFFFF" sx={{ pt: 1, mt: 2, width: "100%" }}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            p: 0,
            maxHeight: "580px",
          }}
        >
          <Box sx={{ fontWeight: "600", fontSize: "15px", px: 2 }}>
            Bác sĩ nổi bật
          </Box>
          {doctorsList.map((doctor) => (
            <ListItem
              key={doctor.id}
              sx={{
                pt: 2,
                pb: 1,
                display: "flex",
                borderBottom: "1.5px #F1F1F1 solid",
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
              component="Box"
            >
              <Link href={doctor.url}>
                <img
                  src={doctor.imageURL}
                  alt={doctor.name}
                  width={50}
                  height={50}
                  style={{ borderRadius: "50px" }}
                />
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link
                  href={doctor.url}
                  underline="none"
                  color="#333333"
                  sx={{
                    display: "flex",
                    mx: 1.5,
                    mt: -1,
                  }}
                >
                  <ListItemText>{doctor.name}</ListItemText>
                </Link>
                <Link
                  href={doctor.url}
                  underline="none"
                  color="#999999"
                  sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    mx: 1.5,
                    fontSize: "10px",
                    mt: -1,
                  }}
                >
                  <ListItemText sx={{ fontSize: 5 }}>
                    {doctor.dept}
                  </ListItemText>
                </Link>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const doctorsList = [
  {
    id: "1",
    name: "Bác sĩ chuyển khoa II Trần Minh Khuyên",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg",
    dept: "Sức khoẻ tâm thần",
    url: "/ForDoctorsPage",
  },
  {
    id: "2",
    name: "Bác sĩ chuyển khoa II Trần Thị Hoài Hương",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg",
    dept: "Da liễu",
    url: "/",
  },
  {
    id: "3",
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ cap cấp Nguyễn Duy Hưng",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2017/03/16/115950bs-dao-dinh-thi.jpg",
    dept: "Da liễu",
    url: "/",
  },
  {
    id: "4",
    name: "Tiến sĩ, Bác sĩ Đào Đình Thi",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2019/12/31/155650-gs-ha-van-quyet.jpg",
    dept: "Tai mũi họng",
    url: "/",
  },
  {
    id: "5",
    name: "Khám GS, PGS, TS, BSCKII, Trưởng khoa, Phó khoa Thần kinh I",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2018/08/01/112814benh-vien-viet-duc.jpg",
    dept: "Thần kinh",
    url: "/",
  },
  {
    id: "6",
    name: "Giáo sư, Tiến sĩ Hà Văn Quyết",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2019/12/31/155650-gs-ha-van-quyet.jpg",
    dept: "Tiêu hoá - Bệnh viêm gan",
    url: "/",
  },
  {
    id: "7",
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg",
    dept: "Tai mũi họng - Nhi khoa",
    url: "/",
  },
  {
    id: "8",
    name: "PGS, TS, Giảng viên cao cấp Trần Hữu Bình",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2021/01/21/142313-bs-tran-huu-binh.jpg",
    dept: "Sức khoẻ tâm thần",
    url: "/",
  },
  {
    id: "9",
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thọ Lộ",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2019/12/31/155850-pgs-nguyen-tho-lo.jpg",
    dept: "Thần kinh - Cột sống - Ngoại thần kinh",
    url: "/",
  },
  {
    id: "10",
    name: "Giáo sư, Thầy thuốc nhân dân Đỗ Như Hơn",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w200/2020/01/03/113131-gs-do-nhu-hon.jpg",
    dept: "Chuyên khoa mắt",
    url: "/",
  },
];
export default DoctorsListPage;
