//I got a lot of help from you guys and the internet.
var randNum;
var loss = 0;
var win = 0;
var hiddenNum = Math.floor(Math.random() * 101) + 19;
console.log(hiddenNum);
var total= 0;
var idCssIds =['opal','sapphire','ruby','emmerald'];
//programtically create divs that have unique id's and give them a random number.
//  create div $(<div>) append to 
//  assign div classes test & crystal
//  generate id
//  generate random number
//  assign random number to id's, they should all be different
//  
for (var i = 0; i < 4; i++) {
    var randNum = Math.floor(Math.random()*12)+1;
    var blocks = $('<div>');
        blocks.attr({
            'class': 'blocks',
            'randomNum': randNum,
            'id': idCssIds[i],
        });
    $('.block').append(blocks);
}
//




$('.blocks').on('click', function () {
    console.log($(this).attr('randomnum'));
    var addNums = parseInt($(this).attr('randomnum'));
    total += addNums;
    console.log(total);
    //after this add the total to the <p> tag to show how much you've guessed.
});

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