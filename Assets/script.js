// * Display the current day at the top of the calender when a user opens the planner.
$(document).ready(function (){
  
    //defininf the main container and current day elements as JQuery objects
    var mainContainer = $('#container');
    var currentDay = $('#currentDay');

    //create an object representing today's date and time
    var today = moment().format('dddd, MMMM Do');

    //Want to loop over the hours of the day from 9-17h
    for(let i=9; i < 18; i++) {

        //need to convert the hour to an integer and store it in a variable
        var timeI = parseInt((mnoment(i, ['HH']).format ('H')));

        
    }


    
})
 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page