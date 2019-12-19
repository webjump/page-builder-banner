define(function() {
    return function(Super) {
        const Class = function() {
            Super.apply(this, arguments);
        };

        Class.prototype = Object.create(Super.prototype);
        Class.prototype.constructor = Class;
        Class.__proto__ = Super;

        return Class;
    }
});
