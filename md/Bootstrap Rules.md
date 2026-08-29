# Bootstrap Rules

## Version

```text
Bootstrap 5.3.6
```

Only this version should be assumed.

---

## Bootstrap First

When Bootstrap already provides the required layout or utility, prefer Bootstrap.

Examples:

```text
container
row
col-*
d-flex
align-items-*
justify-content-*
gap-*
p-*
m-*
text-*
w-*
h-*
```

---

## Custom CSS

Use custom CSS for project-specific design.

Do not recreate Bootstrap utilities unnecessarily.

---

## Existing Overrides

The project already overrides Bootstrap behavior in places.

Examples include:

- navbar styling
- container widths
- responsive behavior
- typography
- buttons
- forms

These overrides are intentional unless proven otherwise.

---

## Container

The project uses custom large-screen container widths.

Existing behavior includes:

```text
1400px → 1320px
1600px → 1500px
1800px → 1600px
2600px → 2000px
```

Do not remove these custom rules without a specific reason.

---

## Navbar

The existing navbar combines Bootstrap's navbar system with custom project classes.

Do not replace the navbar with a completely different implementation unless explicitly requested.

---

## Dark Mode

The project already has its own CSS-variable-based theme system.

Do not blindly replace it with Bootstrap's color mode system.

Bootstrap dark-mode utilities may be used only when they are compatible with the existing theme architecture.