import { Box, Input, List, ListItem, ListItemText, Link } from "@mui/material";
import React from "react";

const FacilitiesPage = () => {
  return (
    <Box bgcolor="#F5F5F5">
      <Box sx={{ px: 2, pt: 2, mt: 1 }}>
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
          placeholder="Tìm kiếm bệnh viện, phòng khám"
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
            Bệnh viện, phòng khám nổi bật
          </Box>
          {facilities.map((facility) => (
            <ListItem
              key={facility.id}
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
              <Link href={facility.url}>
                <img
                  src={facility.imageURL}
                  alt={facility.name}
                  width={100}
                  height={50}
                />
              </Link>
              <Link
                href={facility.url}
                underline="none"
                color="#333333"
                sx={{
                  display: "flex",
                  alignSelf: "flex-start",
                  mx: 1.5,
                }}
              >
                <ListItemText>{facility.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const facilities = [
  {
    id: "1",
    name: "Bệnh viện Hữu Nghị Việt Đức",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg",
    url: "/",
  },
  {
    id: "2",
    name: "Bệnh viện Chợ Rẫy",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2021/09/14/095119-benh-vien-cho-ray-h1.jpg",
    url: "/",
  },
  {
    id: "3",
    name: "Phòng khám bệnh viện Đại học Y dược 1",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg",
    url: "/",
  },
  {
    id: "4",
    name: "Bệnh viện K - Cơ Sở Phan Chu Trinh",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/04/13/114446-anh-bia-bvk.jpg",
    url: "/",
  },
  {
    id: "5",
    name: "Bệnh viện Ung bướu Hưng Việt",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/06/04/095412-bv-hung-viet.jpg",
    url: "/",
  },
  {
    id: "6",
    name: "Hệ thống Y Tế Thu Cúc",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/06/04/093035-benh-vien-thu-cuc-1.jpg",
    url: "/",
  },
  {
    id: "7",
    name: "Phòng khám đa khoa Sài Gòn Healthcare",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/06/04/093035-benh-vien-thu-cuc-1.jpg",
    url: "/",
  },
  {
    id: "8",
    name: "Bệnh viện Nam học và Hiếm muộn Hà Nội",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2021/04/29/145224-bn-nam-hoc-va-hiem-muon-hn.jpg",
    url: "/",
  },
  {
    id: "9",
    name: "Bệnh viện Đa Khoa Hồng Phát",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2019/09/04/172230benh-vien-hong-phat.jpg",
    url: "/",
  },
  {
    id: "10",
    name: "Bệnh viện Đa Khoa An Việt",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w500/2020/06/04/090854-bv-an-viet1.jpg",
    url: "/",
  },
];
export default FacilitiesPage;
