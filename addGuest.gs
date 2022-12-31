// Adds the custom menu to the active spreadsheet.
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [
    {
      name: "add guest to an event",
      functionName: "addAttendeeToEvent"
    }
  ];
  spreadsheet.addMenu('Setting', menuEntries);
}

function enterEmailId() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt("Please enter the Id of the guest");
  
  //Get the button that the user pressed.
  var button = result.getSelectedButton();
  
  if (button === ui.Button.OK) {
    return result.getResponseText()
    // Logger.log("The user clicked the [OK] button.");
    // Logger.log(result.getResponseText());
  } else if (button === ui.Button.CLOSE) {
    return Logger.log("Enter Email ID"); 
  }
    
}


// add user to an event

function addAttendeeToEvent() {
  // Replace the below values with your own
  let attendeeEmail = enterEmailId(); // Email address of the person we need to add
  let calendarId = 'radhika.rajoriya@madgicaltechdom.com';   // ID of calendar containing event
  let eventId = '5pkiqkjrs1a6ohvbdg3ipu99gd_R20221212T033000@google.com';  // ID of event instance

  let calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
    }
  let event = calendar.getEventById(eventId);
  if (event === null) {
     // Event not found
    console.log('Event not found', eventId);
    return;
    }
  
  event.addGuest(attendeeEmail);
 
}
