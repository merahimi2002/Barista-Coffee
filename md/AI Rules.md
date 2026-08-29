# AI Rules

## Mandatory Workflow

Every task must follow:

```text
1. Read AGENTS.md
2. Read ALL /md/*.md files
3. Inspect existing implementation
4. Search for related classes / IDs / functions
5. Identify reusable patterns
6. Plan the change
7. Implement
8. Verify
```

---

## Existing Code First

Before creating anything new, search for:

- existing CSS classes
- existing components
- existing JavaScript functions
- existing IDs
- existing Bootstrap utilities
- existing animation classes
- existing theme variables

---

## Do Not Rewrite

Do not rewrite working code simply because a different architecture seems cleaner.

The project is already established.

---

## Do Not Introduce Frameworks

Do not introduce:

```text
React
Vue
Angular
Next.js
Tailwind
jQuery
```

unless explicitly requested.

---

## Do Not Introduce Duplicate Systems

Do not create a second:

- theme system
- color system
- animation system
- carousel system
- icon system
- typography system
- responsive system

when the project already has one.

---

## Theme

Always use the existing:

```text
--first-color
--second-color
--white-custome
--black-custome
```

system for theme-aware custom styling.

---

## Animations

Use the existing:

```text
WOW.js
Animate.css / newAnimate.css
```

system.

Do not add GSAP or another animation library unless explicitly requested.

---

## Carousel

Use Owl Carousel for carousel requirements.

Do not add Swiper or another carousel library.

---

## Icons

Use Bootstrap Icons 1.13.1.

---

## Bootstrap

Use Bootstrap 5.3.6.

Do not mix Bootstrap versions.

---

## HTML

Use semantic HTML5.

Preserve RTL:

```html
<html lang="fa">
```

---

## Accessibility

Every new interactive element must be:

- keyboard accessible
- focusable when appropriate
- semantically correct
- properly labeled

---

## Responsive

Every new UI component must be checked across:

```text
mobile
tablet
desktop
large desktop
ultra-wide
```

---

## SEO

For new public pages:

- create a unique title
- create a useful meta description
- maintain heading hierarchy
- use descriptive links
- use meaningful image alt text

---

## Performance

Do not add a dependency for a problem that can be solved with:

```text
HTML
CSS
Bootstrap
Vanilla JavaScript
```

---

## AI Content

Do not invent business information.

If information is missing, use a clearly identifiable placeholder rather than fabricating facts.

---

## Refactoring

Only refactor code when:

- requested
- required to solve the task
- required for accessibility
- required for security
- required for performance
- required to maintain consistency

---

## Final Verification

Before reporting completion:

### HTML

- semantic
- valid
- RTL
- accessible

### CSS

- responsive
- theme-compatible
- consistent with existing variables
- no unnecessary duplication

### JavaScript

- no unnecessary dependencies
- no broken existing functionality
- no debug code

### UI

- Light Mode works
- Dark Mode works
- custom colors work
- responsive behavior works
- animations work

### SEO

- title
- description
- headings
- alt text

---

## Golden Rule

Never assume.

Always:

```text
Inspect → Understand → Reuse → Modify → Verify
```