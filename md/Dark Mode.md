# Dark Mode

## Existing Implementation

Dark mode currently uses CSS Custom Properties.

The main variables are:

```css
--white-custome
--black-custome
```

Light Mode:

```text
--white-custome: 255, 255, 255
--black-custome: 0, 0, 0
```

Dark Mode:

```text
--white-custome: 0, 0, 0
--black-custome: 255, 255, 255
```

---

## Theme Switch

The existing switch uses:

```text
ThemeBoxSwitch
ThemeBoxSwitchInput
```

and the checkbox state controls the theme.

Do not replace this mechanism unless explicitly requested.

---

## Color Variables

Primary project colors:

```css
--first-color
--second-color
```

These variables are also changed dynamically.

Therefore, new UI should consume:

```css
rgb(var(--first-color))
rgb(var(--second-color))
```

where appropriate.

---

## Custom Color Picker

The project supports user-selected colors through:

```text
firstColorInput
secondColorInput
```

JavaScript converts HEX values into RGB components.

The resulting values are stored in:

```text
--first-color
--second-color
```

Do not break this functionality.

---

## Preset Themes

Existing preset functions include:

```text
changeColor()
changeColor01()
```

These are called directly from HTML.

Do not rename or remove them without updating all usages.

---

## New Components

Every new component must be tested in:

```text
Light Mode
Dark Mode
Custom Color 1
Custom Color 2
```

---

## Hardcoded Colors

Avoid hardcoding theme-dependent colors.

Prefer:

```css
rgb(var(--first-color))
rgb(var(--second-color))
rgb(var(--white-custome))
rgb(var(--black-custome))
```

for elements that must respond to the project's theme system.

---

## Important

Do NOT introduce:

```text
[data-bs-theme]
```

as a replacement for the existing theme system unless explicitly requested.

The existing theme architecture has priority.