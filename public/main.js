// Initialize variables
var $window = $(window);
var $messages = $('#messages'); // Messages area
var $inputMessage = $('#inputMessage'); // Input message input box

var socket = io();

// Adds the visual chat message to the message list
function addMessage (message) {
  // Creates the message components
  var $usernameDiv = $('<span class="username"/>')
    .text("Nobody")
  var $messageBodyDiv = $('<span class="messageBody">')
    .text(message);

  // Creates the message item
  var $messageDiv = $('<li class="message"/>')
    .text(' says ')
    .prepend($usernameDiv)
    .append($messageBodyDiv);

  // Puts the message on the chat area
  $messages.append($messageDiv);

  // Scrolls the page.
  $messages[0].scrollTop = $messages[0].scrollHeight;
}

// Prevents input from having injected markup
function cleanInput (input) {
  return $('<div/>').text(input).text();
}

// Keyboard events

$window.keydown(function (event) {
  // Auto-focus the current input when a key is typed
  if (!(event.ctrlKey || event.metaKey || event.altKey)) {
    $inputMessage.focus();
  }

  // When the client hits ENTER on their keyboard
  if (event.which === 13) {
    // Get the current message
    var message = cleanInput($inputMessage.val())

    // Reset the input
    $inputMessage.val('')

    // Tell server to execute 'new message' and send along the message
    if (message) {
      socket.emit('new message', message);
    }
  }
});

// Socket events

// Whenever the server emits 'new message', update the chat body
socket.on('new message', function (message) {
  addMessage(message);
});
