function addItem() {
  const newItemText = document.getElementById('newItemText');
  const newItemValue = document.getElementById('newItemValue');
  const dropDownMenu = document.getElementById('menu');
  const option = document.createElement('option');
  option.value = newItemValue.value;
  option.textContent = newItemText.value;
  dropDownMenu.appendChild(option);

  newItemText.value = '';  
  newItemValue.value = ''; 
}
