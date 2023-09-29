
//toggle darkmode
const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');

//event listener for dark mode toggle
    darkModeToggle.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode');
    //Toggle between "Dark Mode and Light Mode" text
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
})


    const userMessageInput = document.getElementById('user-message');
    const chatContainer = document.querySelector('.chat');

    function sendMessage() {
        const messageText = userMessageInput.value;

        //check if msg is empty
        if(messageText.trim() !== '') {
            //create a new message element
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message', 'user');
            messageElement.textContent = messageText;

            //append the message to the chat container
            chatContainer.appendChild(messageElement);

            //clear the input field
            userMessageInput.value = '';

            //scroll to the latest message
            chatContainer.scrollTop = chatContainer.scrollHeight;

            //ai responses
        }
    }

    //event listener
    document.querySelector('button').addEventListener('click', sendMessage);

    //event listener for sending a message when enter key is pressed
   userMessageInput.addEventListener('keypress', (event)=> {
       if(event.key === 'Enter') {
           sendMessage();
       }
   })
