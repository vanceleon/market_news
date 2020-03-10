
export const interestDataOrganizer = interestData => {
  console.log('testing interest Pass through', interestData);
  const data = []; 
  interestData.column_names.map((name, i) => {
    if (i > 0) {
      data[i] = { name };
    }
  });

  interestData.data.map((date, i) => {
    // console.log('each date',date[0])
    date = date[0];
    data[i][date] = {test:'testing'}
    // if (i === 0) {
    //   data[i] = {date}
    //   console.log(data)
    // }else {

    // }
  })
  
  console.log('insert dates', data);
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
