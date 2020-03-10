export const interestDataOrganizer = interestData => {
  console.log('testing interest Pass through', interestData);
  const data = [];
  interestData.column_names.map((name, i) => {
    // if (i > 0) {
      data[i] = { name };
    // }
  });

  // for (let i = 1; i < 13; i++) {
  //   const date = interestData.data[i][0];
  //   data[i][interestData.data[i][0]];
  //   console.log('date', date);
  // }
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
