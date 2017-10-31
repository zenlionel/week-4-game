var randNum;
var loss = 0;
var win = 0;
var hiddenNum = Math.floor(Math.random() * 101) + 19;
console.log(hiddenNum);
var total= 0;

for (var i = 0; i < 4; i++) {
    var randNum = Math.floor(Math.random() * 12) + 1;
    console.log(randNum);
    $('.test').attr({
        'class': 'newNum',
        'newNum':randNum

    });
}

$('.newNum').on('click', function () {
    
    var addNums = parseInt($(this).attr(randNum));
    //var total += addNums;
    console.log($(this).attr(randNum));
});
//couldn't get this to work anymore jquery error with CDN
//but the idea is then to have the value of the randNum to be added into
//a total sum. This will then give us a total = to the attr on click.
//win condition is if the total === hiddenNum then you win.
//if it is greater you lose.
if (total > hiddenNum) {
    loss ++;
    window.sessionStorage('loss', loss);
    alert("You didn't find the right number");

}
$('#rando').html('Random Number is: ' + hiddenNum);
if (randNum === hiddenNum) {
    win++;
    window.sessionStorage('win',win);
    alert("You've found the right number!");


}