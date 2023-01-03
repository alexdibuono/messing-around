//////////////////////////////////////////
//              DOM Hooks               //
//////////////////////////////////////////

let addNewButton = document.querySelector('.add-new-button');
let container = document.querySelector('.container');
let addNewForm = document.querySelector('.add-new-form');
let popupWrapper = document.querySelector('.popup-wrapper');
let cancelButton = document.querySelector('.cancel-button');
let emptyClass = document.querySelector('.empty-class');

//////////////////////////////////////////
//              Variables               //
//////////////////////////////////////////

let counter = 0;


//////////////////////////////////////////
//              Functions               //
//////////////////////////////////////////

const addNewFunc = event => {

    if(counter === 0){
        emptyClass.style.display = 'none';
    }

    if(addNewForm.name.value != ''){
        popupWrapper.style.display = 'none';
        container.innerHTML += `<div class="added-list placeholder-${counter}">${addNewForm.name.value}</div>`;
        counter++;
        addNewForm.name.value = '';
    }

}


//////////////////////////////////////////
//           Event Listeners            //
//////////////////////////////////////////

addNewButton.addEventListener('click', () => {

    popupWrapper.style.display = 'block';
    document.getElementById('name').focus();

    document.addEventListener('click', event =>{
        if (event.target.classList.contains('popup-wrapper')){
            popupWrapper.style.display = 'none';
            addNewForm.name.value = '';
        }
    });

});

addNewForm.addEventListener('submit', event => {
    
    event.preventDefault();

    addNewFunc();
    
});

cancelButton.addEventListener('click', () => {

    popupWrapper.style.display = 'none';

});


