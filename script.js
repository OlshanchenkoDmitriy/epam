const selectEl=document.getElementById('select');
const registrationImage = document.getElementById('city-img');

const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');


selectEl.addEventListener('change', function() {


switch(true) {

    case this.value === 'kyiv' : registrationImage.src = "./Assets/kyiv.jpg";
    break;

    case this.value === 'lviv' : registrationImage.src = "./Assets/lviv.jpg";
    break;

    case this.value === 'odesa' : registrationImage.src = "./Assets/odessa.jpg";
    break;

     case this.value === 'warsaw' : registrationImage.src = "./Assets/warsaw.jpeg";
    break;
    
    case this.value === 'berlin' : registrationImage.src = "./Assets/berlin.jpg";
    break;

    case this.value === 'paris' : registrationImage.src = "./Assets/paris.jpg";
    break;

    default: setKyiv(this); 
}

})

 

 