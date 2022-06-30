import { Box, List, ListItem, ListItemText, Link } from "@mui/material";
import React from "react";

const DepthsListPage = () => {
  return (
    <Box bgcolor="#F5F5F5">
      <Box bgcolor="#FFFFFF" sx={{ mt: 1, width: "100%" }}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            p: 0,
            maxHeight: "650px",
          }}
        >
          {depthsList.map((depth) => (
            <ListItem
              key={depth.id}
              sx={{
                pt: 2,
                pb: 1,
                display: "flex",
                borderBottom: "1.5px #F1F1F1 solid",
                "&:first-child": {
                  pt: 0,
                },
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
              component="Box"
            >
              <Link href={depth.url}>
                <img
                  src={depth.imageURL}
                  alt={depth.name}
                  width={100}
                  height={50}
                />
              </Link>
              <Link
                href={depth.url}
                underline="none"
                color="#333333"
                sx={{
                  display: "flex",
                  alignSelf: "flex-start",
                  mx: 1.5,
                }}
              >
                <ListItemText>{depth.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const depthsList = [
  {
    id: "1",
    name: "Cơ xương khớp",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg",
    url: "/",
  },
  {
    id: "2",
    name: "Thần kinh",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg",
    url: "/",
  },
  {
    id: "3",
    name: "Tiêu Hoá",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg",
    url: "/",
  },
  {
    id: "4",
    name: "Tim Mạch",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg",
    url: "/",
  },
  {
    id: "5",
    name: "Tai Mũi Họng",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg",
    url: "/",
  },
  {
    id: "6",
    name: "Cột sống",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg",
    url: "/",
  },
  {
    id: "7",
    name: "Y học cổ truyền",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg",
    url: "/",
  },
  {
    id: "8",
    name: "Châm cứu",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg",
    url: "/",
  },
  {
    id: "9",
    name: "Sản phụ khoa",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/16/181822-san-phu-khoa.jpg",
    url: "/",
  },
  {
    id: "10",
    name: "Siêu âm thai",
    imageURL:
      "https://cdn.bookingcare.vn/fr/w300/2019/12/16/181619-sieu-am-thai.jpg",
    url: "/",
  },
];
export default DepthsListPage;
