---

version: beta
name: Nabilla Portfolio Design System
description: Modern portfolio inspired by Meta's design language but redesigned for a Frontend Developer portfolio. Focus on readability, project showcase, clean whitespace, rounded components, and subtle interactions.

colors:
primary: "#2563EB"
secondary: "#7C3AED"
accent: "#60A5FA"
background: "#F8FAFC"
surface: "#FFFFFF"
surface-alt: "#F1F5F9"
text: "#0F172A"
text-secondary: "#64748B"
border: "#E2E8F0"
success: "#22C55E"

typography:
display:
fontFamily: "Inter"
fontSize: 64px
fontWeight: 700

heading:
fontFamily: "Inter"
fontSize: 36px
fontWeight: 700

subheading:
fontFamily: "Inter"
fontSize: 24px
fontWeight: 600

body:
fontFamily: "Inter"
fontSize: 16px
fontWeight: 400

rounded:
card: 24px
hero: 32px
button: 999px
badge: 999px

layout:
maxWidth: 1280px
sectionSpacing: 96px
cardGap: 24px

website:

navbar:
sticky: true
transparentAtTop: true
links:
- Home
- About
- Projects
- Experience
- Certificates
- Contact

hero:
layout: split
left:
greeting: true
titleLarge: true
subtitle: true
buttons:
- View Projects
- Download CV

```
right:
  profilePhoto: true
  softGradient: true
```

about:
cardStyle: minimal

skills:
layout: badges
categories:
- Frontend
- Mobile
- Tools

featuredProjects:

```
layout: bento-grid

card:
  screenshotLarge: true
  title: true
  description: true
  techStack: badges
  buttons:
    - Live Demo
    - GitHub
```

experience:
layout: vertical-timeline

certificates:
layout: responsive-grid

contact:
centered: true

components:

project-card:
radius: 24px
border: 1px solid #E2E8F0
background: "#FFFFFF"

button-primary:
background: "#2563EB"
color: white
radius: pill

button-secondary:
background: transparent
border: 1px solid #2563EB
color: "#2563EB"

badge:
radius: pill
background: "#DBEAFE"

animations:

page:
fadeIn: true

hero:
slideUp: true

cards:
hoverLift: true
hoverShadow: true

buttons:
scale: 1.03

scroll:
smooth: true

design_principles:

* Minimalistic
* Spacious
* Professional
* Project-first
* Accessibility
* Responsive
* Consistent spacing
* Soft shadows
* Modern typography
* Rounded interface

avoid:

* Heavy gradients
* Glassmorphism overuse
* Neumorphism
* Busy backgrounds
* Auto-playing animations
* Excessive motion

portfolio_content:

heroTitle: "Nabilla Putri Nuraini"

heroSubtitle: >
Frontend Developer &
Informatics Student

sections:

```
- About

- Skills

- Featured Projects

- Other Projects

- Experience

- Certificates

- Contact
```

projects:

featured:
- Athleon
- SiDoku
- Pomodoro Timer

other:
- Retail Analytics
- Unity Game
- Academic Projects

responsive:

desktop:
projects: 3-column

tablet:
projects: 2-column

mobile:
projects: 1-column
hero: stacked

overall_feeling:

Modern SaaS Portfolio

Clean

Elegant

Confident

Friendly

Recruiter-friendly

## Similar quality to Vercel, Linear, Stripe, and Framer portfolio websites.

The portfolio should prioritize project presentation over decorative elements. Every design decision should help recruiters quickly understand the developer's skills, experience, and technical capabilities. The interface should feel modern, lightweight, responsive, and polished while maintaining excellent readability and accessibility.
