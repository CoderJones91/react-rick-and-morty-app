import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ info, pageNumber, setPageNumber }) => {
    return <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4'
    forcePage={pageNumber===0? 0 : pageNumber - 1} 
    nextLabel='Next' 
    previousLabel='Prev'
    nextclassNameName='btn btn-primary'
    previousclassNameName='btn btn-secondary'
    pageclassNameName='page-item'
    pageLinkclassNameName='page-link'
    onPageChange={(data) => {setPageNumber(data.selected + 1);}}
    activeclassNameName='active'
    pageCount={info?.pages}/>

};

export default Pagination