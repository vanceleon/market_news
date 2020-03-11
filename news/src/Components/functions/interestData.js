export const interestDataOrganizer = interestData => {
  console.log('testing interest Pass through', interestData);
  const data = [];

  let i = 0;
  while (i < interestData.column_names.length) {
    if (i !== 0) {
      // console.log(interestData.column_names[i]);
      let j = 1;
      data[i - j] = {};
      data[i - j].name = interestData.column_names[i];

      console.log('insertion to data', data);
      let date = interestData.data[0][0];
      for (let x = 1; x < interestData.data.length; x++) {
        data[i - j][date] = interestData.data[x][x];
      }
      console.log('after date insert', data);
    }
    i++;
  }
  console.log('result', data);

  // interestData.data.map((interestRates, i) => {
  //   console.log('array of ', interestRates);
  //   for (let x = 0; x < interestRates.length; x++) {
  //     // console.log("date", date)
  //     if (x > 0) {
  //       // data[i - j][date] = interestRates[x];
  //     }
  //   }
  // });
  // interestData.column_names.map((name, i) => {
  // need to loop two more times for 20 and 30 year yield
  // need to assign date and value to each ytm date
  // explore looping through each data point and assign the values then dataObj[date] = looped through data points.
  // console.log("what names", name,"at position", i)
  // for(let j = 0; j < interestData.data[j][j].length; j++){
  //   let date = interestData.data[i][j]
  //   console.log(date)
  //   if (i > 0) {
  //     data[i] = { name, [date]: interestData.data[i][j] };
  //   }
  //   // if(j === 0){
  //     // console.log(interestData.data[j])
  //     console.log('what is the data obj here',data)

  //   // }
  // }
  // });

  // console.log('insert dates', data);
  // // interestData.data.slice(0,10).map((daily,i) => {
  // //   // data[i] = daily
  // //   data.daily[0]

  // //   console.log(daily)
  // //   // return daily.map(rate => {
  // //   //   return
  // //   // })
  // // })
  // console.log('name column ', data);
  // return data; //array of objects
};

// daily = date from example (uv, pv, amt)
// uv = interest rate
//         {interestRateData.data.slice(0, 10).map(daily => {
//           return (
//             <tr>
//               {daily.map(rate => {
//                 return <td>{rate}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   </div>
// </Container> */}
