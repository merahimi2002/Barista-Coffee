# Project Conventions

## Directory Naming

Preserve existing directory names:

```text
Css/
js/
Image/
fonts/
```

Do not rename them casually.

---

## CSS Filename

The primary custom stylesheet is:

```text
Css/Style.css
```

Preserve the existing filename.

---

## JavaScript Filename

The primary custom JavaScript file is:

```text
js/source.js
```

---

## Naming Style

Existing project code contains mixed naming styles.

For NEW code, use descriptive names consistent with the surrounding component.

Do not rename legacy classes simply to enforce a new naming methodology.

---

## Existing Important Classes

Navbar:

```text
Navbar-class
SideNav
ChangeThemeBox
CustomColorPicker
ChangeColorBtn
ChangeColorBtn01
logo-header
```

Theme:

```text
ThemeBoxSwitch
checkbox
label
ball
```

Footer:

```text
footer-box
footer-address
footer-links
footer-contact
sm-list
copyright
```

Homepage / Hero Slider:

```text
HeroSection
HeroSlider
HeroSlide
HeroSlide-caption
HeroBtn
```

About Section:

```text
AboutSection
SectionTitr
AboutImage
AboutFeature
PrimaryBtn
```

Products Section:

```text
ProductsSection
ProductsIntro
ProductsTabs
ProductsCarousel
ProductCard
ProductCard-img
ProductCard-body
ProductCard-price
```

Articles Section:

```text
ArticlesSection
ArticleCard
ArticleCard-img
ArticleCard-body
ArticleCard-tag
ArticleCard-link
```

Contact Section (info-only — form removed by owner decision):

```text
ContactSection
ContactInfo
ContactInfo-list
```

Why Section:

```text
WhySection
WhyCard
```

Testimonials Section:

```text
TestimonialsSection
TestimonialsCarousel
TestimonialCard
TestimonialCard-stars
TestimonialCard-text
TestimonialCard-footer
TestimonialCard-avatar
TestimonialCard-meta
```

---

## Existing Important IDs

```text
navbarSupportedContent
ThemeBoxSwitchInput
firstColorInput
secondColorInput
```

---

## JavaScript Functions

Existing public functions include:

```text
changeColor()
changeColor01()
hexToRgb()
initProductsCarousel()
hideOwlClones()
```

source.js works with anonymous DOMContentLoaded listeners. The hero, product
and testimonials carousels are each initialized in their own listener and call
hideOwlClones() right after init (the contact-form submit handler was removed
together with the form — owner decision).

Do not rename them without updating every usage.

---

## CSS Variables

Use the existing variables:

```text
--first-color
--second-color
--white-custome
--black-custome
--radius-custome
```

---

## Font

Use:

```text
IRANSans
```

---

## Asset Paths

Follow the existing relative path convention.

Example:

```html
<link rel="stylesheet" href="Css/Style.css">
```

Do not change the case of directory names without reorganizing the project intentionally.