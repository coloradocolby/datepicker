import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDatepicker } from "../context/datepicker.context";

export const Datepicker = ({
  className = "",
  initialDate = new Date(),
  onChange,
  children,
}) => {
  const { selectedDate } = useDatepicker();

  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);
  return <div className={className}>{children}</div>;
};

// import React, { useEffect, useState } from "react";
// import moment from "moment";

// export const Datepicker = ({ initialDate = new Date() }) => {
//   const [date, setDate] = useState(initialDate);
//   const [dayOffset, setDayOffset] = useState<number>();
//   const [selectedDay, setSelectedDay] = useState<any>(null);

//   useEffect(() => {
//     setDayOffset(moment(date).startOf("month").isoWeekday());
//   }, [date]);

//   return (
//     <div className="flex flex-col items-center w-full p-3 text-sm bg-gray-200 rounded-md shadow-md">
//       <div className="flex justify-between w-full my-1">
//         <button
//           className="text-xs m-0.5 bg-gray-300 rounded px-2 py-0.5 mt-3"
//           onClick={() => setDate(moment(date).subtract(1, "month").toDate())}
//         >
//           ←
//         </button>
//         <p className="font-bold">{moment(date).format("MMMM YYYY")}</p>

//         <button
//           className="text-xs m-0.5 bg-gray-300 rounded px-2 py-0.5 mt-3"
//           onClick={() => setDate(moment(date).add(1, "month").toDate())}
//         >
//           →
//         </button>
//       </div>
//       <div className="grid w-full grid-cols-7 my-2 font-medium">
//         <div className="text-center">Sun</div>
//         <div className="text-center">Mon</div>
//         <div className="text-center">Tue</div>
//         <div className="text-center">Wed</div>
//         <div className="text-center">Thu</div>
//         <div className="text-center">Fri</div>
//         <div className="text-center">Sat</div>
//       </div>
//       <div className="grid w-full grid-cols-7">
//         {dayOffset &&
//           dayOffset !== 7 &&
//           new Array(dayOffset)
//             .fill(null)
//             .map((x, idx) => (
//               <div className="flex items-center justify-center p-2"></div>
//             ))}
//         {new Array(moment(date).daysInMonth()).fill(null).map((x, idx) => (
//           <div
//             className="flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-gray-300"
//             onClick={() => {
//               console.log(moment(date).day(idx + 1));
//               setSelectedDay(
//                 moment(date)
//                   .startOf("month")
//                   .add(idx, "days")
//                   .format("MM/DD/YYYY")
//               );
//             }}
//           >
//             {idx + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
