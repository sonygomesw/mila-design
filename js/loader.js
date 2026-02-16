// Loader functionality - Immediately Invoked Function Expression
(function() {
    'use strict';

    var hideLoaderCalled = false;

    function hideLoader() {
        if (hideLoaderCalled) return;
        hideLoaderCalled = true;

        var loader = document.getElementById('load');
        if (loader) {
            setTimeout(function() {
                loader.classList.add('loaded');
            }, 1000);
        }
    }

    // Multiple strategies to ensure loader hides

    // Strategy 1: DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideLoader);
    } else {
        // DOM is already ready
        hideLoader();
    }

    // Strategy 2: window.load (fallback)
    window.addEventListener('load', hideLoader);

    // Strategy 3: Timeout fallback (in case events don't fire)
    setTimeout(hideLoader, 2000);
})();
