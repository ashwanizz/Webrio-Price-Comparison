# 🛍️ Webrio

Webrio is a modern, responsive web application designed to help users find the best deals on their favorite products. By comparing prices across major e-commerce platforms like Amazon and Flipkart, Webrio empowers shoppers to make informed purchasing decisions and save money effortlessly. 

The application provides a seamless browsing experience with detailed product pages, intuitive search functionality, and curated top deals across various categories.

---

## ✨ Features

- **Product Browsing**: Explore a wide range of products across multiple categories (Smartphones, Laptops, Shoes, Headphones, Smartwatches, Clothing, and Electronics).
- **Price Comparison**: Instantly compare prices between Amazon and Flipkart for every product.
- **Search Functionality**: Quickly find specific products using the built-in search bar.
- **Top Deals**: Discover curated deals and discounts on the dedicated Top Deals page.
- **Responsive Design**: A fully responsive interface that looks great on desktops, tablets, and mobile devices.
- **Dark/Light Mode**: Built-in support for theme toggling to suit your viewing preference.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, React Router v7 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | Radix UI, Framer Motion, Lucide React, Embla Carousel |
| **Language** | TypeScript |
| **Build Tool** | Vite |

---

## 📁 Project Structure

```
Webrio/
├── public/                 # Static assets
└── src/
    ├── components/         # Reusable React components
    │   ├── ui/             # Generic UI components (Radix/Shadcn UI)
    │   └── webrio/         # Application-specific components (Navbar, Hero, ProductCard)
    ├── data/               # Mock data (products list)
    ├── layouts/            # Page layouts (RootLayout)
    ├── pages/              # Main application pages (Home, ProductDetails, SearchResults, TopDeals)
    ├── styles/             # Global CSS files
    ├── App.tsx             # Main application entry point
    ├── main.tsx            # React DOM rendering
    └── routes.ts           # Application routing configuration
```

- **`components/ui/`**: Contains foundational, accessible UI primitives.
- **`components/webrio/`**: Contains the main composite components that build up the application's unique interface.
- **`data/`**: Houses the local mock data representing the product catalog and pricing information.
- **`pages/`**: Contains the route-level components that render the different views of the application.
- **`layouts/`**: Wraps pages with common elements like the Navbar and Footer.

---

## 🚀 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Steps

1. Clone the repository and navigate to the project folder.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. To build the project for production:
   ```bash
   npm run build
   ```

---

## 💻 Usage

1. **Home Page**: Start by browsing featured products and categories on the main dashboard.
2. **Search**: Use the search bar in the navigation to look for specific items (e.g., "iPhone", "Shoes").
3. **Compare**: Click on any product card to view the `ProductDetails` page, where you can see a direct price comparison between Amazon and Flipkart.
4. **Top Deals**: Navigate to the "Top Deals" section to see currently highlighted discounted items.
5. **Theme Toggle**: Switch between Dark and Light mode using the theme toggle icon in the navigation bar.

---

## 🏗️ Architecture

- **Project Organization**: The project is strictly organized by feature and responsibility, separating generic UI components from domain-specific components.
- **Component Structure**: Built using a composition model where complex pages are assembled from smaller, single-responsibility components (e.g., `ProductCard`, `SearchFilters`).
- **Routing**: Client-side routing is handled by `react-router` with a centralized configuration (`routes.ts`) providing layout wrappers (`RootLayout`).
- **Data Flow**: Data currently flows from local static files (`src/data/products.ts`) down to components via standard React props. 

---


## 🔮 Future Improvements

- Implementation of user authentication and accounts.
- A personalized "Wishlist" or "Saved Items" feature.
- Advanced filtering and sorting options on the search page.
- Real-time price tracking and price drop alerts.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## ✍️ Author

**Ashwani Nishad**