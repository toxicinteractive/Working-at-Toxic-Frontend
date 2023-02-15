import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MediaContext } from "../context/mediaContext";

export const Pagination = ({ totalPages }) => {
  const { setCurrentPage } = useContext(MediaContext);
  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
    />
  );
};
