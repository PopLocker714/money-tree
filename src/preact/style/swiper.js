export default `
.swiper-slide__text-container {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
}

:root {
    --swiper-theme-color: #007aff;
}
:host {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
}
.swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
    border-radius: 20px;
}
.swiper-vertical > .swiper-wrapper {
    flex-direction: column;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(
        --swiper-wrapper-transition-timing-function,
        initial
    );
    box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
    transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
    touch-action: pan-y;
}
.swiper-vertical {
    touch-action: pan-x;
}
.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: flex;
    align-items: center;
}
.swiper-slide-invisible-blank {
    visibility: hidden;
}
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
    height: auto;
}
.swiper-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
    transform-style: preserve-3d;
}
.swiper-3d {
    perspective: 1200px;
}
.swiper-3d .swiper-cube-shadow,
.swiper-3d .swiper-slide {
    transform-style: preserve-3d;
}
.swiper-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
    scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
    scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
    scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
    content: "";
    flex-shrink: 0;
    order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: center center;
    scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal
    > .swiper-wrapper
    > .swiper-slide:first-child {
    margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
    height: 100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical
    > .swiper-wrapper
    > .swiper-slide:first-child {
    margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
    width: 100%;
    min-width: 1px;
    height: var(--swiper-centered-offset-after);
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
}
.swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
}
.swiper-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
}
.swiper-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
}
.swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    box-sizing: border-box;
    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
    border-radius: 50%;
    border-top-color: transparent;
}
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader {
    animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
    --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
    --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.swiper-virtual .swiper-slide {
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
}
.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
}
.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
    height: 1px;
    width: var(--swiper-virtual-size);
}
.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
    width: 1px;
    height: var(--swiper-virtual-size);
}
:root {
    --swiper-navigation-size: 44px;
}
.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    top: var(--swiper-navigation-top-offset, 50%);
    /* width: calc(var(--swiper-navigation-size) / 44 * 27); */
    /* height: var(--swiper-navigation-size); */
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));

    min-width: 42px;
    min-height: 42px;
    background: white;
    border-radius: 42px;

    box-shadow: 0px 0px 6px 0px rgba(53, 160, 19, 0.14);
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
}

.swiper-button-next.swiper-button-next__category.swiper-button-disabled,
.swiper-button-prev.swiper-button-prev__category.swiper-button-disabled {
    opacity: 0;
}

.swiper-button-next.swiper-button-hidden,
.swiper-button-prev.swiper-button-hidden {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-next,
.swiper-navigation-disabled .swiper-button-prev {
    display: none !important;
}
/* .swiper-button-next svg,
.swiper-button-prev svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform-origin: center;
} */
.swiper-rtl .swiper-button-next svg,
.swiper-rtl .swiper-button-prev svg {
    transform: rotate(180deg);
}

.swiper-button-prev.swiper-button-prev__category,
.swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, -21px);
    right: auto;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, 10px);
    right: auto;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, 10px);
    left: auto;
}
.swiper-button-lock {
    display: none;
}
.swiper-button-next:after,
.swiper-button-prev:after {
    /* min-width: 50px;
    min-height: 50px;
    background: red;
    border-radius: 100px; */
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
    content: "";
}

.swiper-button-next.swiper-button-next__category,
.swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, -21px);
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, 10px);
    left: auto;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
    content: "";
}
.swiper-pagination {
    display: flex;
    position: absolute;
    text-align: center;
    transition: 0.3s opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    width: auto;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 8px 10px;
}
.swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
    display: none !important;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: var(--swiper-pagination-bottom, 8px);
    top: var(--swiper-pagination-top, auto);
    left: calc(50% - (48px / 2));
    /* width: 100%; */
}
.swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transform: scale(0.33);
    position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
}
.swiper-pagination-bullet {
    width: var(
        --swiper-pagination-bullet-width,
        var(--swiper-pagination-bullet-size, 8px)
    );
    height: var(
        --swiper-pagination-bullet-height,
        var(--swiper-pagination-bullet-size, 8px)
    );
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: var(--swiper-pagination-bullet-inactive-color, #000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
}
.swiper-pagination-bullet:only-child {
    display: none !important;
}
.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #e9566a;
}
.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical > .swiper-pagination-bullets {
    right: var(--swiper-pagination-right, 8px);
    left: var(--swiper-pagination-left, auto);
    top: 50%;
    transform: translate3d(0px, -50%, 0);
}
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
    display: block;
}
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-vertical
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
}
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet,
.swiper-vertical
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    display: inline-block;
    transition:
        0.2s transform,
        0.2s top;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}
.swiper-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition:
        0.2s transform,
        0.2s left;
}
.swiper-horizontal.swiper-rtl
    > .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition:
        0.2s transform,
        0.2s right;
}
.swiper-pagination-fraction {
    color: var(--swiper-pagination-fraction-color, inherit);
}
.swiper-pagination-progressbar {
    background: var(
        --swiper-pagination-progressbar-bg-color,
        rgba(0, 0, 0, 0.25)
    );
    position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
.swiper-vertical
    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: var(--swiper-pagination-progressbar-size, 4px);
    left: 0;
    top: 0;
}
.swiper-horizontal
    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-vertical > .swiper-pagination-progressbar {
    width: var(--swiper-pagination-progressbar-size, 4px);
    height: 100%;
    left: 0;
    top: 0;
}
.swiper-pagination-lock {
    display: none;
}
.swiper-scrollbar {
    border-radius: var(--swiper-scrollbar-border-radius, 10px);
    position: relative;
    touch-action: none;
    background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));
}
.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
    display: none !important;
}
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
    position: absolute;
    left: var(--swiper-scrollbar-sides-offset, 1%);
    bottom: var(--swiper-scrollbar-bottom, 4px);
    top: var(--swiper-scrollbar-top, auto);
    z-index: 50;
    height: var(--swiper-scrollbar-size, 4px);
    width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-scrollbar.swiper-scrollbar-vertical,
.swiper-vertical > .swiper-scrollbar {
    position: absolute;
    left: var(--swiper-scrollbar-left, auto);
    right: var(--swiper-scrollbar-right, 4px);
    top: var(--swiper-scrollbar-sides-offset, 1%);
    z-index: 50;
    width: var(--swiper-scrollbar-size, 4px);
    height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));
    border-radius: var(--swiper-scrollbar-border-radius, 10px);
    left: 0;
    top: 0;
}
.swiper-scrollbar-cursor-drag {
    cursor: move;
}
.swiper-scrollbar-lock {
    display: none;
}
.swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.swiper-zoom-container > canvas,
.swiper-zoom-container > img,
.swiper-zoom-container > svg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
.swiper-slide-zoomed {
    cursor: move;
    touch-action: none;
}
.swiper .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
.swiper-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
}
.swiper-grid > .swiper-wrapper {
    flex-wrap: wrap;
}
.swiper-grid-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
}
.swiper-fade.swiper-free-mode .swiper-slide {
    transition-timing-function: ease-out;
}
.swiper-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity;
}
.swiper-fade .swiper-slide .swiper-slide {
    pointer-events: none;
}
.swiper-fade .swiper-slide-active {
    pointer-events: auto;
}
.swiper-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}
.swiper.swiper-cube {
    overflow: visible;
}
.swiper-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
}
.swiper-cube .swiper-slide .swiper-slide {
    pointer-events: none;
}
.swiper-cube.swiper-rtl .swiper-slide {
    transform-origin: 100% 0;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible;
}
.swiper-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 0;
}
.swiper-cube .swiper-cube-shadow:before {
    content: "";
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: blur(50px);
}
.swiper-cube .swiper-slide-next + .swiper-slide {
    pointer-events: auto;
    visibility: visible;
}
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.swiper.swiper-flip {
    overflow: visible;
}
.swiper-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
}
.swiper-flip .swiper-slide .swiper-slide {
    pointer-events: none;
}
.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
}
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.swiper-creative .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    transition-property: transform, opacity, height;
}
.swiper.swiper-cards {
    overflow: visible;
}
.swiper-cards .swiper-slide {
    transform-origin: center bottom;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}

`;
