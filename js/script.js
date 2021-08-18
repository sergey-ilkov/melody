const counter = document.querySelector('.counter');
const homeImage = document.querySelector('.home-image');
let defoultFloor = homeImage.querySelector(`path[data="${counter.innerHTML}"]`);
showFloor();

homeImage.addEventListener('mouseover', (event) => {
    let floorNumber = event.target.getAttribute('data');
    let list = homeImage.querySelectorAll('path');
    list.forEach((element) => {
        element.style.opacity = '0';
    });
    event.target.style.opacity = '1';
    if (floorNumber !== null) {
        counter.innerHTML = floorNumber;
    }
    showFloor();
});
const counterUp = document.querySelector('.counter-up');
counterUp.addEventListener('click', () => {
    let floor = counter.innerHTML;
    let floorNumber = Number(counter.innerHTML);
    if (floorNumber < 18) {
        floorNumber = floorNumber + 1;
        floorNumber > 9
            ? floorNumber
            : (floorNumber = '0' + String(floorNumber));
        counter.innerHTML = floorNumber;

        chooseFloor(floor, floorNumber);
    }
});
const counterDown = document.querySelector('.counter-down');
counterDown.addEventListener('click', () => {
    let floor = counter.innerHTML;
    let floorNumber = Number(counter.innerHTML);
    if (floorNumber > 2) {
        floorNumber = floorNumber - 1;
        floorNumber > 9
            ? floorNumber
            : (floorNumber = '0' + String(floorNumber));
        counter.innerHTML = floorNumber;

        chooseFloor(floor, floorNumber);
    }
});
function chooseFloor(floor, floorNumber) {
    let hideFloor = homeImage.querySelector(`path[data="${floor}"]`);
    hideFloor.style.opacity = '0';
    let showFloor = homeImage.querySelector(`path[data="${floorNumber}"]`);
    showFloor.style.opacity = '1';
}

function showFloor() {
    defoultFloor = homeImage.querySelector(`path[data="${counter.innerHTML}"]`);
    defoultFloor.style.opacity = '1';
}
