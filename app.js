var jwt1 = localStorage.getItem('jwt');

flutterChannel.postMessage('message1');
// sendToFlutter('prueba 1');
window.sendToFlutter('jwt1 es ' + jwt1);

window.sendToFlutter('prueba 2');

//asdas;
var printBtn = document.getElementById('Print');
console.log('Testing...');
printBtn.addEventListener('click', function () {
    // get jwt from localStorage
    var jwt = localStorage.getItem('jwt');
    // send jwt to server
    console.log(jwt)
    flutterChannel.postMessage('message2');
    // sendToFlutter('prueba 3');
    window.sendToFlutter('prueba 4');
    flutterChannel.postMessage('prueba');

    Print.postMessage('jwt es ' + jwt);
});

var holaMundo = (val) => {
    alert('hola ' + val)
    localStorage.setItem('jwt', val);
}

