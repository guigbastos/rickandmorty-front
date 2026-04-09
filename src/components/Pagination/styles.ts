import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    user-select: none;
  }
`
 
export const PageButton = styled.button<{ $isActive: boolean }>`
  background: transparent;
  border: none;
  color: #9ca3af;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  line-height: 2.7rem;
  font-size: 2rem;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  color: ${(props) => (props.$isActive ? "#cbd736" : "#9ca3af")};
  font-weight: ${(props) => (props.$isActive ? "bold" : "400")};

  &:hover {
    color: ${(props) => (props.$isActive ? "#cbd736" : "#fff")};
    background-color: ${(props) => (props.$isActive ? "transparent" : "rgba(255, 255, 255, 0.1)")}
  }

`

export const ArrowButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
  }


`

export const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
`
