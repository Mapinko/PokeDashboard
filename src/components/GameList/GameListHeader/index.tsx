import { MdArrowForward } from "react-icons/md"
import { StyledIconLink } from "../../../styles/buttons"
import { StyledTitle } from "../../../styles/typography"
import { StyledMyGameListHeader } from "./style"

const MyGameListHeader = () => {
   return (
      <StyledMyGameListHeader>
         <StyledTitle tag="h2" fontSize="slg" fontWeight={ 700 }>
            Popular games
         </StyledTitle>

         <StyledIconLink>
            <MdArrowForward size={ 30 } />
         </StyledIconLink>
      </StyledMyGameListHeader>
   )
}

export default MyGameListHeader
