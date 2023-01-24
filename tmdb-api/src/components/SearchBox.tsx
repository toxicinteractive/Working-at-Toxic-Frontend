import styled from "styled-components";

interface Props {
  searchQuery: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ searchQuery, onSearch }: Props): JSX.Element {
  return (
    <Container>
      <StyledContainer className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search Movie"
          value={searchQuery}
          onChange={onSearch}
        ></input>
        <button className="searchButton">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </StyledContainer>
    </Container>
  );
}

export default SearchBox;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 20px;
  margin-top: 20px;
`;

const StyledContainer = styled.div`
  &.searchBox {
    position: absolute;
    background: #2f3640;
    border-radius: 40px;
    padding: 10px;
  }

  &:hover .searchInput {
    width: 240px;
    padding: 0 6px;
  }

  &:hover .searchButton {
    background: #0000004a;
    color: black;
  }

  .searchButton {
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
  }

  @media screen and (max-width: 620px) {
    .searchBox:hover > .searchInput {
      width: 150px;
      padding: 0 6px;
    }
  }
`;
