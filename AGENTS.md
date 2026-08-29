# AGENTS.md

# AI Agent Instructions

This document is the entry point for all AI agents working on this project.

---

## 1. MANDATORY DOCUMENTATION RULE

Before creating, modifying, refactoring, moving, or deleting ANY project file:

### FIRST:

Go to the `/md` directory.

Read ALL `.md` files inside `/md`.

The `/md` directory is the project's development documentation and source of truth.

Do NOT start implementation before reading the `/md` documentation.

---

## 2. EXISTING PROJECT MUST BE PRESERVED

This is an existing static website.

Do NOT replace the existing architecture with a new framework or architecture.

Preserve the current:

- HTML structure
- CSS architecture
- JavaScript behavior
- Bootstrap integration
- RTL system
- Theme system
- color system
- animation system
- carousel system
- typography system

unless the user explicitly asks for a change.

---

## 3. TECHNOLOGY STACK

The project currently uses:

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3.6
- Bootstrap Icons 1.13.1
- Owl Carousel
- WOW.js
- Animate.css / project animation styles
- IRANSans

Do NOT introduce:

- React
- Vue
- Angular
- Next.js
- Tailwind CSS
- jQuery
- another icon library
- another CSS framework

unless explicitly requested.

---

## 4. MANDATORY PROJECT DOCUMENTS

Read all of the following before implementation:

```text
/md/PROJECT-CONTEXT.md
/md/TECH-STACK.md
/md/ARCHITECTURE.md
/md/CODE-STANDARDS.md
/md/CONVENTIONS.md
/md/UI-STYLE.md
/md/BOOTSTRAP.md
/md/ICONS.md
/md/RESPONSIVE.md
/md/DARK-MODE.md
/md/ACCESSIBILITY.md
/md/SEO.md
/md/PERFORMANCE.md
/md/AI-RULES.md
```

---

## 5. EXISTING CODE HAS PRIORITY

When documentation and existing code define an established pattern:

Follow the existing project pattern.

Do not introduce a new pattern simply because it is more modern.

Modernization is allowed only when:

- explicitly requested
- necessary to fix a problem
- necessary for accessibility/security/performance
- clearly compatible with the existing project

---

## 6. RTL

The project is Persian and RTL.

The document root uses:

```html
<html lang="fa">
```

and the website uses:

```css
direction: rtl;
text-align: right;
```

Do not change the direction to LTR unless explicitly requested.

---

## 7. DESIGN SYSTEM

The project uses CSS Custom Properties for its color system.

The established variables include:

```css
--first-color
--second-color
--white-custome
--black-custome
--radius-custome
```

Do not replace this system with another color architecture without explicit approval.

---

## 8. DARK MODE

Dark mode is implemented through the existing CSS variable system.

The theme switch currently changes:

```text
--white-custome
--black-custome
```

Do not introduce an independent dark-mode implementation unless explicitly requested.

Every new component must work in both:

- Light Mode
- Dark Mode

---

## 9. TYPOGRAPHY

The project uses IRANSans.

Do not introduce another primary Persian font unless explicitly requested.

Existing font weights must be respected.

---

## 10. BOOTSTRAP

Bootstrap 5.3.6 is the primary UI framework.

Use Bootstrap utilities and components when appropriate.

However, do NOT remove or replace existing project-specific CSS merely because Bootstrap provides a similar feature.

---

## 11. ICONS

Use Bootstrap Icons 1.13.1.

Do not introduce another icon library unless explicitly requested.

---

## 12. ANIMATIONS

The project already uses:

- WOW.js
- Animate.css / project animation styles

Existing animation behavior must be preserved.

Do not introduce another animation framework unless explicitly requested.

Animations must remain subtle and performant.

---

## 13. CAROUSELS

The project uses Owl Carousel.

Do not replace Owl Carousel with another carousel library unless explicitly requested.

---

## 14. JAVASCRIPT

Use Vanilla JavaScript.

Do not introduce jQuery or frontend frameworks.

