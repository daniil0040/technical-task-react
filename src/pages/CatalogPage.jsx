import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllItems,
  getAllItemsPerPage,
} from '../redux/advert/advertOperations';
import {
  selectError,
  selectIsLoading,
  selectVisibleItems,
} from '../redux/advert/advertSelectors';
import { ItemsList } from 'components/ItemsList/ItemsList';
import { LoadMoreBtn } from './CatalogPage.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { constants } from 'helpers';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const visibleItems = useSelector(selectVisibleItems);
  const error = useSelector(selectError);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllItems());
    const allItemsPerPage = dispatch(getAllItemsPerPage(currentPage));
    return () => {
      allItemsPerPage?.abort();
    };
  }, [dispatch, currentPage]);

  const handleLoadMore = e => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <main>
      {isLoading && <div>Loading...</div>}
      {error ? (
        <div>Something went wrong. Try reload page!</div>
      ) : (
        <>
          <SearchBar />
          <ItemsList />
          {visibleItems.length === currentPage * constants.ITEMS_PER_PAGE && (
            <LoadMoreBtn
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              Load more
            </LoadMoreBtn>
          )}
        </>
      )}
    </main>
  );
}
