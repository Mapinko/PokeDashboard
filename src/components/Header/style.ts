import styled from 'styled-components'

export const StyledHeader = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 2rem;

   padding: .6rem;

   .userMenu {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      img {
         width: 50px;
         height: 50px;
         object-fit: cover;
      }
   }
`

export const StyledHeaderForm = styled.form`
   display: inline-flex;
   align-items: center;
   gap: 1rem;

   height: 59px;
   padding: 0 1rem;

   background: ${ ({ theme }) => theme.colors.white50 };

   border-radius: 10px;

   input{
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 700;

      color: ${ ({ theme }) => theme.colors.white };
      background: transparent;

      border: none;

      &::placeholder {
         color: ${ ({ theme }) => theme.colors.white50 };
      }
   }
`
