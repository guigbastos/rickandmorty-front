import React from "react";
import { PaginationContainer, ArrowButton, ArrowIcon, PageButton } from "./styles";
import backArrowIcon from "../../assets/previous-button.svg";
import nextArrowIcon from "../../assets/next-button.svg";

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
    let startPage = Math.max(
      1,
      currentPage - Math.floor(max_visible_buttons / 2),
    );
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
    <PaginationContainer>
      <ArrowButton 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowIcon src={backArrowIcon} alt="Previous Page" />
      </ArrowButton>

      {getVisiblePages().map((page) => (
        <PageButton
          key={page}
          $isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowIcon src={nextArrowIcon} alt="Next Page" />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;
