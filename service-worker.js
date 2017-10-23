/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","2fdffd1d512d3afb599546a1c1f8bceb"],["bower_components/app-layout/app-drawer/app-drawer.html","191258b698c812c0e95689dacdc4ffd8"],["bower_components/app-layout/app-header-layout/app-header-layout.html","2680c241ffa8de217c38cf256095a8ac"],["bower_components/app-layout/app-header/app-header.html","1fc20aae05dac033fe88bc9e4f55ad88"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","2055819d30270710151d33d014a24227"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","1da8f60053ecf4a3bf3ba9056dc227e4"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","f9af3b19ba0df5aea027b835f0d4e766"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","9fff428cbb131e8901f5227e2eab5685"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","7079052ffc7486eeddd21318a2136065"],["bower_components/app-layout/app-scroll-effects/effects/material.html","081d35dfd41d4a37f5960145e9e4c679"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","2c84ccf04e6c7e0af43076af760a0624"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","64b3d5720f2cfb6f3232360420e94644"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","399d48db8c94b86f532451522a8ba9d4"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","50771fe5a6c6e476eeecccb49fe75dc8"],["bower_components/app-layout/app-toolbar/app-toolbar.html","3bf0d6c2ea8a7564c16c349b2af06b56"],["bower_components/app-layout/helpers/helpers.html","bdb12029bb6ce1666c9d66d6e14abeaf"],["bower_components/app-route/app-location.html","3e83905cc6f830836f0ed59266ccbf43"],["bower_components/app-route/app-route-converter-behavior.html","4bfdb81bbbaee7cdf4bd397ad10a2c08"],["bower_components/app-route/app-route-converter.html","9a2f291dc16117438aa02d1c4fb6a52f"],["bower_components/app-route/app-route.html","c8ef8a5542a8e2e7ec8c605c64419947"],["bower_components/font-roboto/roboto.html","31c2e28f3f926e78961662fcfc98bd44"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","76a1ecd16f518baa9f15a94bc527564c"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","1bd110b1d8988f44b713a7dce61a00e8"],["bower_components/iron-ajax/iron-ajax.html","1bc702ce1362e268e01c0c96042d7a31"],["bower_components/iron-ajax/iron-request.html","5ff0a1f6d84bd0bf6366fcddace0b89e"],["bower_components/iron-behaviors/iron-button-state.html","088ca866c6de99bfea9a6a6dd0b04e84"],["bower_components/iron-behaviors/iron-control-state.html","07e72911664857d877d975a945735380"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","09cf5a7690e0628b5baf821c9bd67fe6"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","b2a39bd1df249e09fd2d46fedcda2c0a"],["bower_components/iron-dropdown/iron-dropdown.html","08a58b7507783c9ef76d7198208b7b15"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","8dcbc83b02a403aa27bcb2c07484183d"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","71a8a4549c04d5279d6de408ed196f94"],["bower_components/iron-flex-layout/iron-flex-layout.html","ff9477722c978e3fdd3fbf292cc3f2fc"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","39eb855493fb1069f7f0f3a750afa734"],["bower_components/iron-icon/iron-icon.html","0153f6e7a2a4c6c06276ed9013ff8d3e"],["bower_components/iron-icons/communication-icons.html","c925584546136159469d54a186a4f31c"],["bower_components/iron-icons/iron-icons.html","b06b48bbd24e44ce5f592c008e254376"],["bower_components/iron-icons/maps-icons.html","d8e350b535fa24a44653c98fe68fe9b4"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","4412f13dba32b37ee2d809161fc4fad3"],["bower_components/iron-image/iron-image.html","0d7c3b59759be465141255a82a3a9a86"],["bower_components/iron-input/iron-input.html","cda2aa52c7027fdcee162d98b1e1b251"],["bower_components/iron-list/iron-list.html","297c487b2e55620aa3228765ab4d8779"],["bower_components/iron-location/iron-location.html","654046e45a3c72f9767ad3973f5a9299"],["bower_components/iron-location/iron-query-params.html","7ea7a6d042c520db265740c81116b182"],["bower_components/iron-media-query/iron-media-query.html","35d84aade3d6f8d1ff695853a0805f4b"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","9dad17732945a88baf4079ae149d8935"],["bower_components/iron-menu-behavior/iron-menubar-behavior.html","758cd11ccf6b08faaebe7560e5e1520a"],["bower_components/iron-meta/iron-meta.html","be76481ea1072685cf92a188671d42dd"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","d93f5a132c7d8fe63b4144a9b2b5cb1d"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","593f057c52bbb29564cfe5bb8788cd92"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","f8b2af2596125d98c46f432c637beabf"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","45d0a8d942b9aea24dbbaa614198513d"],["bower_components/iron-pages/iron-pages.html","15a5343f8c30f6f4b08c2ffeb641df87"],["bower_components/iron-range-behavior/iron-range-behavior.html","c264468ed0c59cbedba990f1e9a3a53e"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","7bbb3e64b4d286a7dc9c9b65dc9fc14d"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","9db6cd90e90494805369c37824993755"],["bower_components/iron-selector/iron-multi-selectable.html","71c258f204d132a97429377faa761169"],["bower_components/iron-selector/iron-selectable.html","a4d3ac75b06e5f164cc5cfc32d7e2bcd"],["bower_components/iron-selector/iron-selection.html","f3cfdc3012ff78f847a7064eb8ad2cab"],["bower_components/iron-selector/iron-selector.html","d6013bc96b2b867cdca8bdf8f0d86d4a"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","6c5ecce70fa8ed788a04d6127b353939"],["bower_components/moment-element/moment-import.html","047338ee81c2e44550953f135a7aeb6d"],["bower_components/moment-element/moment-with-locales-import.html","6db0dc0e16d037f0a9cb6daeae917b6d"],["bower_components/moment/min/moment-with-locales.min.js","a78326c6407dcfc8852411a0657c54d6"],["bower_components/moment/min/moment.min.js","f28841193ab5ff2d8fd94f796b8ff57b"],["bower_components/neon-animation/animations/fade-in-animation.html","971a06a74be2ce3e2ab83393d3725705"],["bower_components/neon-animation/animations/fade-out-animation.html","d07c4d83853c586b5199533cbaf247d5"],["bower_components/neon-animation/neon-animatable-behavior.html","d781ac88e066e237c0cb0e64343ce4c9"],["bower_components/neon-animation/neon-animatable.html","57f22872c97042e41ede46f848a65b38"],["bower_components/neon-animation/neon-animated-pages.html","a12d61d54bddd2d37089576a2647fec1"],["bower_components/neon-animation/neon-animation-behavior.html","e08fdc4909992810a0899196ec189802"],["bower_components/neon-animation/neon-animation-runner-behavior.html","5ef901a2c20a3425bff05fba2ab83c8d"],["bower_components/neon-animation/web-animations.html","b9b5d0a4f7234c3c7c21b5078cdf77d5"],["bower_components/paper-autocomplete/paper-autocomplete-suggestions.html","01f0f8c43ef21f199fb7a789e26c8988"],["bower_components/paper-autocomplete/paper-autocomplete.html","57791e0c8254e714a3e78a28a010d06b"],["bower_components/paper-behaviors/paper-button-behavior.html","9b2e9803528a706bdda32357d31caa05"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","8639e4cf4797f5154437a55c56e1b9a2"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","69cbf62f8f4288bac47bbb699579eaf9"],["bower_components/paper-behaviors/paper-ripple-behavior.html","3334a78d6385c7e5e3e2101cb9d5a600"],["bower_components/paper-button/paper-button.html","455ec0bc29753e2214b3f6fb69db8168"],["bower_components/paper-checkbox/paper-checkbox.html","abb3d8333abc6e5ab2858e9043884e3a"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","bde0b4cdc9da56d4def08294209add58"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","53a7280f7f749585af412cd0fdd02e72"],["bower_components/paper-dialog/paper-dialog.html","0bdba0e6dc9baca9f9844b8908047519"],["bower_components/paper-dropdown-input/paper-dropdown-input.html","b3b80432b1e09389745188a20ed91de5"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","4c48b1e338ed304011fb2070a299b12d"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","5937bb21d75c1f6a3b6a3b71cb310580"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","ecb1250717eb1a0e103a1084f4127854"],["bower_components/paper-icon-button/paper-icon-button.html","fb8cd1c415a742a009d95bf1f5810461"],["bower_components/paper-input/paper-input-addon-behavior.html","09eb9dc3cc0b0422e76c0c0d5e762cd2"],["bower_components/paper-input/paper-input-behavior.html","7d3d19acc44a6995b0aa33044b2d8e17"],["bower_components/paper-input/paper-input-char-counter.html","c376e4a9eb5b34ca6631f4984a106f1e"],["bower_components/paper-input/paper-input-container.html","9b975249a62abc445c71020c70149841"],["bower_components/paper-input/paper-input-error.html","1751eac452b311425a53059732d5c24d"],["bower_components/paper-input/paper-input.html","b574283f8bd6dbae96e1c03d4e4490c8"],["bower_components/paper-item/paper-icon-item.html","6213f7a91df347418f66cece92b3dd10"],["bower_components/paper-item/paper-item-behavior.html","218eeef758bdc051a1c7710620bce274"],["bower_components/paper-item/paper-item-shared-styles.html","a0b1e1b7020a5f28df19f661a998665a"],["bower_components/paper-item/paper-item.html","ede9d463ce276458e1ac707ba57a0b61"],["bower_components/paper-listbox/paper-listbox.html","56562b41e26b484668ce61b1750f5b38"],["bower_components/paper-material/paper-material-shared-styles.html","132d140281cbec6082b79d1e4e5cb690"],["bower_components/paper-material/paper-material.html","063ecd6dda907cf9ba1bf83c4e20877b"],["bower_components/paper-menu-button/paper-menu-button-animations.html","f3b79fd225932daa6116526c8d18e6e8"],["bower_components/paper-menu-button/paper-menu-button.html","70c78e47bc8f45b39631bdc47a43b142"],["bower_components/paper-menu/paper-menu-shared-styles.html","d1424f32f49a2a5866cac8e48ec7ac38"],["bower_components/paper-menu/paper-menu.html","23b59dacbd40f6af8c7fce4808d136fa"],["bower_components/paper-progress/paper-progress.html","ac63d5706e3a1bd5e3cc4dd22994072d"],["bower_components/paper-radio-button/paper-radio-button.html","479722023139abf5f913cb4f9350dcdf"],["bower_components/paper-radio-group/paper-radio-group.html","962cf816cbbb8060d14ac07b9bc9c430"],["bower_components/paper-range-slider/paper-range-slider.html","c73e0188ed45d457d754af0afb7f48c5"],["bower_components/paper-ripple/paper-ripple.html","036fd53fb56441d878ad92408f1aeb15"],["bower_components/paper-spinner/paper-spinner-behavior.html","6c067f44775d94c3d0541e000d44b9c8"],["bower_components/paper-spinner/paper-spinner-styles.html","099594db201155ae54e6ea30d3a00cee"],["bower_components/paper-spinner/paper-spinner.html","5fcc5c8c53a95c81c0d6b1c2dcd61e39"],["bower_components/paper-styles/color.html","2b6b926e5bd4005bdbdcd15a34a50b95"],["bower_components/paper-styles/default-theme.html","9480969fcd665e90201b506a4737fa1a"],["bower_components/paper-styles/element-styles/paper-material-styles.html","b0a38bd2eb6f4c4844d4903a46268c92"],["bower_components/paper-styles/shadow.html","2fbe595f966eebe419b9b91611d6392a"],["bower_components/paper-styles/typography.html","772d86cecdd75864b7d5f6760255665c"],["bower_components/paper-tabs/paper-tab.html","4b56f76b6772b3eacea2473627a31fee"],["bower_components/paper-tabs/paper-tabs-icons.html","7efb13dd67a114aef864eb7bc28284b7"],["bower_components/paper-tabs/paper-tabs.html","a09d9f5c710bab295267cb81f4c6418e"],["bower_components/paper-tooltip/paper-tooltip.html","121a2cff595300f6076f8656bb5bc862"],["bower_components/polymer/lib/elements/array-selector.html","c7b6aae3886057335bb45cb2dc929b11"],["bower_components/polymer/lib/elements/custom-style.html","56498306764c78dbdedc91e9b1cd48a1"],["bower_components/polymer/lib/elements/dom-bind.html","b095462e164a44161e4ec59dbceaafca"],["bower_components/polymer/lib/elements/dom-if.html","7df2be4bf527c126d6f0f7f1c1cd983e"],["bower_components/polymer/lib/elements/dom-module.html","a97a6b129383775ff837dd3669e1eca3"],["bower_components/polymer/lib/elements/dom-repeat.html","a59b8875c58ed7497385184a597edb13"],["bower_components/polymer/lib/legacy/class.html","2a2b4b26da24c65f4e9b373f73c28f77"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","fc612d2156faa00b264cf3d0c4c07d4e"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","f47dd687f76c84bacdb6ccc721cf257e"],["bower_components/polymer/lib/legacy/polymer-fn.html","2ea272e8f25554a670d23706d7673be7"],["bower_components/polymer/lib/legacy/polymer.dom.html","ffe58fd0fdb0e5fe6262e1fce25e91ec"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","7ca379f6c489cd035b3f3bfb15e6566d"],["bower_components/polymer/lib/mixins/dir-mixin.html","7afbb3fe5c836b19ce11938763014670"],["bower_components/polymer/lib/mixins/element-mixin.html","070f9ee81d777ee60318e0cac2a4e4f2"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","fef96f40b6a400311db6af22b8e74404"],["bower_components/polymer/lib/mixins/mutable-data.html","418f04294fd535f407ba5e133fc88d1a"],["bower_components/polymer/lib/mixins/property-accessors.html","25c102d7dd0761b7c3ce9858d65b25b6"],["bower_components/polymer/lib/mixins/property-effects.html","b8b5b865b447fb9b1018c55b235b9cf9"],["bower_components/polymer/lib/mixins/template-stamp.html","70c764cbd16df43f1d8090312260c48f"],["bower_components/polymer/lib/utils/array-splice.html","26b4a9fe83c3a431dfaf9a9d3cbe34ef"],["bower_components/polymer/lib/utils/async.html","e84acfd21e420cd65fcdee94b5e45dae"],["bower_components/polymer/lib/utils/boot.html","a9c26d16d3508583e7bfef40f32e2337"],["bower_components/polymer/lib/utils/case-map.html","c24840bb3e5b591d638ad48ecf0e583e"],["bower_components/polymer/lib/utils/debounce.html","9008ce7bcf59f5f7ca018b7d27c714ec"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","8f6e89bf93943e9bc9aebcefa3045e03"],["bower_components/polymer/lib/utils/flush.html","9908212a2642c59435a69e1366b6ee2e"],["bower_components/polymer/lib/utils/gestures.html","0a077afecfa5e8a186d07112afd6ac67"],["bower_components/polymer/lib/utils/import-href.html","810db7eedff9c00162eabd73f41e5ce9"],["bower_components/polymer/lib/utils/mixin.html","e5022161f65729f50cb4aee293237833"],["bower_components/polymer/lib/utils/path.html","899871963bc1900084dc09af59776123"],["bower_components/polymer/lib/utils/render-status.html","a95c96627c4b0bb2a3a083f0420256be"],["bower_components/polymer/lib/utils/resolve-url.html","36e1b3cdb2c875fb64bc5b3cae140225"],["bower_components/polymer/lib/utils/settings.html","0bf53e2eea0fa2790d9209a7522e9990"],["bower_components/polymer/lib/utils/style-gather.html","52a4751e68ba859780e258639d865584"],["bower_components/polymer/lib/utils/templatize.html","0d1c05b1032344eb4be025187cd47d88"],["bower_components/polymer/lib/utils/unresolved.html","008201745f9a94201204f6034ef44d7b"],["bower_components/polymer/polymer-element.html","959b7bcd9aa1db7b6f310a666b9fb6da"],["bower_components/polymer/polymer.html","342e42cd62e7d2ea5d4ebdd505bd4361"],["bower_components/shadycss/apply-shim.html","f220299c2be1b5040111843d640b70a5"],["bower_components/shadycss/apply-shim.min.js","d3b0c92d90b9193ddd349ebd5d9bb13f"],["bower_components/shadycss/custom-style-interface.html","0a68ea0f3af7bcb1ca6617e512f720cb"],["bower_components/shadycss/custom-style-interface.min.js","8e4653f8934008ee170514701df5c1fd"],["bower_components/t-clamp/t-clamp.html","e02dc8b2f91cc9df830ecbbf4447fd92"],["bower_components/t-component-api/t-component-api.html","89389d3f33234c41c64ea2971c96167e"],["bower_components/t-component-api/t-hotel-search-api.html","92d3cdcae335e48c7e7c2b9951835478"],["bower_components/t-deals/nested/jquery.nested.js","98ac18f016343c0b0a8bbeb39b129abc"],["bower_components/t-deals/nested/style.css","fdddd68426ce224d49131b22b2ab91a4"],["bower_components/t-deals/t-deals-styles.html","d30e366e5fd9be41daa4ab2e9c1992e4"],["bower_components/t-deals/t-deals.html","37cb9b7021edbae2fbd3eb8cdfe2b939"],["bower_components/t-filter/t-filter-block-content.html","b6cc71d6844b9262f8f20c7b860ef79c"],["bower_components/t-filter/t-filter.html","77b5d881277bffd90e8c1c15469db237"],["bower_components/t-font-icons/t-font-icons.html","ac4c1e783a90edae8ab1f42f3dbe328c"],["bower_components/t-footer/t-footer-style.html","cef1e28703d41a273f8c3e5f91d954d9"],["bower_components/t-footer/t-footer.html","d87ec2630a26493c94c38cfdf6a01c5e"],["bower_components/t-header/t-header-styles.html","4a7a1a8c1a3fcdda11ad3b4e33de07e8"],["bower_components/t-header/t-header.html","5987df3cd9c65723e7eda1920d8df4ea"],["bower_components/t-hotel-item/t-hotel-item-styles.html","18dca4fca16c8dd3c80f543bc184c50f"],["bower_components/t-hotel-item/t-hotel-item.html","658ce5cde619b8300ccf5683734744fe"],["bower_components/t-hotel-list/t-hotel-list.html","623c6ed85594d9c16290b3fe6a13af59"],["bower_components/t-hotel-list/t-list-sort.html","23ab25f6961196fd4a7097d2a51d87b3"],["bower_components/t-hotel-list/t-list-title-tags.html","a3fcec499b25e8c0d1048043293dcee2"],["bower_components/t-hotel-result-loader/t-hotel-result-loader.html","e948bbe7f616dc8b531f9dedb3b18695"],["bower_components/t-hotel-search/autocomplete.js","3b6711b2b41c8317aab19e2850dc195f"],["bower_components/t-hotel-search/choice-card.html","0c98d4e5261d9aae634b1bd70f1381c4"],["bower_components/t-hotel-search/choice-form.html","61c10512deb0983965c6eb0bf1603935"],["bower_components/t-hotel-search/t-autosuggest.html","831fa187e05fbdbb6ffc9b19fbd74fca"],["bower_components/t-hotel-search/t-grid-layout-style.html","9d27b1d92d5edf00f2e34f9ad9ffc3b7"],["bower_components/t-hotel-search/t-hotel-search-style.html","7bd77fa7c5f21b40762df454c0de71ea"],["bower_components/t-hotel-search/t-hotel-search.html","98527111a0f6872bc28460746bcb0c85"],["bower_components/t-hotel-search/t-input-date-picker/moment-with-locales-import.html","892587222df80252e861e787a33419b2"],["bower_components/t-hotel-search/t-input-date-picker/t-date-picker/t-calendar.html","e132880aeab9712cdda74a3d5e93a63e"],["bower_components/t-hotel-search/t-input-date-picker/t-date-picker/t-date-picker-dialog-style.html","e7307b9f2eec1457a9772b560e12ad37"],["bower_components/t-hotel-search/t-input-date-picker/t-date-picker/t-date-picker-icons.html","bf5cd3921072c638e9277ad30523f125"],["bower_components/t-hotel-search/t-input-date-picker/t-date-picker/t-date-picker.html","58214467ca1df6d827ae1ef3ed459e55"],["bower_components/t-hotel-search/t-input-date-picker/t-date-picker/t-year-list.html","d11ef5debefe8de76df9b7a248e24277"],["bower_components/t-hotel-search/t-input-date-picker/t-input-date-picker.html","9aaef54a568542ffca442ceccac6624b"],["bower_components/t-mystique-auth/t-mystique-auth.html","76b9542ac9580eb366eeaf9fc3a3fc57"],["bower_components/t-progress-bar/t-progress-bar.html","40f9ea1f8e9a8cb080a2bbd2bf5daa63"],["bower_components/t-rating-stars/t-rating-stars.html","08fe7fe013178f6fd13517b131042831"],["bower_components/t-style-utils/t-style-utils.html","f6527abcb2799913298e112d30ed6dc2"],["bower_components/t-tags-input/t-tags-input.html","e6fcc842661f7ce0b788a5f3d8ecf367"],["bower_components/t-tags-input/tag-item.html","acd4bd80819b250f93d6047d57134adb"],["bower_components/web-animations-js/web-animations-next-lite.min.js","dc612d33ef7c4dbb563e32f18cf0644b"],["bower_components/webcomponentsjs/custom-elements-es5-adapter.js","a5043c1d0dd16d84558ee6cc2276212e"],["bower_components/webcomponentsjs/gulpfile.js","0366da1f0f7858c9af2daa3ef7d950ea"],["bower_components/webcomponentsjs/webcomponents-hi-ce.js","fbaa6751e3b07a33a459ebbbd24a4ede"],["bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js","f06beb1fba0a9020e116162370e3ef16"],["bower_components/webcomponentsjs/webcomponents-hi.js","487ac7582563f4797e9e3659a096a642"],["bower_components/webcomponentsjs/webcomponents-lite.js","b591b76678e2f5d584eff169fd0ff2f8"],["bower_components/webcomponentsjs/webcomponents-loader.js","f13bbbbf647b7922575a7894367ddaaf"],["bower_components/webcomponentsjs/webcomponents-sd-ce.js","e229eae539aba7a4d2400316e6603b0d"],["index.html","db371a942f5affa69cdef18f639dcef6"],["manifest.json","ef8ae93e4371c922cfc89aff053a8b20"],["src/asset/jquery.min.js","f4df01d39e8d81d2e9c14a8e6eb4bf44"],["src/mixin/t-hotel-result-mixin.html","1be253d2df66dc59d803661bf0cdfd5a"],["src/mixin/t-page-mixin.html","53975851c9d2cf910316d7dc5c5e91fe"],["src/mixin/t-search-page-mixin.html","8cb7bd38f157b5a01dfe4585e18da1c7"],["src/mock/mock-data.html","1dea7056168f8a12c3999dd86fadfb84"],["src/nxt-app.html","7687dd720072007ae693c6c7e5692a9b"],["src/nxt-icons.html","0b5b250e084cfa43139cf94bb6f8f5b8"],["src/nxt-shared-styles.html","cb27548ee47d818cbf89046081d4b404"],["src/pages/car-page.html","44f8248f93ad9cc74e30e66a8deadf81"],["src/pages/checkout-page.html","9479695993d679203126ead0def3466b"],["src/pages/confirmation-page.html","786c3c78ad7dfec187ae351ff3387dc6"],["src/pages/home-page.html","50b78fa487189f23773a134a06fda511"],["src/pages/hotel-details-page.html","a7611b6da0ccf5dc447cdb3eca7b9dcc"],["src/pages/hotel-result-page.html","9f6c8ba920bfd63971c49f5872f3a375"],["src/pages/view404-page.html","6a740f2e8aef695fa3bbe7fe7c8b4e9d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







