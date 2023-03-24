// * Display the current day at the top of the calender when a user opens the planner.
$(document).ready(function (){
  
    //defininf the main container and current day elements as JQuery objects
    var mainContainer = $('#container');
    var currentDay = $('#currentDay');

    //create an object representing today's date and time
    var today = moment().format('dddd, MMMM Do');

    //console logging to understand what the problem is
    console.log(today);

    //Want to loop over the hours of the day from 9-17h
    for(let i=9; i < 18; i++) {

        //need to convert the hour to an integer and store it in a variable
        var timeI = parseInt((moment(i, ['HH']).format ('H')));

        console.log(timeI);

        //create a div to hold the time slots, an text box and a submit button

        var table = $('<div>');

        //another div for the time 
   
        var div =  $('<div>').addClass("hour");

        //para element for time label 
        var timeText = $("<p>").text(moment(i, ["HH"]).format ("h A"));
        div.append(timeText);

        //input element for users info for each time slot
        var userInfo = $("<input>").val(localStorage.getItem(`ButtonClick${i-9}`));


        console.log(userInfo);

        // * Present timeblocks for standard business hours when the user scrolls down.
        
        //class for the input element based on time

        if (timeI < today) {
            userInfo.addClass("past userinfo");
        } else if (timeI === today) {
            userInfo.addClass("present userinfo");
        } else{
            userInfo.addClass("future userinfo");
        }
        
        console.log(userInfo);
        //need to create a button for users to save info
        const submitButton =$("<button>").addClass("saveBtn").text("Add").attr("buttonnum", i-9);

        console.log(submitButton);
        //nothing showing up so need to append the elements to the table and append the table to the main container

        table.append(div, userInfo, submitButton);
        mainContainer.append(table);

        table.addClass('row');

        //appending Div to the main container
        mainContainer.append(table);

        userInfo.val(localStorage.getItem('ButtonClick'+(i-1)));
    }


    
});
 
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page