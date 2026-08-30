# SEO

## Language

Pages are Persian:

```html
<html lang="fa">
```

---

## Title

Every page must have a unique descriptive title.

Example:

```html
<title>کافه باریستا | صفحه اصلی</title>
```

Do not use generic titles such as:

```text
Home
Page
Website
```

---

## Meta Description

Each indexable page should have a meaningful Persian meta description.

---

## Headings

Maintain a logical heading hierarchy.

Use headings for structure, not only visual size.

---

## Links

Links should describe their destination.

Avoid generic link text when context is unclear.

---

## Images

New images require meaningful alt text when informative.

Do not copy:

```text
alt="pic"
```

for new content.

---

## Canonical

Use canonical URLs for indexable pages where appropriate.

---

## Open Graph

Public pages should use Open Graph metadata where appropriate.

---

## robots.txt

If the website is intended to be indexed, maintain an appropriate:

```text
robots.txt
```

---

## sitemap.xml

If the website has multiple public pages and search visibility is important, maintain:

```text
sitemap.xml
```

---

## Current Status

Both `robots.txt` and `sitemap.xml` exist at the project root.

- The site is a single public page (`index.html`), so the sitemap lists the root URL only.
- Both files currently use the placeholder domain `https://www.example.com/`.
- Before deploying, replace `www.example.com` in both files with the real domain.
- If a canonical URL / `og:url` is later added to `index.html`, it must use the same domain as the sitemap.


---

## Content Integrity

AI must never invent:

- statistics
- reviews
- customers
- awards
- certifications
- company claims
- addresses
- phone numbers
- prices

unless provided by the project owner.