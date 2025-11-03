define(['exports'], (function (exports) { 'use strict';

    var name = 'jasmine';
    var dog = {
        name: 'shown',
        age: '22',
    };
    console.log(dog);
    function getName() {
        console.log('my name is jasmine');
    }
    getName();

    exports.name = name;

}));
