function addItem() {
    const list = document.getElementById("items");
    const inputText = document.getElementById("newText");
    let newLi = document.createElement("li");
    let newAnchor = document.createElement("a");
    newAnchor.textContent = " [delete]";

    if(inputText.value === '') {
        return;
    }

    newLi.textContent = inputText.value;
    newLi.appendChild(newAnchor);
    list.appendChild(newLi);
    inputText.value = "";

    list.addEventListener('click', deleteItem);    
}

function deleteItem(e) {
    if(e.target.tagName === 'A'){
        let list = e.target.parentNode.parentNode;
        let currentLi = e.target.parentNode;
        list.removeChild(currentLi);
    }
}


// FROM BRYAN
// function addItem() {
//     //access the list that you need to append to.
//     let list = document.getElementById('items');
//     //console.log(list);gets the ul and all the li inside of it
  
//     //get the text input field so that we can append it
//     let newItem = document.getElementById('newText');
//     //console.log(newItem);
  
//     //create the delete button
//     let delLiBtn = document.createElement('button');
//     delLiBtn.innerHTML = 'Delete';
//     delLiBtn.addEventListener('click', function(){
//         list.removeChild(newLi);
//     });

//     //create a new li item and then set it's value so we can append it to the ul 
//     let newLi = document.createElement('li');
//     newLi.textContent = newItem.value;
//     newLi.appendChild(delLiBtn);
//     //console.log(newLi);
    
//     //append to the ul and then clear the input text field
//     list.appendChild(newLi);
//     newItem.value = '';
//   }


// FROM LISA
//   function addItem() {
//     const items = document.getElementById('items');
//     const value = document.getElementById('newTextItem').value;
//     let newItems = document.createElement('li');
//     newItems.innerText = value + ' ';
//     let deleteLink = document.createElement('a');
//     deleteLink.innerText = '[Delete]';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', function(element) {
//         element.preventDefault();
//         this.parentNode.parentNode.removeChild(this.parentNode);
//     });
//     newItems.appendChild(deleteLink);
//     items.appendChild(newItems);
//     document.getElementById('newTextItem').value = '';
// }