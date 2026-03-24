//Write your code here

// Declare and initiliaze attendee object
const attendee = {
  id: "T001",
  name: "Alice Smith",
  event: "JavaScript Confrence",
  ticketType: "VIP",
  ticketPrice: 150.00,
};

// Log the attendee's name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Log the ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Update the ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Update the ticket price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Remove the event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Add a checkedIn property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};