Existing global functions and DOM hooks may be part of the current architecture.

Before renaming or removing a function/class/id, search the entire project for its usage.

---

## 15. RESPONSIVE DESIGN

The project uses Bootstrap responsive breakpoints plus project-specific responsive rules.

The existing custom container behavior includes large-screen breakpoints.

Do not remove or override these rules without understanding their purpose.

Every new component must be checked on:

```text
mobile
tablet
desktop
large desktop
ultra-wide
```

---

## 16. ACCESSIBILITY

New UI must follow accessible HTML5 practices.

Pay special attention to:

- keyboard navigation
- labels
- focus states
- buttons vs links
- meaningful alt text
- color contrast
- accessible theme switch
- accessible navigation
- reduced motion

Do not break existing functionality while improving accessibility.

---

## 17. SEO

Every public page must have appropriate:

- `<title>`
- meta description
- canonical URL where required
- semantic headings
- descriptive links
- image alt text
- Open Graph metadata where appropriate

Do not invent business claims or SEO content.

---

## 18. PERFORMANCE

Prefer:

- optimized images
- minimal JavaScript
- reusable CSS
- local assets where appropriate
- deferred non-critical scripts
- lazy loading for suitable images

Do not add dependencies unnecessarily.

---

## 19. BEFORE FINISHING

After implementation:

1. Check HTML.
2. Check CSS.
3. Check JavaScript.
4. Check mobile layout.
5. Check desktop layout.
6. Check Light Mode.
7. Check Dark Mode.
8. Check animations.
9. Check accessibility.
10. Check SEO where relevant.
11. Remove debug code.
12. Confirm existing functionality still works.

---

## 20. ABSOLUTE RULE

The AI must follow this workflow:

```text
Read /md
↓
Inspect existing code
↓
Find reusable patterns
↓
Plan
↓
Implement
↓
Verify
```

Never:

```text
Guess
↓
Generate
↓
Hope
```

## 21. DOCUMENTATION MAINTENANCE

The `/md` directory is a living project documentation system.

AI agents are allowed and expected to update the relevant `.md` files when the implementation introduces a meaningful change to:

* project architecture
* technology stack
* coding standards
* naming conventions
* UI/UX rules
* design system
* Bootstrap usage
* icon usage
* responsive behavior
* dark mode
* accessibility rules
* SEO rules
* performance rules
* JavaScript architecture
* reusable components or patterns
* asset structure
* project workflow

### When to update documentation

If a task changes an existing project rule or introduces a new reusable pattern, update the relevant documentation file in `/md`.

Examples:

```text
New theme behavior
→ /md/DARK-MODE.md

New responsive convention
→ /md/RESPONSIVE.md

New CSS/JS naming convention
→ /md/CONVENTIONS.md
→ /md/CODE-STANDARDS.md

New reusable UI pattern
→ /md/UI-STYLE.md
→ /md/ARCHITECTURE.md

New dependency
→ /md/TECH-STACK.md

New SEO rule
→ /md/SEO.md

New accessibility rule
→ /md/ACCESSIBILITY.md
```

### Important

Do NOT update documentation for trivial implementation details that do not affect project conventions.

Do NOT create unnecessary documentation.

When updating documentation:

1. Preserve the existing structure.
2. Keep information accurate.
3. Remove outdated rules when necessary.
4. Do not contradict existing documentation.
5. Update only the relevant `.md` files.
6. Keep documentation concise and actionable.

### Documentation synchronization rule

The implementation and `/md` documentation must remain synchronized.

If the code changes a documented project rule, update the documentation in the same task.

The final state should always follow:

```text
Code ↔ Documentation
```

Neither should become outdated relative to the other.


## Golden Rule

Never assume.

Always:

```text
Read /md
    ↓
Inspect
    ↓
Understand
    ↓
Reuse
    ↓
Modify
    ↓
Update /md when necessary
    ↓
Verify
```

The `/md` documentation must evolve with the project.

If the project changes in a way that affects a documented rule, update the relevant documentation before completing the task.
