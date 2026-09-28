# Design Document &mdash; Heta Patel's Personal Homepage

## 1. Project description

This project is a personal homepage for Heta Patel, a graduate student
pursuing an MS in Computer Science at Northeastern University's Khoury
College of Computer Sciences. The goals of the site are to:

- Give a quick, honest introduction to who I am and what I study.
- Show a running record of coursework and academic projects.
- Share a few things outside of class &mdash; photography, cooking, and
  languages &mdash; through an interactive gallery.
- Satisfy the technical requirements of CS 5610 Project 1: a static,
  front-end-only site built with vanilla HTML5, CSS3, and ES6+ JavaScript,
  with an original creative component and a page whose content is openly
  AI-generated.

The intended audience is primarily course staff reviewing the assignment,
and secondarily anyone who might land on the page from a resume or LinkedIn
link &mdash; classmates, potential collaborators, or recruiters.

## 2. User personas

### Persona 1 &mdash; Prof. Alan Reyes, course instructor

- **Role:** Teaches CS 5610 and grades Project 1 submissions.
- **Goals:** Quickly confirm the site meets the rubric &mdash; correct file
  structure, working navigation, an original component, a disclosed
  AI-generated page &mdash; without digging through the code to find basic
  information.
- **Frustrations:** Homepages that hide the required elements, or that are
  visually cluttered enough to make grading slow.
- **How the site serves him:** Clear navigation labels (including one
  literally called "Written with AI"), a README with a build guide and a
  GenAI-use section, and a homepage that states who the author is within
  the first screen.

### Persona 2 &mdash; Priya Shah, a Khoury College classmate

- **Role:** A fellow MS CS student in a different section, browsing
  classmates' homepages for project ideas and to see what people are
  working on.
- **Goals:** Get a sense of Heta's coursework and interests quickly, and
  possibly find something to talk about (a shared course, a shared hobby).
- **Frustrations:** Homepages that are just a resume PDF wrapped in HTML,
  with no personality.
- **How the site serves her:** The Work page groups projects by course with
  short, readable descriptions instead of a bare list, and the Interests
  page gives her something to connect over beyond coursework.

### Persona 3 &mdash; Devraj Mehta, a recruiter following a shared link

- **Role:** Technical recruiter who received the homepage link after a
  networking conversation.
- **Goals:** Understand Heta's background and technical experience in
  under a minute, on a phone, without downloading anything.
- **Frustrations:** Sites that don't work on mobile, or that require
  clicking through several pages to find basic facts (school, degree,
  focus area).
- **How the site serves him:** A responsive layout that reflows to a single
  column on narrow screens, and a homepage hero that states the program,
  university, and background in the first paragraph.

## 3. User stories

1. **As course staff**, I want to see the author's name and the page's
   purpose immediately on the homepage, so that I can start grading without
   hunting for basic information.
2. **As course staff**, I want a page that is clearly labeled and disclosed
   as AI-generated, so that I can verify the assignment's GenAI-disclosure
   requirement is met.
3. **As a classmate**, I want to browse Heta's coursework by project, so
   that I can compare notes on courses we've both taken.
4. **As a classmate**, I want to see non-academic interests, so that I have
   something to talk about beyond schoolwork.
5. **As a recruiter on my phone**, I want the layout to remain readable and
   usable on a narrow screen, so that I don't have to switch to a desktop to
   read it.
6. **As any visitor**, I want to toggle between light and dark mode, so
   that I can read comfortably regardless of the time of day or my device
   settings, and I want that choice remembered on my next visit.
7. **As any visitor**, I want to interact with the photography gallery
   (click through frames, use arrow keys), so that the "interests" page
   feels like more than a static list.

## 4. Design mockups

Wireframes for the three main page types, sketched before implementation.
(Desktop widths shown; all layouts collapse to a single column under
~720px, as implemented in `css/style.css`.)

### Homepage

![Homepage wireframe: header with nav and dark mode toggle, hero section with heading, lede text, two buttons and an aperture illustration, a three-card "background" grid, a contact strip, and a footer](images/mockups/mockup-home.svg)

The hero pairs a short, direct headline with the aperture illustration to
avoid a wall of text on first load. The three background cards break up
"who I am" into scannable chunks rather than one paragraph. A contact strip
above the footer was added after the first draft, since none of the three
personas could easily find a way to reach out.

### Work page

![Work page wireframe: page title and intro, followed by a vertical timeline of project entries with course label, title, description, and tag chips](images/mockups/mockup-work.svg)

A left-rail timeline was chosen over a card grid because projects here have
a natural chronological/course order, and a single column reads better on
mobile than a multi-column card layout would.

### Interests page

![Interests page wireframe: page title and intro, a dark contact-sheet strip of six photo frames with one enlarged and a status line below it, and three interest cards for cooking, languages, and photography](images/mockups/mockup-interests.svg)

The contact sheet sits above the fold since it's the page's original
component; the three static interest cards below give context for visitors
who don't interact with the gallery at all.
