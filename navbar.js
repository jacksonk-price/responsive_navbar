const NavBar = (() => {
    const primaryNavigation = {
        get: document.getElementById('primary-navigation-list'),
        navToggle: document.getElementById('mobile-nav-toggle'),
        dropDownToggles: document.querySelectorAll('.dropdown-toggle')
    }

    const _isVisible = () => primaryNavigation.get.getAttribute('data-visible') === 'true';

    const _bindEvents = () => {
        primaryNavigation.navToggle.addEventListener('click', function() {
            if (_isVisible()) {
                primaryNavigation.get.setAttribute('data-visible', false);
                primaryNavigation.navToggle.setAttribute('aria-expanded', false);
            } else {
                primaryNavigation.get.setAttribute('data-visible', true);
                primaryNavigation.navToggle.setAttribute('aria-expanded', true);
            }
        });

        primaryNavigation.dropDownToggles.forEach((toggle) => {
            toggle.addEventListener('click', function() {
                this.classList.toggle('dropdown-active');
            });
        });
    }

    const init = () => {
        _bindEvents();
    }

    return { init }
})();

NavBar.init();