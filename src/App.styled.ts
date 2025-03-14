import styled from "styled-components";
import { tablet } from "./utils/mixins";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    display: flex;
    width: 60rem;

    ${tablet`
        width: 100%;
        height: 100%;
        flex-direction: column;
        border-radius: 0;
    `}
`;
