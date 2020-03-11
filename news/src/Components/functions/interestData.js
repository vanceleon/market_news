export const interestDataOrganizer = interestData => {
  console.log('testing interest Pass through', interestData);
  const data = [];

  let i = 0;
  // for (let i = 0; i < interestData.data.length; i++) {
  //   console.log(interestData.data[i][0])
  // }
  while (i < interestData.column_names.length) {
    // console.log('before if',typeof(interestData.column_names[i]))

    // console.log(interestData.column_names[i]);
    data[i] = {};
    data[i].name = interestData.column_names[i];
    console.log('name insertion', data);
    // console.log('insertion to data', data);
    console.log('i', i, interestData.data[i]);
    // let date = interestData.data[i - 1][0];
    // date = date[0]
    for (let j = 0; j < interestData.data.length; j++) {
      let date = interestData.data[j][0];
      // console.log('date', date);
      for (let y = 0; y < interestData.data[j].length; y++) {
        console.log('y', interestData.data[j][y]);
        // let monthIterator = i
        data[i][date] = interestData.data[j][y]
        // monthIterator++
      }
      // console.log()
    }
    // console.log('after date insert', data);
    // }
    i++;
  }
  console.log('result', data);
};

// if (interestData.column_names[i] !== 'Date') { //this needs to be changed
