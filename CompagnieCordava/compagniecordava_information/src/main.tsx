import RoutLayout from './components/general/RoutLayout';
import { createBrowserRouter, RouterProvider,} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import OverviewPage from './pages/OverviewPage';
import "./index.css";
import UseDarkmodeToggleProvider from './context/DarkmodeToggleContext';
import RoosterPage from './pages/RoosterPage';
import VoorstellingenPage from './pages/VoorstellingenPage';

const queryClient = new QueryClient();

const browserRouter = createBrowserRouter([
  { 
    element: <RoutLayout />,
    children: [
      {
        path: "/",
        element: <OverviewPage />,
      },
      {
        path: "/Rooster",
        element: <RoosterPage />,
      },
      {
        path : "/Voorstellingen",
        element: <VoorstellingenPage />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UseDarkmodeToggleProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={browserRouter} />
      </QueryClientProvider>
    </UseDarkmodeToggleProvider>
  </StrictMode>,
);
