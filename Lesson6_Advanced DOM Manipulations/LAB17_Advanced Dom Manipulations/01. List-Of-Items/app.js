function addItem() {
    const list = document.getElementById("items");
    const inputText = document.getElementById("newItemText");
    let newLi = document.createElement('li');
    newLi.textContent = inputText.value;
    list.appendChild(newLi);
    inputText.value= '';
}
