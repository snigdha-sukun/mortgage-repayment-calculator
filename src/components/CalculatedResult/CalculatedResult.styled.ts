import styled from "styled-components";

export const CalculatedResultContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
`;

export const ResultAmtContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 1.5rem;
gap: 1rem;
background-color: ${({ theme }) => theme.colors.slate1000};
border-radius: 0.5rem;
border-top: 0.25rem solid ${({ theme }) => theme.colors.lime};
width: 100%;
margin-top: 1.5rem;
`;

export const ResultAmt = styled.h1`
font-size: 2.5rem;
color: ${({ theme }) => theme.colors.lime};
`;

export const StyledDivider = styled.hr`
    background-color: ${({ theme }) => theme.colors.slate500};
    border: none;
    height: 0.05rem;
`;

export const ResultDetails = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;
