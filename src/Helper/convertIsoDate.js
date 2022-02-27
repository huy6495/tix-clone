export default function convertIsoDate(isoFormat) {
  let date = new Date(isoFormat);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }

  return {
    ngayChieu: dt + "-" + month + "-" + year,
    suatChieu: hour + ":" + min,
  };
}
