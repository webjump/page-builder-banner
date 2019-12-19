define([
    'underscore',
    'Webjump_PageBuilderBanner/js/model/extend-function'
], function(_, extend) {

    return function(Preview) {
        const Slide = extend(Preview);
        const _this = Slide.prototype;
        const _super = Preview.prototype;

        _this.addImageUrl = function() {
            const state = this.contentType.dataStore.getState();
            const images = {};

            Array.isArray(state.background_image) && state.background_image.forEach(function(image) {
                images.desktop = image.url;
            });

            Array.isArray(state.mobile_image) && state.mobile_image.forEach(function(image) {
                images.mobile = image.url;
            });

            const imageUrl = state.background_image.url;
            this.data.images = images;
            this.data.image = imageUrl;
        };

        _this.updateObservables = function() {
            this.addImageUrl();
            return _super.updateObservables.call(this, arguments);
        };

        return Slide;
    }
});
