import styled, { css } from 'styled-components'

interface iStyledButtonProps {
   buttonSize: 'lg' | 'md' | 'sm'
}
export const StyledButton = styled.button<iStyledButtonProps>`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   gap: .6rem;

   font-family: 'Poppins', sans-serif;
   font-size: 17px;

   transition: .4s;

   ${ ({ buttonSize }) => {
      switch (buttonSize) {
         case 'lg':
            return css`
               padding:  0 2rem;
               height: 69px;
            `
         case 'md':
            return css`
               padding:  0 2rem;
               height: 46px;
            `
         case 'sm':
            return css`
            padding:  0 1.5rem;
            height: 42px;
         `
      }
   } }

   &:hover {
      filter: brightness(1.1);
      box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
   }
`
