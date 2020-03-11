export const interestDataOrganizer = interestData => {
  const data = [];
  let i = 0;
  while (i < interestData.column_names.length) {
    data[i] = {};
    data[i].name = interestData.column_names[i];
    // console.log('name insertion', data);
    // console.log('i', i, interestData.data[i]);

    for (let j = 0; j < interestData.data.length; j++) {
      let date = interestData.data[j][0];
      for (let y = 0; y <= i; y++) {
        data[i][date] = interestData.data[j][y];
      }
      // console.log('checking the data after each date insert', data);
    }
    i++;
  }
  console.log('result', data);
  return data;
};

// if (interestData.column_names[i] !== 'Date') { //this needs to be changed
