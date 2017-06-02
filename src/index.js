import Mn  from 'backbone.marionette';
import mixin from './mixin';

export function patch() {
    const OldView = Mn.View;

    Mn.View = OldView.extend(mixin).extend({

        showChildView: function(...args) {
            // if this.regions already defined: do nothing
            if (!this.regions || Object.keys(this.regions).length === 0) {
                this._initAutoRegion();
            }
            return OldView.prototype.showChildView.apply(this, args);
        }

    });
}

export const autoregion = mixin;
