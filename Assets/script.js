// * Display the current day at the top of the calender when a user opens the planner.
$(document).ready(function (){
    var timeArr = ["9 A.M.","10 A.M.","11 A.M.","12 P.M.","1 P.M.","2 P.M.","3 P.M.","4 P.M.","5 P.M."];

    var currentHour = moment ().format("dddd, MMMM Do");

    $("#currentDay").text(now);

    console.log(currentHour);
})
 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page