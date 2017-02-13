/**
 * Created by dllo on 17/2/11.
 */
function pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
    }
};
function Dog(words) {
    // pet.call(this, words);
    pet.apply(this, arguments);
};

var dog = new Dog('wang');
dog.speak();