/**
 * Created by dllo on 17/2/13.
 */
exports.sayHEllo = function (name) {
    console.log("hello," + name);
};

module.exports = function () {
    var name;
    this.setName = function (name) {
        this.name = name;
    };
    this.sayHEllo = function () {
        console.log('hello,' + name);
    }
};
