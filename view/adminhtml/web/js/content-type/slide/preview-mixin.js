define([
    'ko',
    'underscore',
    'Webjump_PageBuilderBanner/js/model/extend-function'
], function(ko, _, extend) {

    return function(Preview) {
        // const _super = Preview.prototype;

        const Slide = function() {
            Preview.apply(this, arguments);
            this.data.images = ko.observable({});

            this.contentType.dataStore.subscribe(this.updateImageUrl.bind(this));
        };

        extend(Slide, Preview);
        const _this = Slide.prototype;

        _this.updateImageUrl = function() {
            const state = this.contentType.dataStore.getState();
            const images = {};

            if (Array.isArray(state.background_image)) {
                state.background_image.forEach(function(image) {
                    images.desktop = image.url;
                });
            }

            if (Array.isArray(state.mobile_image)) {
                state.mobile_image.forEach(function(image) {
                    images.mobile = image.url;
                });
            }

            this.data.images(images);
        };

        return Slide;
    }
});
