define(function() {
    return function(Class, Super) {
        if (!Class) {
            Class = function() {
                Super.apply(this, arguments);
            };
        }

        Class.prototype = Object.create(Super.prototype);
        Class.prototype.constructor = Class;
        Class.__proto__ = Super;

        return Class;
    }
});
