const message = prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete message \n 0: Quit')

// alert('Your input is: ' + message)
// const output = document.getElementById("output")
// output.innerHTML = 'Your message is ' + message

const messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
]

function list() {


    for (var i = 0; i < messages.length; i++) {
        document.write((i + 1) + ":" + messages[i] + "<br/>")
    }

}

if (message == 1) {
    const output = document.getElementById("output")
    output.innerHTML = "The current messages are: </br>" + list().innerHTML;
}