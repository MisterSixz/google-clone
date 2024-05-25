const clearbtn = document.getElementById("clear");
const searchbar = document.querySelector('input');
function clearText(){
    searchbar.focus();
    searchbar.value = '';
    clearBTNSHOW();
}

function clearBTNSHOW(){
    if(searchbar.value!=''){
        clearbtn.style.display = 'inline';
    }
    else{
        clearbtn.style.display = 'none';
    }
}

clearbtn.addEventListener('click',clearText);
searchbar.onkeyup = clearBTNSHOW;