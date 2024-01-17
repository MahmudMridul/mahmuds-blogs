import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import BlogList from "./components/BlogList";
import { loader as blogLoader } from "./pages/BlogPost";

export default function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Home />,
         children: [
            {
               index: true,
               element: <BlogList />,
            },
            {
               path: "/blogs/:blogID",
               element: <BlogPost />,
               loader: blogLoader,
            },
         ],
      },
   ]);

   return (
      <main className="container max-w-5xl p-3 font-primary">
         <RouterProvider router={router} />
      </main>
   );
}
