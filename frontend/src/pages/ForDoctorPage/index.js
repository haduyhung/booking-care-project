import React, { useState, useEffect, useCallback } from "react";
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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useParams } from "react-router-dom";

import * as image from "../../assets";

import ShowPriceList from "../../components/atoms/ShowForm/ShowPriceList";
import ShowInsurance from "../../components/atoms/ShowForm/ShowInsurance";

import DoctorApi from "../../apis/DoctorApi";
import baseURL from "../../utils";
import SchedulesApi from "../../apis/SchedulesApi";
import moment from "moment";

const ForDoctorsPage = () => {
  const now = Date.now();
  let { id } = useParams();
  const [date, setDate] = useState(now);
  const [selectDate, setSelectDate] = useState();
  const [doctor, setDoctors] = useState("");
  const [doctorSchedules, setDoctorSchedules] = useState();

  const getDoctor = useCallback(async () => {
    try {
      const response = await DoctorApi.getOne(id);
      setDoctors(response.data);
    } catch (error) {
      console.error(error.response);
    }
  }, [id]);

  useEffect(() => {
    getDoctor();
  }, [getDoctor]);

  const getDoctorSchedules = useCallback(async () => {
    try {
      const response = await SchedulesApi.getSchedules({
        doctorId: id,
        date: date,
      });
      console.log("res", response.data);
      setDoctorSchedules(response.data);
    } catch (error) {
      console.error(error.response);
    }
  }, [date]);

  useEffect(() => {
    getDoctorSchedules();
  }, [getDoctorSchedules]);

  const handleChangeDate = (event) => {
    const isDate = new Date(`2022-${event.target.value}`);
    setDate(isDate);
    setSelectDate(event.target.value);
  };

  return (
    <Box>
      <Container role="presentation">
        <Breadcrumbs aria-label="breadcrumb" color="#45c3d2" sx={{ py: 1 }}>
          <Link underline="none" color="#45c3d2" href="/">
            <HomeIcon fontSize="medium" sx={{ pt: 0.5 }} />
          </Link>
          <Link
            underline="none"
            color="#45c3d2"
            href="/DepthsListPage"
            sx={{ fontSize: 14 }}
          >
            Khám chuyên khoa
          </Link>
          <Link
            underline="none"
            color="#45c3d2"
            href={`/ForPatientsPage/${doctor?.specialty?.id}`}
            sx={{ fontSize: 14 }}
          >
            {doctor?.specialty?.name}
          </Link>
        </Breadcrumbs>
      </Container>
      <Container>
        <Box sx={{ py: 4, display: "flex" }}>
          {!doctor.avatar ? (
            <Avatar
              alt={doctor.id}
              src={image.DepthsDefault}
              sx={{ width: 100, height: 100, mb: 1 }}
            />
          ) : (
            <Avatar
              alt={doctor.id}
              src={`${baseURL}${doctor.avatar}`}
              sx={{ width: 100, height: 100, mb: 1 }}
            />
          )}
          <Box sx={{ width: "50%", pl: 2 }}>
            <Typography sx={{ fontSize: 18, fontWeight: "bold", pb: 1 }}>
              Bác sĩ Chuyên khoa II {doctor.lastName} {doctor.middleName}{" "}
              {doctor.firstName}
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#555" }}>
              Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
              Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris
              (Psychology practique de Paris) Bác sĩ nhận khám từ 16 tuổi trở
              lên
            </Typography>
          </Box>
        </Box>
        <FormControl variant="standard" sx={{ width: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectDate}
            onChange={handleChangeDate}
            label="Date"
            className="select"
            sx={{ color: "#337ab7" }}
          >
            <MenuItem value={undefined}>none</MenuItem>
            <MenuItem value="07-09">Thứ 2: 09/07</MenuItem>
            <MenuItem value="07-10">Thứ 3: 10/07</MenuItem>
            <MenuItem value="07-11">Thứ 4: 11/07</MenuItem>
            <MenuItem value="07-12">Thứ 5: 12/07</MenuItem>
            <MenuItem value="07-13">Thứ 6: 13/07</MenuItem>
            <MenuItem value="07-14">Thứ 7: 14/07</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ mt: 2, flex: 1, borderRight: 1, borderColor: "#eee" }}>
            <Box sx={{ display: "flex" }}>
              <CalendarMonthIcon fontSize="small" />
              <Typography
                sx={{
                  pl: 1,
                  fontSize: 14,
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                Lịch khám
              </Typography>
            </Box>
            <Box sx={{ display: "flex", py: 1 }}>
              {/* {doctorSchedules?.map((schedule) => (
                <Button
                  sx={{
                    px: 2.5,
                    py: 1,
                    mr: 1,
                    color: "#333",
                    backgroundColor: "#fff04b",
                    "&:hover": {
                      backgroundColor: "#fff04b",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: "500" }}>
                    {moment(schedule.timeStart).format("LT")} -
                    {moment(schedule.timeStart).format("LT")}
                  </Typography>
                </Button>
              ))} */}
            </Box>
            <Typography sx={{ fontSize: 13 }}>
              Chọn và đặt (Phí đặt lịch 0đ)
            </Typography>
          </Box>
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography
              sx={{
                fontSize: 14,
                textTransform: "uppercase",
                color: "#666",
                lineHeight: 2,
              }}
            >
              Địa chỉ khám
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: "bold", lineHeight: 2 }}
            >
              {doctor?.clinic?.name}
            </Typography>
            <Typography sx={{ fontSize: 13, lineHeight: 2 }}>
              {doctor?.clinic?.address}
            </Typography>

            <ShowPriceList detail={doctor} />
            <ShowInsurance />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ForDoctorsPage;
