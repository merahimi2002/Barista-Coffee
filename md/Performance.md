# Performance

## Principle

The website is static, therefore performance should be treated as a major advantage.

---

## JavaScript

Avoid unnecessary JavaScript.

Existing dependencies include:

```text
Bootstrap JS
Owl Carousel (runtime: local jQuery)
WOW.js
point.js
source.js
```

Do not add libraries for functionality that can be implemented with existing tools or native APIs.

---

## CSS

Avoid:

- duplicated CSS
- unnecessary overrides
- excessive specificity
- excessive `!important`
- unused component styles

Do not remove existing styles without verifying their usage.

---

## Images

Prefer:

```text
WebP
AVIF
```

when appropriate.

Use correctly sized images.

Do not serve unnecessarily large images.

---

## Loading

Non-critical scripts should use appropriate loading strategies such as:

```html
<script defer src="..."></script>
```

when compatible with their execution requirements.

Do not blindly add `defer` to scripts that depend on synchronous execution order.

---

## Animations

Do not create expensive continuous animations.

Prefer CSS transitions and the existing WOW/Animate system.

---

## External Resources

Avoid unnecessary:

- CDN dependencies
- tracking scripts
- external fonts
- third-party widgets

unless required by the project.

The existing local asset structure should be preferred where possible.