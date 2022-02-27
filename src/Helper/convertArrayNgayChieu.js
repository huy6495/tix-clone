export const convertArrayNgayChieu = (arrayObjectNgayChieu) => {
  const holder4 = {};
  arrayObjectNgayChieu.forEach((lich) => {
    holder4[lich.showDate] = lich.showTimeArray;
  });
  // console.log(holder4);
  const arrayFinal = [];
  for (let prop in holder4) {
    arrayFinal.push({ showDate: prop, suatChieu: holder4[prop] });
  }
  // console.log(arrayFinal);
  return arrayFinal;
};
