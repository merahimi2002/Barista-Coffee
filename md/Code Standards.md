# Code Standards

## HTML

Use HTML5.

Use lowercase elements and attributes.

Use double quotes.

Use semantic elements whenever appropriate.

---

## RTL

All Persian pages must remain RTL.

```html
<html lang="fa">
```

Do not remove the language declaration.

---

## Classes

Follow the project's existing naming style.

Existing examples:

```text
Navbar-class
SideNav
ChangeThemeBox
CustomColorPicker
ChangeColorBtn
HeroSection
footer-box
footer-address
footer-links
footer-contact
```

When adding new classes, use clear descriptive names and remain consistent with the existing project.

Do not rename existing classes merely to impose a new naming methodology.

---

## IDs

IDs are allowed for:

- JavaScript hooks
- form labels
- accessibility relationships
- unique interactive components

Existing important IDs include:

```text
navbarSupportedContent
ThemeBoxSwitch
ThemeBoxSwitchInput
firstColorInput
secondColorInput
```

Search for usages before changing them.

---

## CSS

Use the existing CSS variable system.

Current core variables:

```css
--first-color
--second-color
--white-custome
--black-custome
--radius-custome
```

Colors are stored as RGB components:

```css
--first-color: 30, 64, 47;
```

and consumed as:

```css
rgb(var(--first-color))
```

Preserve this convention.

---

## CSS Specificity

Avoid unnecessary:

```css
!important
```

However, do not remove an existing `!important` rule without verifying that the Bootstrap interaction still works.

---

## JavaScript

Use:

```js
const
let
```

Do not use `var` for new code.

Use:

```js
addEventListener()
```

instead of inline event handlers for new functionality.

Existing inline handlers should not be removed without checking compatibility.

---

## Existing Inline Functions

The project currently uses functions such as:

```js
changeColor()
changeColor01()
```

These are referenced directly from HTML.

Do not convert them into inaccessible local scopes without updating the HTML.

---

## DOM Safety

Before calling methods on an element:

```js
element.addEventListener(...)
```

verify that the element exists when the script can execute on pages where that element may be absent.

---

## Comments

Comments should explain important reasoning or project-specific behavior.

Avoid comments that simply restate the code.