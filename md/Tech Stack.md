# Tech Stack

## Core

This is a static Persian RTL website.

### Technologies

```text
HTML5
CSS3
Vanilla JavaScript
```

---

## UI Framework

```text
Bootstrap 5.3.6
```

Bootstrap is used for:

- grid
- containers
- responsive utilities
- navbar
- buttons
- forms
- layout utilities
- spacing
- common UI components

---

## Icons

```text
Bootstrap Icons 1.13.1
```

Bootstrap Icons is the project's primary icon system.

---

## Carousel

```text
Owl Carousel
```

Existing carousel functionality should remain based on Owl Carousel.

Do not replace it without explicit instruction.

Owl Carousel is jQuery-based. Its runtime is provided locally:

```text
js/jquery.min.js (jQuery 3.7.1)
```

jQuery is loaded only as Owl Carousel's runtime dependency. Project code outside Owl initializations stays Vanilla JavaScript.

---

## Animation

The project uses:

```text
WOW.js
Animate.css / newAnimate.css
```

WOW.js is currently initialized through:

```js
new WOW().init();
```

Existing WOW classes such as:

```text
wow
animate__animated
animate__fadeInUp
```

must remain compatible.

---

## Typography

Primary font:

```text
IRANSans
```

The project contains multiple IRANSans weights:

```text
200
300
400
500
700
900
```

Use the appropriate existing font weight instead of introducing a new font.

---

## Assets

Current asset conventions include:

```text
Css/
js/
Image/
fonts/
```

Respect the existing directory naming convention unless the project is intentionally reorganized.

---

## External Dependencies

Do not add a dependency when the requirement can reasonably be implemented with:

1. HTML
2. CSS
3. Bootstrap
4. existing project JavaScript
5. Vanilla JavaScript

Every new dependency requires a clear justification.