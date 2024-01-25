import { gameData } from "../../data/database"
import GameCard from "./GameCard"
import GameListHeader from "./GameListHeader"
import { StyledGameList } from "./style"

const GameList = () => {
   const newGameData = [...gameData]
   newGameData.length = 3

   return (
      <section>
         <GameListHeader />
         <StyledGameList>
            { newGameData.map((game) => (
               <GameCard game={ game } />
            )) }
         </StyledGameList>
      </section>
   )
}

export default GameList
