import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  );
};
