new WOW().init();


document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.first-button');
    button.addEventListener('click', function () {
        const icon = this.querySelector('.animated-icon1');
        icon.classList.toggle('open');
    });
});

// change color

const toggleTheme = document.getElementById('ThemeBoxSwitchInput');

toggleTheme.addEventListener('change', function () {
    const root = document.documentElement;

    if (this.checked) {
        // DarkMode
        root.style.setProperty('--white-custome', '33, 20, 14');
        root.style.setProperty('--black-custome', '241, 232, 213');
        root.style.setProperty('--background-custome', '68, 49, 41');

    } else {
        // Light Mode
        root.style.setProperty('--white-custome', '255, 255, 255');
        root.style.setProperty('--black-custome', '33, 20, 14');
        root.style.setProperty('--background-custome', '255, 251, 243');
    }
});


function hideOwlClones(carousel) {
    if (!carousel) { return; }
    carousel.querySelectorAll('.owl-item.cloned').forEach(function (clone) {
        clone.setAttribute('aria-hidden', 'true');
    });
}

// Hero Slider 

document.addEventListener("DOMContentLoaded", function () {
    const heroSlider = document.querySelector('.HeroSlider');

    // Only initialize when the slider markup exists and Owl (via its jQuery runtime) is loaded
    if (!heroSlider || typeof $ === 'undefined' || !$.fn.owlCarousel) {
        return;
    }

    // Respect the OS reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    $('.HeroSlider').owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        autoplay: !prefersReducedMotion,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: prefersReducedMotion ? 0 : 1000,
        dots: true,
        nav: false
    });

    hideOwlClones(heroSlider);
});

// Testimonials Carousel (Owl) — social-proof quotes before the contact section.

document.addEventListener("DOMContentLoaded", function () {
    const testimonialsCarousel = document.querySelector('.TestimonialsCarousel');

    // Only initialize when the markup exists and Owl (via its jQuery runtime) is loaded
    if (!testimonialsCarousel || typeof $ === 'undefined' || !$.fn.owlCarousel) {
        return;
    }

    // Respect the OS reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    $('.TestimonialsCarousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 24,
        autoplay: !prefersReducedMotion,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: prefersReducedMotion ? 0 : 600,
        dots: true,
        nav: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });

    // Hide Owl's loop clones from assistive technology (established a11y rule)
    hideOwlClones(testimonialsCarousel);
});


// Products — cards render from the PRODUCTS array (js/product.js) into each
// tab pane's .ProductsGrid. The tabs themselves stay plain Bootstrap tabs.

function renderProducts() {
    const productsSection = document.getElementById('products');

    if (!productsSection || typeof PRODUCTS === 'undefined' || !Array.isArray(PRODUCTS)) {
        return;
    }

    PRODUCTS.forEach(function (product) {
        if (!product || !product.category || !product.name) {
            return;
        }

        const grid = productsSection.querySelector('#tab-' + product.category + ' .ProductsGrid');
        if (!grid) {
            return;
        }

        const card = document.createElement('article');
        card.className = 'ProductCard';

        const imgWrap = document.createElement('div');
        imgWrap.className = 'ProductCard-img';
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.alt || product.name;
        img.loading = 'lazy';
        img.decoding = 'async';
        imgWrap.appendChild(img);

        const body = document.createElement('div');
        body.className = 'ProductCard-body';
        const title = document.createElement('h3');
        title.textContent = product.name;
        const desc = document.createElement('p');
        desc.textContent = product.description || '';
        const price = document.createElement('div');
        price.className = 'ProductCard-price';
        price.textContent = product.price || '';
        const currency = document.createElement('span');
        currency.textContent = 'تومان';
        price.appendChild(currency);

        body.appendChild(title);
        body.appendChild(desc);
        body.appendChild(price);

        card.appendChild(imgWrap);
        card.appendChild(body);
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
});











