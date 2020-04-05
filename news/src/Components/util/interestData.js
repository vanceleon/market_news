export const interestDataOrganizer = interestData => {
  const data = [];
  let i = 0;
  while (i < interestData.column_names.length) {
    data[i] = {};
    data[i].name = interestData.column_names[i];
    for (let j = 0; j < interestData.data.length && j < 90; j++) {
      let date = interestData.data[j][0];
      //y <= i stops the iteration and prevents overwriting
      for (let y = 0; y <= i; y++) {
        //creating a unquie date at that location of the array
        data[i][date] = interestData.data[j][y];
        // data[i].date = interestData.data[j][y];
      }
    }
    i++;
  }
  let filteredData = []
  //this is to prevent string data from prohibiting the graph to render
  for(let i = 1;i < data.length; i++){
    filteredData.push(data[i]);
  }
  return filteredData;
};
