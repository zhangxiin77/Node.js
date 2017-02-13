/**
 * Created by dllo on 17/2/11.
 */
var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + ' ' + this.words);
    }
};
// pet.speak('speak');

//用call apply改变this上下文用来继承
//call:参数列表  apply：参数数组
var dog ={
    words: 'wang'
};
pet.speak.call(dog,'Speak');