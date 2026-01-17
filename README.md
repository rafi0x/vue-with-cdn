# Vue with CDN

A lightweight Vue 3 application built without a build system, using CDN links for Vue, Vue Router, and other dependencies.  This project demonstrates how to create a modular Vue application with routing and components using vanilla JavaScript and ES6 modules.

## Features

- ✨ **No Build System Required** - Uses Vue 3 via CDN
- 🚀 **Vue Router** - Client-side routing with hash-based navigation
- 🧩 **Component-Based Architecture** - Modular components with separate template files
- 🎠 **Owl Carousel Integration** - Responsive slider component
- 📱 **Responsive Design** - Mobile-friendly layout
- 🔧 **Zero Configuration** - Just open and run in your browser

## Project Structure

```
vue-with-cdn/
├── index.html              # Main HTML entry point
├── router. js               # Vue Router configuration
├── css/
│   ├── style.css          # Custom styles
│   ├── owl. carousel.min.css
│   └── owl.theme.default.min.css
├── js/
│   └── owl.carousel.min.js
├── compenents/            # Reusable components
│   ├── CompOne/
│   │   ├── index.js
│   │   └── template.html
│   ├── CompTwo/
│   │   ├── index.js
│   │   └── template.html
│   └── Slider/
│       ├── index.js
│       └── template.html
└── pages/                 # Page components
    ├── Home/
    │   ├── index.js
    │   └── template.html
    ├── PageOne/
    │   ├── index.js
    │   └── template. html
    └── PageTwo/
        ├── index.js
        └── template.html
```

## Getting Started

### Prerequisites

- A modern web browser with ES6 module support

### Installation & Usage

1. Clone the repository:
```bash
git clone https://github.com/rafi0x/vue-with-cdn.git
cd vue-with-cdn
```

2. Simply open `index.html` in your browser: 
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" your preferred browser

That's it! No server, no build tools, no npm install required. 🎉

## Technologies Used

- **Vue 3** - Progressive JavaScript framework (via CDN)
- **Vue Router 4** - Official router for Vue.js (via CDN)
- **jQuery 3.6.2** - For DOM manipulation and Owl Carousel
- **Owl Carousel** - Touch-enabled responsive carousel slider
- **ES6 Modules** - Native JavaScript modules for component organization

## How It Works

### Component Structure

Each component consists of two files:
- `index.js` - Component logic and configuration
- `template.html` - Component template

Example component (`compenents/CompTwo/`):

```javascript
// index.js
const template = await fetch("compenents/CompTwo/template. html");
export default {
    template:  await template.text(),
    props: ["data"]
}
```

```html
<!-- template.html -->
<div>
    <h1>Component Two.  {{data}}</h1>
</div>
```

### Routing

The application uses Vue Router with hash-based routing:

- `/` - Home page with slider
- `/1` - Page One with CompOne
- `/2` - Page Two with CompTwo
