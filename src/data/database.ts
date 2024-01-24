import Image1 from "../assets/Game1.jpg"
import Image2 from "../assets/Game2.jpg"
import Image3 from "../assets/Game3.jpg"

export interface iGame {
   image: string
   name: string
   category: string
}

export interface iMyGame extends iGame {
   install: boolean
}

export const gameData: iGame[] = [
   {
      image: Image1,
      name: 'Lorem Ipsum Game 1',
      category: 'RPG',
   },
   {
      image: Image2,
      name: 'Lorem Ipsum Game 2',
      category: 'FPS',
   },
   {
      image: Image3,
      name: 'Lorem Ipsum Game 3',
      category: 'Adventure',
   },
   {
      image: Image1,
      name: 'Lorem Ipsum Game 4',
      category: 'RPG',
   },
]

export const myGameData: iMyGame[] = [
   {
      image: Image1,
      name: 'Lorem Ipsum Game 1',
      category: 'RPG',
      install: true,
   },
   {
      image: Image2,
      name: 'Lorem Ipsum Game 2',
      category: 'FPS',
      install: false,
   },
   {
      image: Image3,
      name: 'Lorem Ipsum Game 3',
      category: 'Adventure',
      install: false,
   },
]
