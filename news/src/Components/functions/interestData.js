export const interestDataOrganizer = interestData => {
  // console.log('testing interest Pass through', interestData);
  const data = [];

  let i = 0;

  while (i < interestData.column_names.length) {
    data[i] = {};
    data[i].name = interestData.column_names[i];
    // console.log('name insertion', data);
    // console.log('i', i, interestData.data[i]);

    for (let j = 0; j < interestData.data.length; j++) {
      let date = interestData.data[j][0];

      for (let y = 0; y < interestData.data[j].length; y++) {
        // console.log('y', interestData.data[j][y]);
        // let monthIterator = i
        // console.log('adding to obj', data[i][date]);
        data[i][date] = interestData.data[j][y];
      }
    }
    i++;
  }
  console.log('result', data);
  return data
};

// if (interestData.column_names[i] !== 'Date') { //this needs to be changed
