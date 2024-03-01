import { Header, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </nav>
    </Header>
  );
};
