import { styled } from "@mui/system";

const DetailItem = styled("div")({});

const DetailTitle = styled("div")({
  color: "#337AB7",
  fontWeight: "600",
  fontSize: "16px",
  borderBottom: "1px solid #EEEEEE",
  padding: "10px 0px",
  marginTop: "30px",
});

const DetailContent = styled("div")({
  fontSize: "14px",
});

export { DetailItem, DetailTitle, DetailContent };
