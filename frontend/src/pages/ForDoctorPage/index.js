import * as React from 'react';
import { 
  Box, 
  Link, 
  Breadcrumbs, 
  Typography, 
  Container, 
  Avatar, 
  FormControl, 
  InputLabel, 
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import * as images from '../../assets';

import ShowPriceList from '../../components/atoms/ShowForm/ShowPriceList';
import ShowInsurance from '../../components/atoms/ShowForm/ShowInsurance';

const ForDoctorsPage = () => {
  const [date, setDate] = React.useState('');

  const handleChangeDate = (event) => {
      setDate(event.target.value);
  };

  return (
    <Box>
      <Container role="presentation">
        <Breadcrumbs aria-label="breadcrumb" color="#45c3d2" sx={{py: 1}}>
          <Link underline="none" color="#45c3d2" href="/">
            <HomeIcon fontSize="medium" sx={{pt: 0.5}}/>
          </Link>
          <Link
            underline="none"
            color="#45c3d2"
            href="/ExaminationPackagesPage"
            sx={{fontSize: 14}}
          >
            Khám chuyên khoa
          </Link>
          <Link
            underline="none"
            color="#45c3d2"
            href="/ExaminationPackagesPage"
            sx={{fontSize: 14}}
          >
            Sức khỏe tâm thần
          </Link>
        </Breadcrumbs>
      </Container>

      <Container>
        <Box sx={{ py: 4, display: "flex"}}>
          <Avatar
          alt="Remy Sharp"
          src={images.GS_Tran_Ngoc_An}
          sx={{width: 100, height: 100, mb: 1}}
          />
          <Box sx={{width: '50%', pl: 2}}>
            <Typography sx={{fontSize: 18, fontWeight: 'bold', pb: 1}}>Bác sĩ Chuyên khoa II Trần Minh Khuyên</Typography>
            <Typography sx={{fontSize: 13, color: '#555'}}>
              Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
              Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)
              Bác sĩ nhận khám từ 16 tuổi trở lên
            </Typography>
          </Box>
        </Box>

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

        <Box sx={{ display: 'flex' }}>
          <Box sx={{mt: 2, flex: 1, borderRight: 1, borderColor: '#eee'}}>
            <Box sx={{display: 'flex'}}>
              <CalendarMonthIcon fontSize='small'/>
              <Typography sx={{pl: 1 ,fontSize: 14, fontWeight: '500', textTransform: 'uppercase'}}>Lịch khám</Typography>
            </Box>
            <Box sx={{display: 'flex', py: 1}}>
              <Button sx={{
                px: 2.5,
                py: 1,
                mr: 1,
                color: '#333', 
                backgroundColor: '#fff04b',
                "&:hover": {
                  backgroundColor: "#fff04b",
                },
              }}
              >
                <Typography sx={{fontSize: 14, fontWeight: '500'}}>15:00 - 15:30</Typography>
              </Button>
              <Button sx={{
                px: 2.5,
                py: 1,
                mr: 1,
                color: '#333', 
                backgroundColor: '#fff04b',
                "&:hover": {
                  backgroundColor: "#fff04b",
                },
              }}
              >
                <Typography sx={{fontSize: 14, fontWeight: '500'}}>15:00 - 15:30</Typography>
              </Button>
              <Button sx={{
                px: 2.5,
                py: 1,
                mr: 1,
                color: '#333', 
                backgroundColor: '#fff04b',
                "&:hover": {
                  backgroundColor: "#fff04b",
                },
              }}
              >
                <Typography sx={{fontSize: 14, fontWeight: '500'}}>15:00 - 15:30</Typography>
              </Button>
            </Box>
            <Typography sx={{fontSize: 13}}>Chọn và đặt (Phí đặt lịch 0đ)</Typography>
          </Box>
          <Box sx={{flex: 1, p: 2}}>
            <Typography sx={{fontSize: 14, textTransform: 'uppercase', color: '#666', lineHeight: 2}}>Địa chỉ khám</Typography>
            <Typography sx={{fontSize: 13, fontWeight: 'bold', lineHeight: 2}}>Phòng khám Bệnh viện Đại học Y Dược 1</Typography>
            <Typography sx={{fontSize: 13, lineHeight: 2}}>20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM</Typography>
            
            <ShowPriceList />
            <ShowInsurance />
          
          </Box>
        </Box>

      </Container>
    </Box>
  )
};

export default ForDoctorsPage;
