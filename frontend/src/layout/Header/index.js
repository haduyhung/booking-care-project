import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, IconButton, Link, Toolbar } from "@mui/material";
import * as images from "../../assets/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsQuestionCircleFill } from "react-icons/bs";

const pages = [
  { name: "Chuyên khoa", explain: "Tìm bác sĩ chuyên khoa", url: "/" },
  { name: "Cơ sở y tế", explain: "Chọn bệnh viện phòng khám", url: "/" },
  { name: "Bác sĩ", explain: "Chọn bác sĩ giỏi", url: "/" },
  { name: "Gói khám", explain: "Khám sức khoẻ tổng quát", url: "/" },
];

const Header = () => {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <GiHamburgerMenu color="#888888" />
              </IconButton>
              <Link href="/">
                <img src={images.Logo} alt="Booking Care" width={160} />
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
              py={3}
            >
              {pages.map((page) => (
                <Box key={page.name} mx={2.5}>
                  <Link
                    href={page.url}
                    underline="none"
                    color="black"
                    fontWeight="600"
                    fontSize={13}
                    lineHeight="18px"
                  >
                    {page.name}
                  </Link>
                  <Box>
                    <Link
                      href={page.url}
                      underline="none"
                      color="black"
                      fontWeight="400"
                      fontSize={11}
                      lineHeight={1.5}
                    >
                      {page.explain}
                    </Link>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Link
            textAlign="right"
            href="/"
            underline="none"
            color="#999999"
            fontSize={14}
            fontWeight="600"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 0,
            }}
          >
            <BsQuestionCircleFill color="#45C8DF" />
            Hỗ trợ
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
