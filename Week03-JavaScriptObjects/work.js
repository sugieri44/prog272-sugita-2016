#!/usr/bin/env node

var person = {
    firstname: 'Erina',
    lastname: 'Sugita',

    fullName: function() {
        'use strict';
        return this.firstname + ' ' + this.lastname;
    }

};

divider('Person');
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullName());

var calculator = {
    operator01: -1,
    operator02: -1,

    add: function() {
        'use strict';
        return this.operator01 + this.operator02;
    },
    subtract: function() {
        'use strict';
        return this.operator01 - this.operator02;
    }

};

calculator.operator01 = person.firstname.length;
calculator.operator02 = person.lastname.length;

function divider(title) {
    'use strict';
    console.log('====================================');
    console.log(title);
    console.log('====================================');
}

var multiply = calculator.operator01 * calculator.operator02;

divider('Calculator');
console.log('operator01 =', calculator.operator01);
console.log('operator02 =', calculator.operator02);
console.log('Add: ', calculator.add());
console.log('Subtract: ', calculator.subtract());
console.log('Multiply: ', multiply);
