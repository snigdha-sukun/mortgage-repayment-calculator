import styled from "styled-components";

export const RadioInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`;

export const RadioInputLegend = styled.legend`
    color: ${({ theme }) => theme.colors.slate700};
`;

export const RadioLabel = styled.label<{isSelected: boolean}>`
    background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.lightestLime : "transparent"};
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.75rem;
    border: 0.15rem solid ${({ theme, isSelected }) => isSelected ? theme.colors.lime : theme.colors.slate500};
    border-radius: 0.25rem;

    &:hover {
        border-color: ${({ theme }) => theme.colors.lime};
    }
`;

export const RadioInputLabelText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-wrap: nowrap;
`;

export const StyledRadioInput = styled.input`
  accent-color: ${({ theme }) => theme.colors.lime};
  border: 0px;
  width: 1.25rem;
  height: 1.5em;
  cursor: pointer;
  appearance: none;
  border-radius: 50%;
  border: 0.15rem solid ${({ theme }) => theme.colors.slate700};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.lime};
    border-radius: 50%;
    opacity: 0; /* Hidden by default */
    transition: opacity 0.2s ease-in-out;
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.lime};
    }

  &:checked::after {
    opacity: 1;
  }

   &:checked + ${RadioLabel} {
    background-color: ${({ theme }) => theme.colors.lime};
  }
`;