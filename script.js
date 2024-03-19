
  //I want to make a function that uses an event listener to save the user input in local storage using the saveBtn class
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, description)
    //I want to use the console.log to check if the save button is working
    console.log(time, description);
    //I want an alert to appear when the user saves the input
    alert("Your input has been saved!");
  
  });

  //I want to make a function that uses an event listener to clear user input in local storage using the clearBtn class
  $(".clearBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val("");
    localStorage.setItem(time, description)
    //I want to use the console.log to check if the clear button is working
    console.log(time, description);
    //I want an alert to appear when the user clears the input
    alert("Your input has been cleared!");
  
  });

  //I want to make a function that uses moment.js to update the time blocks to show the current time by
  // changing the color of the time blocks
  function hourUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      //This code block applies the past class when the current hour is greater than the block hour      
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        console.log("past");
        //This code block applies the present class when the current hour is equal to the block hour
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        console.log("present");
        //This code block applies the future class when the current hour is less than the block hour
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log("future");
      }
    });
  }
  
 //This code block sets the interval for the hourUpdater function to run every 15 seconds
 //This code block also sets the current date to display in the header of the page
 //This code block also sets the user input to display in the time blocks

  var interval = setInterval(hourUpdater, 15000);
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
       
      
        hourUpdater(); 

     
