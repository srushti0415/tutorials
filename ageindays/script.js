// challange in days
function Ageindays() {
    var birthyear = prompt ('What year you where born ? ');
    var Ageindays = (2021 - birthyear) *365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + Ageindays + ' days old ');
    h1.setAttribute('id', 'Ageindays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    // console.log(Ageindays);
};

function reset() {
    document.getElementById('Ageindays').remove();
}
