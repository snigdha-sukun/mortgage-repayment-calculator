import styled from "styled-components";
import { tablet } from "../../utils/mixins";

export const ResultsContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.slate900};
    color: ${({ theme }) => theme.colors.slate300};
    border-radius: 0 1rem 1rem 2rem;
    padding: 2rem;
    width: 100%;

    ${tablet`
        border-radius: 0;
    `}
`;

export const Heading2 = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`;