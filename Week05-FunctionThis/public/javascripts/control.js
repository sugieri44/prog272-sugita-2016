
function getNine() {
    return 9;
}

//a simple function
function getThis() {
    return this;
}

//a simple anonymous function
var getThisAnonymous = function(){
    return this;
};

var myObject = {
    getThis: function(){
        'use strict';
        return this;
    }
};

var myFunction = {
    getThis: function(){
        'use strict';
        return this;
    }
};

//Constructor Object
function MyFunction() {
    MyFunction.prototype.getThis = function () {
        return this;
    }
}

//a simple strict function
function getThisStrict(){
    'use strict';
    return this;
}

$(document).ready(function() { 'use strict';
});
