import React from 'react';
import { BookingWrapper } from './styled';
import Container from "@mui/material/Container";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { Link } from 'react-router-dom';

import * as images from '../../assets';

import SpecialistFrom from '../../components/atoms/SpecialistForm';
import ShowPriceList from '../../components/atoms/ShowForm/ShowPriceList';
import ShowInsurance from '../../components/atoms/ShowForm/ShowInsurance';

export default function ForPatientsPage() {
  const [location, setLocation] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleChangeLocation = (event) => {
      setLocation(event.target.value);
  };

  const handleChangeDate = (event) => {
      setDate(event.target.value);
  };

  return ( <BookingWrapper>
    <div>
      <SpecialistFrom />

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

            <ShowPriceList />

            <ShowInsurance />
            </div>
          </div>
        </Container>
      </div>
    </div>
  </BookingWrapper>
  )
}

