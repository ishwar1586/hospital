import TablePagination from "@mui/material/TablePagination";

const Pagination = ({
    page,
    rowsPerPage,
    totalRows,
    onPageChange,
    onRowsPerPageChange,
}) => {
    return (
        <TablePagination
            component="div"
            count={totalRows}
            page={page - 1}
            rowsPerPage={rowsPerPage}
            onPageChange={(event, newPage) => {
                onPageChange(event, newPage + 1);
            }}
            onRowsPerPageChange={onRowsPerPageChange}
            rowsPerPageOptions={[5, 10, 25, 50]}
        />
    );
};

export default Pagination;