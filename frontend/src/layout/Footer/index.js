import React from "react";
import FooterWrapper from "./styled";
import Container from '@mui/material/Container';

import Logo from '../../assets/images/bookingcare-logo.svg'
import Bo_Cong_Thuong from '../../assets/images/bo-cong-thuong.svg'

const Footer = () => {
  return <FooterWrapper>
  <div>
    <Container className="Container">
      <div className="footer-top">
        <div className="ft-left">
          <img className="img-logo" src={Logo} alt='logo'/>
          <div className="information">
            <p className="name">Công ty Cổ phần Công nghệ BookingCare</p>
            <p className="info">28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
            <p className="info">ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
            <img className="img-logo-bo" src={Bo_Cong_Thuong} alt='Bo'/>
            <img className="img-logo-bo" src={Bo_Cong_Thuong} alt='Bo'/>
          </div>
        </div>

        <div className="ft-center">
          <ul>
            <li>Liên hệ hợp tác</li>
            <li>Câu hỏi thường gặp</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách Bảo mật</li>
            <li>Quy trình hỗ trợ giải quyết khiếu nại</li>
            <li>Quy chế hoạt động</li>
          </ul>
        </div>

        <div className="ft-right">
          <ul>
            <li className="title">Trụ sở tại Hà Nội</li>
            <li className="address">28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</li>
            <li className="title">Văn phòng tại TP Hồ Chí Minh</li>
            <li className="address">6/6 Cách Mạch Tháng Tám, P. Bến Thành, Quận 1</li>
            <li className="title">Hỗ trợ khách hàng</li>
            <li className="address">support@bookingcare.vn (7h - 18h)</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      </div>
    </Container>
  </div>
  </FooterWrapper>;
};

export default Footer;
