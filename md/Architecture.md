# Architecture

## Project Type

Static multi-page website.

The architecture is based on:

```text
HTML
CSS
Vanilla JavaScript
```

---

## Existing Directory Convention

The project currently follows:

```text
/
├── Css/
│   ├── bootstrap.min.css
│   ├── bootstrap-Icon.min.css
│   ├── owl.carousel.min.css
│   ├── newAnimate.css
│   └── Style.css
│
├── js/
│   ├── bootstrap.min.js
│   ├── jquery.min.js
│   ├── owl.carousel.min.js
│   ├── point.js
│   ├── wow.min.js
│   ├── product.js
│   └── source.js
│
├── Image/
├── fonts/
│
├── index.html
└── ...
```

Preserve this convention.

Do not rename:

```text
Css → css
Image → images
```

unless the project is intentionally migrated.

---

## HTML Structure

Pages should follow semantic HTML5:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Existing shared sections such as the navbar and footer should remain structurally consistent across pages.

---

## Navbar

The project already has an established navbar structure:

```text
Navbar-class
container
row
navbar
SideNav
logo-header
```

When modifying the navbar, preserve existing hooks and behavior unless explicitly redesigning it.

---

## Theme Controls

Theme controls are currently part of the navbar area.

Important existing hooks:

```text
ChangeThemeBox
CustomColorPicker
ChangeColorBtn
ChangeColorBtn01
ThemeBoxSwitch
ThemeBoxSwitchInput
```

Do not rename or remove these without checking JavaScript dependencies.

---

## Footer

The footer follows a reusable structure:

```text
footer
footer-box
footer-address
footer-links
footer-contact
footer-hours
sm-list
copyright
```

New pages should reuse the same footer structure.

---

## CSS

The primary custom stylesheet is:

```text
Css/Style.css
```

Do not create multiple CSS files for every small component.

Create additional stylesheets only when there is a clear architectural reason.

---

## JavaScript

The project currently centralizes custom JavaScript in:

```text
js/source.js
```

The one exception is `js/product.js` — a data-only file (the PRODUCTS menu
array) that is loaded before source.js and consumed by renderProducts().
Before creating another JavaScript file, check whether the functionality
belongs in an existing file.

---

## Page Components

For repeated UI:

- identify existing HTML pattern
- reuse the structure
- modify content
- avoid creating visually different duplicates

Consistency across pages is more important than creating unique markup for every page.