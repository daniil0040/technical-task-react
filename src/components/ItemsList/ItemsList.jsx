import { useSelector } from 'react-redux';
import { selectAllItems } from '../../redux/advert/advertSelectors';
import { ItemsListContainer, ListItem } from './ItemsList.styled';
import { Item } from 'components/Item/Item';

export const ItemsList = () => {
  const allItems = useSelector(selectAllItems);
  return (
    <>
      <ItemsListContainer>
        {allItems.map(item => {
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
