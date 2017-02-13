/**
 * Created by dllo on 17/2/11.
 */
// var pet = {
//     words: '...',
//     speak: function () {
//         console.log(this.words);
//     }
// };
// console.log(pet.words);


// function pet(words) {
//     this.words = words;
//     console.log(this.words);
//     console.log(this ===global);
//
// };
// pet('...');

function pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
        console.log(this);
    }
}
var cat = new pet('Miao');

cat.speak();