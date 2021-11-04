import React from 'react'

function CustomPagination({rowsPerPageOptions,rowsPerPage,totalPages,PageIndex}) {
    
    return (
        <div>
            <div>{totalPages}</div>
        </div>
    )
}

export default CustomPagination
