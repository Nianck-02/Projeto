document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        let userMessage = userInput.value.trim();
        if (userMessage === '') return;

        displayMessage(userMessage, 'user');
        userInput.value = '';
        sendBtn.disabled = true; // Desativa o botão enquanto processa

        setTimeout(() => {
            let botResponse = generateBotResponse(userMessage);
            displayMessage(botResponse, 'bot');
            sendBtn.disabled = false; // Reativa o botão após resposta
        }, 1000);
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        smoothScrollToBottom();
    }

    function smoothScrollToBottom() {
        chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: 'smooth'
        });
    }

    function generateBotResponse(userMessage) {
        const responses = [
            "Sem funcionamento no momento."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
});
