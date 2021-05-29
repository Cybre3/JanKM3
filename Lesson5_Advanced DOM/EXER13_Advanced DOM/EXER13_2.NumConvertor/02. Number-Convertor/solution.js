function solve() {
        const selectOptions = document.getElementById('selectMenuTo');  
        
        const ceateOption1 = document.createElement('option');
        selectOptions.appendChild(ceateOption1);
        
        const option1 = selectOptions.firstElementChild.nextElementSibling;
        option1.setAttribute('value', 'binary');
        option1.innerText = 'Binary';

        const ceateOption2 = document.createElement('option');
        selectOptions.appendChild(ceateOption2);
    
        const option2 = selectOptions.lastElementChild;
        option2.setAttribute('value', 'hexadecimal');
        option2.innerText = 'Hexadecimal';
    
        const button = document.getElementById('selectMenuTo').nextElementSibling;
        const resultBox = document.getElementById('result');
    
        button.addEventListener('click', () => {
            const numberInput = document.getElementById('input').value;
            const selectedOption = selectOptions.value;
            if (selectedOption === 'binary') {
                resultBox.setAttribute('value', Number(numberInput).toString(2));
            } else if (selectedOption === 'hexadecimal') {
                resultBox.setAttribute('value', Number(numberInput).toString(16).toUpperCase());
            }
        });
}