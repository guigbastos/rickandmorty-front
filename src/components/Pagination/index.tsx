import './styles.css';

import backArrowIcon from "../../assets/previous-button.svg"
import nextArrowIcon from "../../assets/next-button.svg"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const max_visible_buttons = 5;

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    function getVisiblePages() {
        let startPage = Math.max(1, currentPage - Math.floor(max_visible_buttons / 2));
        let endPage = Math.min(totalPages, startPage + max_visible_buttons - 1);
        if (endPage - startPage < max_visible_buttons) {
            startPage = Math.max(1, endPage - max_visible_buttons + 1);
        }
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }
    
    if (totalPages <= 1) return null;
    
    return (
        <div className='pagination-container'>
        <button className='arrow-button' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            <img src={backArrowIcon} className='arrow-icon' alt="Voltar" />
        </button>

        {getVisiblePages().map((page) => (
            <button
            key={page}
            className={`page-button ${page === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
            >
                {page}
            </button>
        ))}
        <button className='arrow-button' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <img src={nextArrowIcon} className='arrow-icon' alt="Próximo" />
        </button>
    </div>
);
};

export default Pagination;