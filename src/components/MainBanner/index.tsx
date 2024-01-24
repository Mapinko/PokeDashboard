import Charizard from "../../assets/Charizard.png"
import { StyledButton } from '../../styles/buttons'
import { StyledParagraph, StyledTag, StyledTitle } from '../../styles/typography'
import { StyledBunner } from './style'
const MainBanner = () => {
   return (
      <StyledBunner>
         <div className="flexGrid">
            <div className="content">
               <StyledTag backgroundColor="red">RPG</StyledTag>
               <StyledTitle tag="h1" fontWeight={ 400 } fontSize="lg">Lorem Ipsum Pokéworld</StyledTitle>
               <div className="priceBox">
                  <StyledParagraph fontSize="md" opacity={ 1 }>
                     <strong>R$ 299,00</strong>
                  </StyledParagraph>
                  <StyledButton buttonStyle="solid" buttonSize="lg">
                     Buy
                  </StyledButton>
               </div>
            </div>
            <div className="imageGrid">
               <img src={ Charizard } alt="Charizard" />
            </div>
         </div>
      </StyledBunner>
   )
}

export default MainBanner
