(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('backbone.marionette')) :
	typeof define === 'function' && define.amd ? define(['exports', 'backbone.marionette'], factory) :
	(factory((global.marionette = global.marionette || {}, global.marionette.autoregion = global.marionette.autoregion || {}),global.Mn));
}(this, (function (exports,Mn) { 'use strict';

Mn = 'default' in Mn ? Mn['default'] : Mn;

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

exports.patch = patch;
exports.autoregion = autoregion;

Object.defineProperty(exports, '__esModule', { value: true });

})));
