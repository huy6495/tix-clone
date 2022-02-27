import { convertArrayNgayChieu } from "./convertArrayNgayChieu";

export const convertArrayLichChieuTheoRap = (tatCaSuatChieuTheoRap) => {
  const convertArray = (array) => {
    let initialValue = [];
    for (const property of array) {
      let tenPhim = property.tenPhim;
      initialValue.push({ [tenPhim]: property });
    }
    return initialValue;
  };

  const retainStringArray = (array) => {
    let total = [];
    for (const property of array) {
      total = [...total, property.tenPhim];
    }
    return [...new Set(total)];
  };

  const finalArray = () => {
    let final = [];
    for (const _item of retainStringArray(tatCaSuatChieuTheoRap)) {
      let resultObject = {
        tenPhim: _item,
        hinhAnh: tatCaSuatChieuTheoRap.find((movie) => movie.tenPhim === _item)
          .hinhAnh,
        arrayLichChieu: [],
      };
      let holder1 = convertArray(tatCaSuatChieuTheoRap).filter((item) =>
        item.hasOwnProperty(_item)
      );

      for (const __movie of holder1) {
        resultObject.arrayLichChieu.push(__movie[_item]);
      }

      resultObject.arrayLichChieu = convertArrayNgayChieu(
        resultObject.arrayLichChieu
      );

      final.push(resultObject);
    }
    return final;
  };

  return finalArray();
};
