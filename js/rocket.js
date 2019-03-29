var timer = null;
var countdownNumber = 10;



var startCountdown = function () {
    document.getElementById('flames').className = 'flames show';
    console.log("show flames div");
    document.getElementById('rocket').className = 'rocket flying';
    console.log("move rocket")
}

var changeState = function (state) {
    document.body.className = "body-state" + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber -= 1
            document.getElementById('countdown').innerHTML = countdownNumber;

            if (document.getElementById('countdown').innerHTML <= 0) {
                changeState(3);
            }
        }, 500);

    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.random();
            console.log(randomNumber);
            if (randomNumber > 0.9) {
                //success
                changeState(4);
                //fail
            } else {
                changeState(5);
            }
        }, 2000);
    };

}