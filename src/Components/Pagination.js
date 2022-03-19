import React from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom'

const Pagination = ({ itemsPerPage, items, updatePageParam, itemOffset }) => {
  const [pageCount, setPageCount] = React.useState(0);
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const page = query.get('page')


  React.useEffect(() => {
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [items, itemOffset])

  const handlePageClick = (event) => {
    updatePageParam(event.selected)
  };

  return (
    <div className='pagination-wrapper container'>
      <span>Showing {itemOffset + 1}-{itemOffset + itemsPerPage} of {items.length} results</span>
      <ReactPaginate
        containerClassName='pagination'
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={!page ? 0 : parseInt(page) - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;