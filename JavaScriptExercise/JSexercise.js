let carColor = 'Blue';

const car = (function(){
    return {
        changeColorToRed: function() {
            carColor = 'Red';
            return carColor;
        },
        changeColorToBlack: function() {
            carColor = 'Black';
            return carColor;
        }
    }
})(); 

console.log(car.changeColorToRed());
console.log(car.changeColorToBlack());
// ==================================================
async function showUser(){
    const response = await fetch('https://jsonplaceholder.typicode.come/user')
    
    const users = await response.json();

    console.log(users);
}

showUser();
// show all users in Jason format
// ==================================================

function showInfo() {
    const carType = "Honda";

    // A closure
    function showName() {
        return carType;
    }
    return showName();
} 

console.log(showInfo());

// =============call back ============================

function pressButton(callback) {
    console.log.toString('Button is pressed');
    callback();
};

function fireUpEngines() {
    console.log('Fire up engines')
}

pressButton(fireUpEngines);






