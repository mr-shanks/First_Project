const section = document.getElementById('section');
const changeDomStyle = document.getElementById('changeDomStyle');
const inputField = document.getElementById('inputField');
const inputDataSection = document.getElementById('inputDataSection');
const inputBtn = document.getElementById('inputBtn');
const inputBtnTwo = document.getElementById('inputBtnTwo');
const clearStoredData = document.getElementById('clearStoredData');




changeDomStyle.addEventListener('click', () => {

    section.classList.toggle('sectionStyleChange');
    changeDomStyle.classList.toggle('buttonStylesChange');

});

    const newLi = document.createElement('p');

    newLi.className = 'newLiClassName' ;


function storeData() {

    const inputedData = inputField.value;

    newLi.textContent = `${inputedData}`;

    inputDataSection.appendChild(newLi);

}

inputBtn.addEventListener('click', storeData);

function storeDataTwice() {
    
    const inputedData = inputField.value;

    newLi.textContent = `${inputedData}`;

    const newDoubleLi = newLi.cloneNode(true)

    inputDataSection.append(newLi, newDoubleLi)
}

inputBtnTwo.addEventListener('click', storeDataTwice);

function clearAlreadyStoredData(){
    const deleteIcon = document.getElementsByClassName('newLiClassName');
    deleteIcon.remove();
}

clearStoredData.addEventListener('click', clearAlreadyStoredData)