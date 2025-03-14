import styled from "styled-components";

export const CalculatorContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    width: 100%;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Heading2 = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.slate900};
`

export const Link = styled.a`
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.slate500};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.slate700};
    }
`;

export const MorgageDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;