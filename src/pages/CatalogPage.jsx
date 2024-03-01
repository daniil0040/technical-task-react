import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems } from '../redux/advert/advertOperations';
import { selectError, selectIsLoading } from '../redux/advert/advertSelectors';
import { ItemsList } from 'components/ItemsList/ItemsList';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(getAllItems(currentPage, controller));
    return () => {
      // console.log(controller.abort());
      controller.abort();
    };
  }, [dispatch, currentPage]);

  const handleLoadMore = e => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <main>
      {error ? (
        <div>Something went wrong. Try reload page!</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ItemsList />
          <button type="button" onClick={handleLoadMore}>
            Load more
          </button>
        </>
      )}
    </main>
  );
}
