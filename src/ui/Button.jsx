import styled from "styled-components";

const Button = styled.button`
  color: var(--color-brand-50);
  background-color: var(--color-brand-500);
  box-shadow: var(--shadow-sm);
  cursor: pointer;

  &:hover {
    background-color: var(--color-brand-600);
  }
`;

export default Button;
