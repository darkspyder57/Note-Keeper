import React from 'react';

const Pagination = ({ totalNotes, notesPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalNotes / notesPerPage);

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    id='page-no'
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
