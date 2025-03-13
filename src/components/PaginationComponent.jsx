import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const PaginationComponent = ({ totalItems, itensPorPage, atualPage, onPageChange }) => {
  const quantidadePage = Math.ceil(totalItems / itensPorPage);

  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={quantidadePage}
        page={atualPage} 
        onChange={(event, value) => onPageChange(value)}
        color="primary"
        showFirstButton 
        showLastButton
        
      />
    </Stack>
  );
};

PaginationComponent.propTypes = {
  totalItems: PropTypes.number,
  itensPorPage: PropTypes.number,
  atualPage: PropTypes.number, 
  onPageChange: PropTypes.func,
};

export default PaginationComponent;
