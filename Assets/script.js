// * Display the current day at the top of the calender when a user opens the planner.
$(document).ready(function (){
  
    //defininf the main container and current day elements as JQuery objects
    var mainContainer = $('#container');
    var currentDay = $('#currentDay');

    //create an object representing today's date and time
    var today = moment();

    //console logging to understand what the problem is
    console.log(today.format('dddd,MMMM Do'));

    var currentHour = parseInt(today.format('H'));

    currentDay.text(today.format('dddd, MMMM Do'));

    var table = $('<div>').addClass('time-block');





        //Want to loop over the hours of the day from 9-17h
        for(let i=9; i < 18; i++) {

             var row = $('<div>').addClass('row');
            //convert the hour to a moment object and store it in a var 
            var timeMoment = moment(i, ['HH']); 
        

            console.log(timeMoment.format('h A'));

            //create a div to hold the time slots, an text box and a submit button
            var div =  $('<div>').addClass("hour");
            //para element for time label 
            var timeText = $("<p>").text(timeMoment.format('h A'));
            div.append(timeText);
            //input element for users info for each time slot
            var userInfo = $("<input>").val(localStorage.getItem(`ButtonClick${i-9}`));
            //need to create a button for users to save info
            var submitButton =$("<button>").addClass("saveBtn").text("Add").attr("buttonnum", i-9);


            console.log(userInfo);

            // * Present timeblocks for standard business hours when the user scrolls down.
            
            //class for the input element based on time

            if (timeMoment < today) {
                userInfo.addClass("past userinfo");
            } else if (timeMoment === today) {
                userInfo.addClass("present userinfo");
            } else{
                userInfo.addClass("future userinfo");
            }
            
            console.log(userInfo);

            console.log(submitButton);
           
            // append timeText, userInfo and submitButton to the div
            div.append(timeText, userInfo, submitButton);
            row.append(div);
            table.append(row);

            userInfo.val(localStorage.getItem('ButtonClick'+(i-1)));

            //appending Div to the main container
        }
            mainContainer.append(table);

        


        // * Save the event in local storage when the save button is clicked in that timeblock.
        $('.saveBtn').click(function(event){
            const buttonPressed = this.getAttribute("buttonnum");

            const relativeInput = $('#container').children().eq(buttonPressed).children().eq(1).val();


            // * Persist events between refreshes of a page
            localStorage.setItem(`ButtonClick${buttonPressed}`, relativeInput);
        });
    });
 
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

