import styled from "styled-components";

export const EmptyResultContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.slate300};
    text-align: center;
`;