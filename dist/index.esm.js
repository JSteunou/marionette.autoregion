import Mn from 'backbone.marionette';

var mixin = {

    _initAutoRegion: function _initAutoRegion() {
        var regionEls = this.el.querySelectorAll('[data-region]');
        if (regionEls.length === 0) return;
        var regions = {};
        Array.prototype.slice.call(regionEls).forEach(function (el) {
            regions[el.getAttribute('data-region')] = {
                el: el,
                replaceElement: !el.hasAttribute('data-no-replace')
            };
        });
        this.addRegions(regions);
    }

};

function patch() {
    var OldView = Mn.View;

    Mn.View = OldView.extend(mixin).extend({

        showChildView: function showChildView() {
            // if this.regions already defined: do nothing
            if (!this.regions || Object.keys(this.regions).length === 0) {
                this._initAutoRegion();
            }

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return OldView.prototype.showChildView.apply(this, args);
        }

    });
}

var autoregion = mixin;

export { patch, autoregion };
