# marionette.autoregion

This is a [backbone.marionette](https://github.com/marionettejs/backbone.marionette) plugin to help you define your View regions from your template HTML.

If you are a Marionette user, you might have notice you have to declare and define your regions inside your views like this

```js
regions: {
    content: '[data-region="content"]',
    footer: 'footer'
}
```

this felt like declaring regions twice, once in the HTML, once in the view, when using `data-region` attribute (or whatever attribute you are using).

Ho, and yes, I am using data attributes, because like for the `ui` or `events` properties, you should avoid to use classes in real world. Those could change or should I say be changed. Especially if you are working in a team! That is why I am using `data-region` attribute a lot.

Now I am still using it, but just once, in the HTML.


# Install

```
npm i marionette.autoregion
```


# Usage

You have to import it at the very begining of your app, in order to patch Marionette.View.

```js
import {patch} from 'marionette.autoregion';
patch();
```

Or just import the mixin and use it in a single view

```js
import {autoregion} from 'marionette.autoregion';
import Mn from 'backbone.marionette';

const MyView = Mn.View.extend(autoregion).extend({

    // this view now as the `_initAutoRegion` method
    // you will have to call it yourself when your view is ready

});
```

```hbs
<main class="center ph2 pv2 pv3-ns">
    <header data-region="header"></header>

    <section class="bg-white-50 pa2 pa4-ns" data-region="body" data-no-replace></section>

    <footer data-region="footer" class="bg-white ph3 pv2 br3 br--bottom silver f6 tc">
        <p>{{someData}}</p>
    </footer>
</main>
```

* `data-region` attribute is for adding a region to your view
* `data-no-replace` is for indicate this region is using the marionette region `replaceElement` [options](https://marionettejs.com/docs/master/marionette.region.html#additional-options)

If your view already as a `regions` attribute, autoregion will not erase it but also not *complete* it.
