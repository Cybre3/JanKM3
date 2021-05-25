function solve() {
   let chatBox = document.getElementById('chat_messages');
   const textBox = document.getElementById('chat_input');
   const sendButton = document.getElementById('send');
   
   sendButton.addEventListener('click', function() {
      console.log(textBox.value);
      
      if(textBox.value === '') {
         return;
      }

      let myDiv = document.createElement('div');

      myDiv.setAttribute('class', 'message my-message');
      myDiv.textContent = textBox.value;
      chatBox.appendChild(myDiv);

      textBox.value = '';
   });   
}


