import Charizard from "../../assets/Charizard.png"
import { StyledButton } from '../../styles/buttons'
import { StyledParagraph, StyledTag, StyledTitle } from '../../styles/typography'
const MainBanner = () => {
   return (
      <div>
         <div className="flexGrid">

            <div className="content">
               <StyledTag backgroundColor='red'>RPG</StyledTag>
               <StyledTitle tag="h1" fontWeight={ 400 } fontSize="lg" > Lorem Ipsum PokeWorld </StyledTitle>
            </div>

            <div className="priceBox">
               <StyledParagraph fontSize='md' opacity={ 1 }>
                  <strong>
                     299,00
                  </strong>
               </StyledParagraph>
               <StyledButton buttonStyle='solid' buttonSize='lg'>
                  Comprar
               </StyledButton>
            </div>


            <div className="imageGrid" >
               <img src={ Charizard } alt="Charizard" />
            </div>

         </div>
      </div>
   )
}

export default MainBanner
