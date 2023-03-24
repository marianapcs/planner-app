// * Display the current day at the top of the calender when a user opens the planner.
$(document).ready(function (){
  
    //defininf the main container and current day elements as JQuery objects
    var mainContainer = $('.container');
    var currentDay = $('#currentDay');

    //create an object representing today's date and time
    var today = moment()

    //console logging to understand what the problem is
    console.log(today.format('dddd,MMMM Do'))

    var currentHour = parseInt(today.format('H'))

    currentDay.text(moment().format('dddd, MMMM Do'))

    
    //Want to loop over the hours of the day from 9-17h
    for(i=9; i < 18; i++) {
        
        //convert the hour to a moment object and store it in a var 
        var timeMoment = parseInt((moment(i, ['HH']).format("H"))); 
        
        
        // console.log(timeMoment.format('h A'));
        
        var table = $("<div>");

        var hours = $("<div>");
        hours.addClass("hour");
        var hoursText = $("<p>");
       


        hoursText.text(moment(i, ['H']).format('h A'));
        hoursText.append(hoursText);

        var userInfo = $("<input>");
        userInfo.val(localStorage.getItem(`ButtonClick${i-9}`))


        if (timeMoment < currentHour) {
            userInfo.addClass("past userinfo");
        } else if (timeMoment === currentHour) {
            userInfo.addClass("present userinfo");
        } else{
            userInfo.addClass("future userinfo");
        }
        
        console.log(userInfo);

        console.log(submitButton);

        //need to create a button for users to save info
        var submitButton =$("<button>");
        submitButton.addClass("saveBtn");
        submitButton.text("Add");
       $(submitButton).attr("buttonnum", i-9);
        
         // append timeText, userInfo and submitButton to the div
         table.append(hours);
         table.append(userInfo);
         table.append(submitButton);

         
         table.addClass('row');
         //  row.append(div);
         //appending Div to the main container
         mainContainer.append(table);

         
        }
        
        userInfo.val(localStorage.getItem('ButtonClick'+i-1));

            //  var row = $('<div>').addClass('row');

            //create a div to hold the time slots, an text box and a submit button
        
            //para element for time label 
            //input element for users info for each time slot

            // * Present timeblocks for standard business hours when the user scrolls down.
            
            //class for the input element based on time

        // * Save the event in local storage when the save button is clicked in that timeblock.
        $('.saveBtn').click(function(event){
            const buttonPressed = this.getAttribute("buttonnum");

            const relativeInput = $('.container').children().eq(buttonPressed).children().eq(1).val();


            // * Persist events between refreshes of a page
            localStorage.setItem('ButtonClick' + buttonPressed, relativeInput)
        });
    });
 
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

