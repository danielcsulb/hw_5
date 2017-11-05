// var userIn = message

// while (userIn != 0) {
var userchoice = false;

do {
    const message = prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete message \n 0: Quit');
    var userIn = message;


    // while (message != 0) {
    // alert('Your input is: ' + message)
    // const output = document.getElementById("output")
    // output.innerHTML = 'Your message is ' + message
    // while (message != 0) {
    const messages = [
        'message 01',
        'message 02',
        'message 03',
        'message 04',
        'message 05',
    ]


    function list() {
        for (var i = 0; i < messages.length; i++) {
            document.write((i + 1) + ": " + messages[i] + "<br/>")
        }

    }

    // // while (userIn > 0 && userIn <= 3) {
    // //     // const message = prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete message \n 0: Quit');


    if (userIn == 1) {
        const output = document.getElementById("output")
        output.innerHTML = 'The current messages are: ';
        output2.innerHTML = list().innerHTML;
        userchoice = true;
        // const message = prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete message \n 0: Quit');
    }

    // const message = prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete message \n 0: Quit');

    if (userIn == 2) {
        const message2 = prompt("Enter a new message: ");

        messages.push(message2);
        const output = document.getElementById("output")
        output.innerHTML = 'The current messages are: ';
        output2.innerHTML = list().innerHTML;
        // const message = prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete message \n 0: Quit'); 
        userchoice = true;

    }

    if (userIn == 3) {
        const message3 = prompt("Enter the message index between 1 and " + messages.length);

        var m = parseInt(message3) - 1;

        messages.splice(m, 1)
        const output = document.getElementById("output")
        output.innerHTML = 'The current messages are: ';
        output2.innerHTML = list().innerHTML;
        userchoice = true;

    }

    if (userIn == 0) {
        const output = document.getElementById("output")
        output.innerHTML = 'Good Bye';
    }

    if (userIn === "") {
        const output = document.getElementById("output")
        output.innerHTML = 'Please refresh and select correct command.'
    }

    if (isNaN(userIn)) {
        const output = document.getElementById("output")
        output.innerHTML = 'Please refresh and select correct command.'
    }

} while (userchoice == true);
// while (userchoice > 0 && userchoice <= 3);




// }