var button1 = document.getElementById('toggleButton');
var button2 = document.getElementById('toggleButton2');
var button3 = document.getElementById('toggleButton3');
var button4 = document.getElementById('toggleButton4');
var text = document.getElementById('contai2');
var error = document.getElementById('error');

document.getElementById('date-box').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAndDisplayResult();
});

function calculateAndDisplayResult() {
    var birthday = new Date(document.getElementById('birthday').value);
    birthday.setHours(12, 0, 0, 0);
    var today = new Date();
    var differenceInTime = today.getTime() - birthday.getTime();
    var differenceInTime = today.getTime() - birthday.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    var differenceInHours = differenceInTime / (1000 * 3600);
    var differenceInMins = differenceInTime / (1000 * 60);
    var differenceInSecs = differenceInTime / 1000;
    button1.style.opacity = '1';
    button3.style.display = 'flex';
    button4.style.display = 'flex';
    text.style.opacity = '1';
    document.getElementById('msg').innerText = 'You have lived for';
    if (differenceInTime < 0) {
        var err = 9;
        var displayElement = document.getElementById('result');
        var intervalId = setInterval(function() {
            err = err * 10 + 9;
            displayElement.innerText = err + ' Days, ' + err + ' Hours, ' + err + ' Minutes, ' + err + ' Seconds.'; 
        }, 200);
    } else {
        if (button1.style.display == "flex") {
            document.getElementById('result').innerText = Math.floor(differenceInDays) + ' Days, ' + Math.floor(differenceInHours) + ' Hours, ' + Math.floor(differenceInMins) + ' Minutes, ' + Math.floor(differenceInSecs) + ' Seconds.';
        } else {
            document.getElementById('result').innerText = differenceInDays + ' Days, ' + differenceInHours + ' Hours, ' + differenceInMins + ' Minutes, ' + differenceInSecs + ' Seconds.'; 
        }
    }
}

var button = document.getElementById("toggleButton");
button.addEventListener('click', function(event) {
    button1.style.display = 'none';
    button2.style.display = 'flex';
    calculateAndDisplayResult()
});
var button = document.getElementById("toggleButton2");
button.addEventListener('click', function(event) {
    button1.style.display = 'flex';
    button2.style.display = 'none';
    calculateAndDisplayResult()
});
var button = document.getElementById("toggleButton3");
var isVisible = false; 

button.addEventListener('click', function(event) {
    if (isVisible) {
        error.style.opacity = '0'; 
    } else {
        error.style.opacity = '1'; 
    }
    isVisible = !isVisible; 
});



