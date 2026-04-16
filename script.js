inputBtnTwo.addEventListener('click', storeDataTwice);

function clearAlreadyStoredData(){
    const deleteIcon = document.getElementsByClassName('newLiClassName');
    deleteIcon.remove();
}

clearStoredData.addEventListener('click', clearAlreadyStoredData)