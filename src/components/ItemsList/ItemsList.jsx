import { useSelector } from 'react-redux';
import { selectVisibleItems } from '../../redux/advert/advertSelectors';
import { ItemsListContainer, ListItem } from './ItemsList.styled';
import { Item } from 'components/Item/Item';

export const ItemsList = () => {
  const visibleItems = useSelector(selectVisibleItems);
  return (
    <>
      <ItemsListContainer>
        {visibleItems.map(item => {
          return (
            <ListItem key={item.id}>
              <Item item={item} />
            </ListItem>
          );
        })}
      </ItemsListContainer>
    </>
  );
};
