import { gameData } from '../../data/database'
import GameCard from '../GameCard'

const GameList = () => {

   const newGameData = [...gameData]

   newGameData.length = 3

   return (
      <ul>
         { newGameData.map(game => (
            <GameCard game={ game } />
         )) }
      </ul>
   )
}

export default GameList
