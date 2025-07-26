import React from "react";
import "./pagination.css";
import ReactPaginate from 'react-paginate';

const Pagination = ({handlePageClick,pageCount}) => {
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                breakClassName= "break-class"	
                nextLabel=">"
                pageClassName="pagination-design" 	
                onPageChange={handlePageClick}
                containerClassName="pagination"
                previousLinkClassName="pagination__link"
                nextLinkClassName="pagination__link"
                activeClassName="pagination__link--active"
                activeLinkClassName="active-link-text"
                disabledClassName="pagination__link--disabled"
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                previousClassName="previous-button"
                nextClassName="next-button"
                pageLinkClassName="selected-page"
            />
        </div>
    )
}
export default Pagination;
