import styled from "styled-components"

export const StyledGameList = styled.ul`
   display: flex;
   gap: 1.5rem;

   li {
      min-width: 260px;
   }

   @media (max-width: 830px) {
      overflow-x: scroll;
      padding-bottom: 1rem;
   }

   &::-webkit-scrollbar {
      height: 8px;
   }

   /* Track */
   &::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   /* Handle */
   &::-webkit-scrollbar-thumb {
      background: ${ ({ theme }) => theme.colors.red };
   }
`
