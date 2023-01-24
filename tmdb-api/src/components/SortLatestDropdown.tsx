import styled from "styled-components";

interface Props {
  sortBy: string;
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SortDropdown({ onSort, sortBy }: Props): JSX.Element {
  return (
    <StyledSelect onChange={onSort} value={sortBy}>
      <option value="">Filter Movie</option>
      <option value="release_date">Latest</option>
    </StyledSelect>
  );
}

export default SortDropdown;

const StyledSelect = styled.select`
  margin-left: 16px;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 8px;
  border: 1px solid #000;
  width: 170px;

  transition: border 0.2s ease-in-out;

  &:hover {
    border: 1px solid white;
  }

  :nth-child(3) {
    color: white;
    background-color: #000;
  }
`;
