/**
 * Created by dllo on 17/2/11.
 */
var global = 'this is global variable';
function globalFunction() {
    var local = 'this is local variable';
    console.log('visit');
    console.log(global);
    console.log(local);

    function localFunction() {
        var innerLV = 'this is local variable';
        console.log('visit local');
        console.log(global);
        console.log(local);

    }
    localFunction()
}
globalFunction();