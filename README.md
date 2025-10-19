# JoyDelight Grocery Store

A modern, responsive e-commerce grocery store built with React and Vite, featuring a clean UI with Tailwind CSS.

## 📸 Screenshot

![JoyDelight Grocery Store](./screenshot.png)

_Screenshot showing the modern, green-themed interface with hero banner, featured products, and clean navigation_

## 🛒 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, green-themed interface with Tailwind CSS
- **Product Catalog**: Browse and view featured products with images
- **Navigation**: Easy navigation between Home, Products, About, and Contact pages
- **Contact Form**: Interactive contact form with form validation
- **Hero Banner**: Eye-catching banner with background image
- **Product Cards**: Beautiful product cards with add-to-cart functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd grocery-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your images**
   Place your product images in the `public/` directory with these exact names:

   - `Apple.jpeg`
   - `Banana.jpeg`
   - `orange.jpeg`
   - `Bread.jpeg`
   - `Cheese.jpeg`
   - `Eggs.jpeg`
   - `Tomato.jpeg`
   - `background image.jpeg` (for hero banner)

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
grocery-store/
├── public/
│   ├── image/              # Product images
│   ├── Apple.jpeg         # Product images
│   ├── Banana.jpeg
│   ├── background image.jpeg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Footer.jsx     # Footer component
│   │   └── ProductCard.jsx # Product card component
│   ├── Home.jsx           # Home page
│   ├── Products.jsx       # Products page
│   ├── About.jsx          # About page
│   ├── Contact.jsx        # Contact page
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   ├── index.css          # Global styles
│   └── App.css            # App-specific styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Technologies Used

- **React 19.1.1** - Frontend framework
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📱 Pages

### Home Page

- Hero banner with background image
- Featured products grid
- Call-to-action button

### Products Page

- Complete product catalog
- Product cards with images and prices
- Add to cart functionality

### About Page

- Store information
- Mission statement
- Why choose us section

### Contact Page

- Contact form with validation
- Name, email, and message fields
- Form submission handling

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

### Adding New Products

1. Add product images to `public/` directory
2. Update the `featuredProducts` array in `src/Home.jsx`
3. Update the `products` array in `src/Products.jsx`

### Changing Colors

Modify the Tailwind classes in components:

- Primary green: `bg-green-500`, `bg-green-600`
- Hover states: `hover:bg-green-700`
- Text colors: `text-green-600`

### Updating Store Information

- Store name: Update "JoyDelight" in `src/components/Navbar.jsx`
- Footer: Modify `src/components/Footer.jsx`
- About content: Edit `src/About.jsx`

## 📸 Image Requirements

- **Format**: JPEG or PNG
- **Hero Banner**: Recommended size 1200x600px
- **Product Images**: Recommended size 300x300px
- **File Names**: Must match exactly as specified in the code

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact us through the contact form on the website or create an issue in the repository.

---

**JoyDelight Store** - Fresh groceries delivered to your doorstep! 🛒✨
