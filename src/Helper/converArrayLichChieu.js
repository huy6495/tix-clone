export const convertArrayLichChieu = (tatCaSuatChieu) => {
  const convertArray = (array) => {
    let initialValue = [];
    for (const property of array) {
      let rap = property.tenRap;
      initialValue.push({ [rap]: property });
    }
    return initialValue;
  };

  const retainStringArray = (array) => {
    let total = [];
    for (const property of array) {
      total = [...total, property.tenRap];
    }
    return [...new Set(total)];
  };

  const finalArray = () => {
    let final = [];
    for (const _item of retainStringArray(tatCaSuatChieu)) {
      let resultObject = { tenRap: _item, arrayLichChieu: [] };
      let holder1 = convertArray(tatCaSuatChieu).filter((item) =>
        item.hasOwnProperty(_item)
      );

      for (const __cinema of holder1) {
        resultObject.arrayLichChieu.push(__cinema[_item]);
      }

      final.push(resultObject);
    }
    return final;
  };

  return finalArray();
};
