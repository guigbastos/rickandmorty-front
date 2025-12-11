import { Button } from "../../components/header/button"
import "./styles.css"
import { useState, type ChangeEvent } from "react"
import { Card } from "../../components/header/Card"
import Loading from "../../components/Loading"

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  character_origin: {
    name: string;
    dimension?: string;
  } | null;
  character_location: {
    name: string;
    dimension?: string;
  } | null;
  image: string;
  last_episode?: {
    name: string;
    episode: string;
  }
}

interface CharacterResponse {
  data: Character[];
}

export const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  async function handleSearch() {
    if (!searchInput.trim()) return;

    setIsLoading(true);
    setHasResults(false);
    setCharacters([]);

    try {
      const timerPromise = new Promise(resolve => setTimeout(resolve, 2000));

      const fetchPromise = fetch(`http://localhost:5001/character?name=${searchInput}`)
        .catch(err => {
          console.error("Erro na API:", err);
          return null;
        });

      const [response] = await Promise.all([fetchPromise, timerPromise])

      if (response && response.ok) {
        const data: CharacterResponse = await response.json();

        const filtered = data.data.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()));

        setCharacters(filtered);
      } else {
        console.error("Erro na API");
        setCharacters([]);
      }
    } catch (error) {
      console.error("Erro ao buscar:", error);
      setCharacters([]);
    } finally {
      setHasResults(true);
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className="home-container">

      <img src="./src/assets/logo.svg" alt="" draggable={false}/>

      <div className="search-box">
      <input onChange={onSearchInputChanged} value={searchInput} type="search" className="search-input" placeholder="Search characters" />
      <div onClick={handleSearch}>
        <Button text="Search" link="#"/>
      </div>
      </div>

      {hasResults && (
        <div className="results-grid">
          {characters.length > 0 ? (
            characters.map((char) => (
              <Card
              key={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              type={char.type}
              gender={char.gender}
              imageUrl={char.image}
              origin={char.character_origin?.name || "Unknown"}
              location={char.character_location?.name || "Unknown"}
              episode={char.last_episode ? [char.last_episode.name] : []}
              isSelected={char.id === selectedCardId}
              onClick={() => setSelectedCardId(char.id)}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}

      {hasResults && !isLoading && (
        <div style={{marginTop:20, color: 'white'}}>
        </div>
      )} 
      </div>
    </>
  )
}

export default Home
