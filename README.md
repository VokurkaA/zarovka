<p align="center">
  <a href="https://zarovka.vercel.app/" rel="noopener">
    <img width=200px height=200px src="public\favicon.svg" alt="Zarovka">
  </a>
</p>

<h3 align="center">Žárovka</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/VokurkaA/zarovka.svg)](https://github.com/VokurkaA/zarovka/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/VokurkaA/zarovka.svg)](https://github.com/VokurkaA/zarovka/pulls)

</div>

---

<p align="center">
  Žárovka is an architectonic website designed to showcase the work and profiles of architects. You can learn about the team, view their projects, and contact them for inquiries.
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Authors](#authors)

## 🧐 About <a name="about"></a>

This website is a school project designed to showcase my work. It expands on the original website of Žárovka architekti and allows users to explore their team, view their work, and contact them directly. The website is designed to provide a seamless and informative experience for anyone interested.

## 🏁 Getting Started <a name="getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- React

### Installing

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/VokurkaA/zarovka.git
cd zarovka
```

Install the dependencies:

```bash
npm install
```

Run the project:

```bash
npm start
```

This will start the development server and you can view the project at `http://localhost:3000`.

## 🎈 Usage <a name="usage"></a>

After running the project, navigate to `http://localhost:3000` in your browser. You can explore the different sections of the website, including:

- **About Us**: Learn about the team members.
- **Projects**: View the architectural projects.
- **Contact**: Get in touch with the team.

## 🚀 Deployment <a name="deployment"></a>

To deploy the project on a live system, you can use platforms like Vercel, Netlify, or any other static site hosting service. The project is already configured for deployment with Vercel.

1. Commit all changes to your repository.
2. Push to GitHub.
3. Link your repository with your Vercel account and deploy.

You can visit the live site at [Žárovka](https://zarovka.vercel.app/).

## ⛏️ Built Using <a name="built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [Node.js](https://nodejs.org/en/) - Server Environment
- [Puppeteer](https://pptr.dev/) - Web Scraping (used in the Scrape part)
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vercel](https://vercel.com/) - Hosting
- Other npm packages as listed in `package.json`.

## ✍️ Authors <a name="authors"></a>

- [@VokurkaA](https://github.com/VokurkaA) - Website design and development.

```
Zarovka
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.svg
│  ├─ index.html
│  └─ robots.txt
├─ README.md
├─ Scrape
│  ├─ data.json
│  ├─ final.json
│  ├─ GetLinks.js
│  ├─ img
│  ├─ Parse.js
│  ├─ places.json
│  ├─ Scrape.js
│  └─ test.js
├─ src
│  ├─ App.js
│  ├─ components
│  │  ├─ footer
│  │  │  ├─ Footer.js
│  │  │  └─ ico
│  │  │     ├─ email.js
│  │  │     ├─ facebook.js
│  │  │     └─ instagram.js
│  │  ├─ header
│  │  │  ├─ Header.js
│  │  │  └─ ico
│  │  │     ├─ cancel.js
│  │  │     ├─ hamburger.js
│  │  │     └─ logo.js
│  │  └─ ScrollToTop.js
│  ├─ i18n
│  │  └─ index.js
│  ├─ index.js
│  ├─ locales
│  │  ├─ cz
│  │  │  └─ translation.json
│  │  └─ en
│  │     └─ translation.json
│  ├─ output.css
│  ├─ pages
│  │  ├─ contact
│  │  │  ├─ AboveFold.js
│  │  │  ├─ CCard
│  │  │  │  ├─ CcLarge.js
│  │  │  │  └─ CcSmall.js
│  │  │  ├─ Contact.js
│  │  │  ├─ ContactInfo.js
│  │  │  ├─ ico
│  │  │  │  ├─ arrow.js
│  │  │  │  ├─ close.js
│  │  │  │  ├─ email.js
│  │  │  │  ├─ icso.js
│  │  │  │  ├─ phone.js
│  │  │  │  └─ user.js
│  │  │  └─ img
│  │  │     └─ group.webp
│  │  ├─ gallery
│  │  │  ├─ AboveFold.js
│  │  │  ├─ Gallery.js
│  │  │  ├─ ico
│  │  │  │  ├─ card.js
│  │  │  │  ├─ chip.js
│  │  │  │  ├─ dot.js
│  │  │  │  ├─ dropDown.js
│  │  │  │  ├─ home.js
│  │  │  │  ├─ next.js
│  │  │  │  └─ yearFilterChip.js
│  │  │  ├─ img
│  │  │  ├─ LgGallery.js
│  │  │  ├─ places.json
│  │  │  └─ Project.js
│  │  ├─ home
│  │  │  ├─ AboutUs.js
│  │  │  ├─ AboveFold.js
│  │  │  ├─ ContactUs.js
│  │  │  ├─ Home.js
│  │  │  ├─ ico
│  │  │  │  ├─ facebook.js
│  │  │  │  ├─ facebook_reviews.js
│  │  │  │  ├─ google.js
│  │  │  │  ├─ google_reviews.js
│  │  │  │  ├─ quote.js
│  │  │  │  └─ star.js
│  │  │  ├─ img
│  │  │  │  ├─ bgimg.webp
│  │  │  │  ├─ house_1.webp
│  │  │  │  └─ house_2.webp
│  │  │  ├─ Reviews.js
│  │  │  └─ WhyUs.js
│  │  └─ not found
│  │     ├─ FOF.js
│  │     └─ NotFound.js
│  ├─ people.info.json
│  ├─ reportWebVitals.js
│  └─ style.css
└─ tailwind.config.js
```
