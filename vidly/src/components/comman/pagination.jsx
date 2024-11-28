import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;  // object destructuring to extract the itemsCount, pageSize, currentPage, and onPageChange properties from props
    const pagesCount = Math.ceil(itemsCount / pageSize);  // calculate the number of pages by dividing the itemsCount by the pageSize and rounding up to the nearest whole number
    if (pagesCount === 1) return null;  // if there is only one page, return null   
    const pages = _.range(1, pagesCount + 1);  // create an array of page numbers from 1 to pagesCount

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
     );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,  // itemsCount prop is required and must be a number
    pageSize: PropTypes.number.isRequired,  // pageSize prop is required and must be a number
    currentPage: PropTypes.number.isRequired,  // currentPage prop is required and must be a number
    onPageChange: PropTypes.func.isRequired  // onPageChange prop is required and must be a function
}
 
export default Pagination;