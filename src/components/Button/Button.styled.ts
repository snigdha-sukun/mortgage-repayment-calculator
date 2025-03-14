import styled from "styled-components";

export const StyledButton = styled.button`
    all: unset;
    background-color: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.slate900};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    padding: 1rem 2rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightLime};
    }
`;
