import styled from 'styled-components';

export const ItemsListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px 29px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  width: calc((100% - 29px * 3) / 4);
  overflow: hidden;
`;
