import { Button } from "../../components/header/button/index.tsx"
import { Card } from "../../components/header/Card/index.tsx"
import { useState } from "react"
import "./styles.css"

interface Character {
  imageUrl: string;
  name: string;
  gender: string;
}

export const About: React.FC = () => {
  const [characters, setCharacter] = useState<Character[]>([]);

  const getCharacters = () => {
    setCharacter([
      {
        imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
        gender: "Male"
    },
    {
        imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        name: "Morty Smith",
        gender: "Male"
    },
    {
        imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        name: "Summer Smith",
        gender: "Female"
    }
    ])
  }
  return (
    <>
    <div className="about">
      <h1>About</h1>
      <Button link='/' text='Home'/>
      <button onClick={getCharacters}>Get characters</button>
    </div>
    <div className="about-container">
      {characters.map((character, index) => (
        <Card
          key={index}
          imageUrl={character.imageUrl}
          name={character.name}
          gender={character.gender}
        />
      ))}
    </div>
    </>
  )
}

export default About
