import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.slate700};
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;
    border: none;
    cursor: pointer;

    &:focus, &:hover {
        outline: none;
    }

    &[type='number'] {
    -moz-appearance: textfield; /* Firefox */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Safari and Chrome */
      margin: 0;
    }
  }
`;

export const InputWrapper = styled.div<{ showError: boolean }>`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 0.15rem solid ${({ theme, showError }) => showError ? theme.colors.red : theme.colors.slate500};
    border-radius: 0.25rem;
    cursor: pointer;

    &:focus-within {
    border-color: ${({ theme }) => theme.colors.lime};
  }

  &:hover {
        border-color: ${({ theme }) => theme.colors.slate900};
    }
`;

export const InputAdornment = styled.span<{showError: boolean}>`
    position: relative;
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme, showError }) => showError ? theme.colors.red : theme.colors.slate100};
  color: ${({ theme, showError }) => showError ? theme.colors.white : theme.colors.slate700};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0 1rem;

  ${InputContainer}:focus-within & {
    background-color: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.slate900};
  }
`;

export const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.85rem;
`;