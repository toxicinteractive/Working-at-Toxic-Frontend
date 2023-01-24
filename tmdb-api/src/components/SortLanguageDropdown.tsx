import styled from "styled-components";
import { IMovieData } from "../store/types/Api";
import iso6391 from "iso-639-1";

interface Props {
  language: string;
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  data: IMovieData;
}

function SelectDropdown({ language, onSelect, data }: Props): JSX.Element {
  return (
    <StyledSelect onChange={onSelect} value={language}>
      <option value="">Movie Language</option>
      {Array.from(
        new Set(data.results.map((movie) => movie.original_language))
      ).map((language) => (
        <option key={language} value={language}>
          {iso6391.getName(language)}
        </option>
      ))}
    </StyledSelect>
  );
}

export default SelectDropdown;

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

  :nth-child(2) {
    color: white;
    background-color: #000;
  }
`;
