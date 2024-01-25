import styled from 'styled-components'

export const StyledMenuList = styled.ul`
   display: inline-flex;
   flex-direction: column;
   gap: 1rem;

   li {
      max-width: 70px;
      width: 100%;
      max-height: 70px;
      height: 100%;

      border-radius: 25px;

      padding: 1rem;

      transition: .4s;
   }

   li:hover {
      background-color: ${ ({ theme }) => theme.colors.blue };
   }
`
