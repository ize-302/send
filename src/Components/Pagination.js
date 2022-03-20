import React from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom'
import { ControlArrowDown, ControlArrowUp } from './Icon'

const Pagination = ({ itemsPerPage, items, updatePageParam, itemOffset, updatedItemsPerPage }) => {
  const [pageCount, setPageCount] = React.useState(0);
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const page = query.get('page')

  React.useEffect(() => {
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [items, itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    updatePageParam(event.selected)
  };

  const handleUpdateItemsPerPage = (type) => {
    if (type === '-' && itemsPerPage > 1) updatedItemsPerPage(itemsPerPage - 1)
    if (type === '+') updatedItemsPerPage(itemsPerPage + 1)
  }

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
      <div className='pagination__items-per-page'>
        <input value={itemsPerPage} type='number' />
        <div className='pagination__items-per-page-controls'>
          <span >
            <ControlArrowUp onClick={() => handleUpdateItemsPerPage('+')} />
          </span>
          <span onClick={() => handleUpdateItemsPerPage('-')}>
            <ControlArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pagination;