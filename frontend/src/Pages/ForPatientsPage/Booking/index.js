import React from 'react';
import { BookingWrapper } from './styled';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { Link } from 'react-router-dom';

import * as images from '../../../assets';

export default function Booking() {
  const [show, setShow] = React.useState(false);
  const [showPL, setShowPL] = React.useState(false);
  const [showBH, setShowBH] = React.useState(false);

  const [location, setLocation] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const container = React.useRef(null);

  const containerPL = React.useRef(null);

  const containerBH = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClickPL = () => {
    setShowPL(!showPL);
  };

  const handleClickBH = () => {
    setShowBH(!showBH);
  };

  return ( <BookingWrapper>
    <div>
    <div className='introduce'>
      <Container className='container'>
        <Box>
          <p>Cơ Xương Khớp</p>
          <p>Bác sĩ Cơ Xương Khớp giỏi</p>
          <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
            {show ? (
              <Portal container={container.current}>
                <ul>
                  <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                  <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
                  <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
                  <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
                  <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
                </ul>

                <p>Bệnh Cơ Xương Khớp</p>
                <ul>
                  <li>Gout</li>
                  <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
                  <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
                  <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
                  <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
                </ul>
              </Portal>
            ) : null}
          </Box>
          <Box ref={container} />
          <button className='btn-more' type="button" onClick={handleClick}>
            {show ? 'Ẩn bớt' : 'Đọc thêm'}
          </button>
        </Container>
      </div>

      <div className='content'>
        <Container>
          <FormControl className='form-control'>
          <InputLabel id="demo-simple-select-filled-label" className='input-form'>Địa điểm</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={location}
              label="Location"
              onChange={handleChangeLocation}
              className='select'
            >
              <MenuItem value={10}>Toàn quốc</MenuItem>
              <MenuItem value={20}>Hà Nội</MenuItem>
              <MenuItem value={30}>Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>

          <div className='wrapper'>
            <div className='wp-left'>
              <div className='img'>
                <Avatar
                  alt="Remy Sharp"
                  src={images.GS_Tran_Ngoc_An}
                  sx={{ width: 100, height: 100, mb: 1}}
                />
                <Link className='link' to={''}>Xem thêm</Link>
              </div>

              <div className='information'>
                <p className='name'>Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân</p>
                <p className='detail'>
                  Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai<br/>
                  Chủ tịch Hội Thấp khớp học Việt Nam<br/>
                  Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp<br/>
                  Bác sĩ khám cho người bệnh từ 14 tuổi trở lên<br/>
                </p>
                <p className='address'>
                  <div className="icons">
                    <LocationOnIcon fontSize="small" />
                  </div>
                  Hà nội
                </p>
              </div>
            </div>

            <div className='wp-right'>
              <FormControl variant="standard" sx={{ width: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Date</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={date}
                  onChange={handleChangeDate}
                  label="Date"
                  className='select'
                  sx={{ color: '#337ab7' }}
                >
                  <MenuItem value={10}>Thứ 6: 27/05</MenuItem>
                  <MenuItem value={20}>Thứ 7: 28/05</MenuItem>
                  <MenuItem value={30}>Thứ 2: 30/05</MenuItem>
                </Select>
              </FormControl>

              <div className='calender'>
                <div className='title'>
                  <CalendarMonthIcon fontSize='small'/>
                  <p className='text'>LỊCH KHÁM</p>
                </div>

                <div className='booking'>
                  <Link className='btn-booking' to={''}>Đăng ký khám (Sáng)</Link>
                </div>

                <p className='txt'>Chọn  và đặt (Phí đặt lịch 0đ)</p>
              </div>

              <div className='booking-address'>
                <p className='title'>ĐỊA CHỈ KHÁM</p>
                <p className='content'>
                  Bệnh viện Đa khoa Quốc tế Thu Cúc - Thụy Khuê <br/>
                  286 Thụy Khuê, quận Tây Hồ, Hà Nội
                </p>
              </div>

              <div className='booking-wp'>
                <p className='title'>Giá khám:</p>
                <div className='content'>
                  <p className='price-txt'>150.000đ</p>
                  {showPL ? (
                    <Portal container={containerPL.current}>
                      <ul>
                        <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                        <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
                        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
                        <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
                        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
                      </ul>
                    </Portal>
                  ) : null}
                  <Box ref={containerPL} />
                  <button className='btn-more' type="button" onClick={handleClickPL}>
                    {showPL ? 'Ẩn bảng giá' : 'Xem chi tiết'}
                  </button>
                </div>
              </div>

              <div className='booking-wp'>
                <p className='title'>Loại bảo hiểm áp dụng.</p>
                <div className='content'>
                  {showBH ? (
                    <Portal container={containerBH.current}>
                      <ul>
                        <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                        <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
                        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
                        <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
                        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
                      </ul>
                      <button className='btn-more' type="button" onClick={handleClickBH}>
                        Thu gọn
                      </button>
                    </Portal>
                    ) : null}
                    <Box ref={containerBH} />
                    {showBH ? null :
                      <button className='btn-more' type="button" onClick={handleClickBH}>
                      Xem chi tiết
                    </button>
                    }
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    </BookingWrapper>
  )
}
