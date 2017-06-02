const mixin = {

    _initAutoRegion: function() {
        const regionEls = this.el.querySelectorAll('[data-region]');
        if (regionEls.length === 0) return;
        const regions = {};
        Array.prototype
            .slice.call(regionEls)
            .forEach(el => {
                regions[el.getAttribute('data-region')] = {
                    el,
                    replaceElement: !el.hasAttribute('data-no-replace')
                };
            })
        ;
        this.addRegions(regions);
    }

}

export default mixin;
