function handleSubmit(event) {
  event.preventDefault(); // stops page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Name must contain only letters and spaces.");
    return false;
  }

  const emailField = document.getElementById("email");
  if (!emailField.checkValidity()) {
    alert("Please enter a valid email address.");
    return false;
  }

  document.getElementById("contactForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
  return false; // critical: prevents redirect
}

  
  function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
  }

  const chatInput = document.getElementById('chat-input');
  const messages = document.getElementById('messages');

  chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
      const userMessage = chatInput.value.trim();

      // Add user's message
      const userPara = document.createElement('p');
      userPara.innerHTML = `<strong>You:</strong> ${userMessage}`;
      messages.appendChild(userPara);

      // Add a simple bot reply (can be replaced with real logic)
      const botReply = document.createElement('p');
      botReply.innerHTML = `<strong>Bot:</strong> Thanks for reaching out! We'll get back soon.`;
      messages.appendChild(botReply);

      chatInput.value = '';
      messages.scrollTop = messages.scrollHeight;
    }
  });

  


