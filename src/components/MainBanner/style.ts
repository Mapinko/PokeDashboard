import styled from 'styled-components'

export const StyledBunner = styled.div`

   background: radial-gradient(circle, rgba(250,14,14,0.5) 0%, rgba(83,83,83,0.5) 100%);
   padding: 1rem 2.5rem;
   border-radius: 32px;

   .flexGrid{
      display: flex;
      align-items: center;
      justify-content: space-between ;
      gap: 4rem;
   }



   .content{
      min-width: 270px;

      h1 {
         margin-top: 1rem;
      }
   }

   .imageGrid {
      img {
         max-width: 100%;
      }
   }

   .priceBox{
      margin-top: 3rem;

      display: inline-flex;
      align-items: center;

      background-color: ${ ({ theme }) => theme.colors.white20 };

      border-radius: 12px;

      p{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 1.5rem;
      }
   
   }

   @media(max-width: 600px) {
      .flexGrid {
         flex-direction: column-reverse;
      }

      .content {
         min-width: unset;

         h1{
            margin-top: .5rem;
         }
      }

      .imageGrid {
         img {
            width: 100% ;
            max-width: 335px;
         }
      }

      .priceBox {
         margin-top: 2rem;
      }
   }

   @media(max-width: 400px) {
      .priceBox {
         width: 100%;
         flex-direction: column;

         button {
            width: 100%;
         }
      }
   }
`
