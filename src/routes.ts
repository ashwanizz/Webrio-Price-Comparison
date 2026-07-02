import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { TopDeals } from "./pages/TopDeals";
import { ProductDetails } from "./pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "search",
        Component: SearchResults,
      },
      {
        path: "top-deals",
        Component: TopDeals,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
      },
    ],
  },
], {
  basename: "/Webrio-Price-Comparison/"
});
