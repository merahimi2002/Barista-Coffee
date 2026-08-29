# Icons

## Library

```text
Bootstrap Icons 1.13.1
```

This is the project's standard icon library.

---

## Existing Usage

Icons are used through:

```html
<i class="bi bi-moon"></i>
<i class="bi bi-sun"></i>
<i class="bi bi-instagram"></i>
<i class="bi bi-telegram"></i>
<i class="bi bi-whatsapp"></i>
<i class="bi bi-twitter"></i>
<i class="bi bi-geo-alt-fill"></i>
<i class="bi bi-phone"></i>
<i class="bi bi-envelope-at"></i>
```

Follow this convention.

---

## Accessibility

Decorative icons should use:

```html
aria-hidden="true"
```

When an icon is the only control indicator, provide an accessible label.

Example:

```html
<button type="button" aria-label="بستن">
    <i class="bi bi-x-lg" aria-hidden="true"></i>
</button>
```

---

## Do Not

Do not add:

- Font Awesome
- Material Icons
- another icon library
- random SVG libraries

unless explicitly requested.