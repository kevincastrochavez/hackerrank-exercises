/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

All input times are valid
Sample Input 0
07:05:45PM

Sample Output 0
19:05:45
*/

function timeConversion(s) {
  // Write your code here
  const timeOfTheDay = s.split(':');
  const letterTime = timeOfTheDay[2].split('')[2];
  const minutes = timeOfTheDay[1];
  const seconds = [
    ...timeOfTheDay[2].split('')[0],
    ...timeOfTheDay[2].split('')[1],
  ].join('');
  let hour;

  if (letterTime === 'P') {
    if (timeOfTheDay[0] === '12') {
      hour = '12';
    } else {
      hour = Number(timeOfTheDay[0]) + 12;
    }
  }

  if (letterTime === 'A') {
    if (timeOfTheDay[0] === '12') {
      hour = '00';
    } else {
      hour = timeOfTheDay[0];
    }
  }

  return `${hour}:${minutes}:${seconds}`;
}

timeConversion('12:05:45PM');
