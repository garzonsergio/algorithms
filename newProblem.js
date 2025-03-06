
/**
 *
 In this exercise, parse a simple array of appointments, 
 and determine the maximum number of available 30-minute slots in a given day’s schedule.

Assumptions

Appointments already in the schedule can be 30, 60, and 90-minutes long
The professional has fixed hours (09:00 to 17:00)
Appointments can not overlap each other
These are just a few assumptions. Feel free to ask about more assumptions as needed
 */


const apptsByDay = [
  // [
  //   { start: "09:15", duration: 30 }, 
  //   { start: "10:00", duration: 60 }, 
  //   { start: "11:15", duration: 30 }, 
  //   { start: "12:45", duration: 30 }, 
  //   { start: "13:15", duration: 90 }, 
  //   { start: "15:00", duration: 30 }, 
  //   { start: "15:30", duration: 30 }, 
  // ],
  // [
  //   { start: "09:30", duration: 30 },
  //   { start: "11:00", duration: 30 },
  //   { start: "12:30", duration: 30 },
  //   { start: "13:00", duration: 60 },
  //   { start: "14:15", duration: 30 },
  //   { start: "15:00", duration: 60 },
  //   { start: "16:30", duration: 30 },
  // ],
  // [
  //   { start: "09:00", duration: 60 },
  //   { start: "10:00", duration: 30 },
  //   { start: "11:00", duration: 30 },
  //   { start: "11:30", duration: 90 },
  //   { start: "14:00", duration: 30 },
  //   { start: "14:30", duration: 30 },
  // ],
  // [
  //   { start: "10:30", duration: 30 },
  //   { start: "11:00", duration: 60 },
  //   { start: "12:00", duration: 90 },
  //   { start: "15:00", duration: 30 },
  //   { start: "15:30", duration: 30 },
  //   { start: "16:00", duration: 60 },
  // ],
  [
    { start: "10:00", duration: 30 }, // 2
    { start: "10:30", duration: 90 }, // 0
    { start: "12:00", duration: 30 }, // 0 
    { start: "14:30", duration: 30 }, // 4
    { start: "15:00", duration: 60 }, // 0
    { start: "16:30", duration: 30 }, // 1
  ],// 0
];
// 0. Compare the 9:00 with the start time of the first meeting
// Apply the rest of algorithm below

// 1. Determine the end time of meeting
// 2. Compare with the start of next meeting
// 3. If slot is fo 30 minutes add in a variable thirtyMinSlots
// 4. Go to the next meeting and repeat the procedure

// 5. Compare the last meeting end time with 17:00
// Apply the rest of algorithm above

//6. Return thirtyMinSlots

/**
 * @param meeting time in string format
 */
function stringTimeToMin(meeting){
    let splittedInital = meeting.split(":") 
    let minutes = Number(splittedInital[0]) * 60 + Number(splittedInital[1])
    // let minutes = (parseInt(splittedInital[0])*60 + parseInt(splittedInital[1]))

    return minutes
}

function countAvailableSlots({
  availableSlots, 
  endTime, 
  startTime,
  timeWindowInMin
}){
  
  const diff = endTime - startTime
  if(diff >= timeWindowInMin) {
    const slots = Math.floor(diff / timeWindowInMin)
    availableSlots += slots
  } 

  return availableSlots
}


function getAvailableSlots(
  weekSchedule,
  timeWindowInMin
){

  let availableSlots = 0

  for(const day of weekSchedule){
    let startTime = stringTimeToMin("09:00")
    let endTime

    for (const meetingTiming of day) {
      endTime = stringTimeToMin(meetingTiming.start)
      availableSlots = countAvailableSlots({
        availableSlots,endTime, startTime, timeWindowInMin
      })
      startTime = stringTimeToMin(meetingTiming.start) + meetingTiming.duration
    }

    endTime = stringTimeToMin("17:00")
    availableSlots = countAvailableSlots({
      availableSlots,endTime, startTime, timeWindowInMin
    })
  }

  return availableSlots
}

console.log(getAvailableSlots(apptsByDay, 30))



// function countThirtySlots(weekSchedule){

//   let numberOfThirtySlots = 0

//   for(let day of weekSchedule){
  
//     for(let meeting = 0; meeting < day.length-2; meeting++){
    
//       let finalOfMeeting = changeToMinutes(day[meeting]) + day[meeting].duration
//       let startOfMeeting = changeToMinutes(day[meeting+1])

//       if(finalOfMeeting - startOfMeeting === 30){
//           numberOfThirtySlots =+1
//       }

//     }

//   }
//   return numberOfThirtySlots

// }


// console.log(countThirtySlots(apptsByDay))