import { PageWrapper, HomeContainer, Logo, SearchBox, SearchInput, ResultsGrid } from "./styles"; 
import logo from "../../assets/logo.svg";
import { Button } from "../../components/header/button"
import { useState, type ChangeEvent } from "react"
import { Card } from "../../components/header/Card"
import Loading from "../../components/Loading"
import { Pagination } from "../../components/Pagination"
import { CharacterModal } from "../../components/Modal"
// import type { CharacterData } from "../../types/Character"


interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  character_origin: {
    name: string;
    type?: string;
    dimension?: string;
    residents_count?: number;
  } | null;
  character_location: {
    name: string;
    type?: string;
    dimension?: string;
    residents_count?: number;
  } | null;
  image: string;
  last_episode?: {
    name: string;
    episode: string;
    air_date: string;
  }
}

interface CharacterResponse {
  data: Character[];
  meta: {
    total_pages: number;
    current_page: number;
    total_items: number;
  }
}

export const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      handleSearch(1);
    }
  } 

  async function handleSearch(page: number = 1) {
    if (!searchInput.trim()) return;

    setIsLoading(true);
    setHasResults(false);

    setSelectedCharacter(null);

    setCharacters([]);

    try {
      const timerPromise = new Promise(resolve => setTimeout(resolve, 2000));

      const apiUrl = process.env.VITE_API_URL;

      const fetchPromise = fetch(`${apiUrl}/character?name=${searchInput}&page=${page}`)
        .catch(err => {
          console.error("Erro na API:", err);
          return null;
        });

      const [response] = await Promise.all([fetchPromise, timerPromise])

      if (response && response.ok) {
        const data: CharacterResponse = await response.json();

        setCharacters(data.data);
        setCurrentPage(data.meta.current_page);
        setTotalPages(data.meta.total_pages);

        const filtered = data.data.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()));

        setCharacters(filtered);
      } else {
        console.error("Erro na API");
        setCharacters([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Erro ao buscar:", error);
      setCharacters([]);
    } finally {
      setHasResults(true);
      setIsLoading(false);
    }
  }

  function handleCardClick(char: Character) {
    setSelectedCharacter(char);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  }

  return (
    <PageWrapper>
      <HomeContainer>
        {isLoading && <Loading />}

        <Logo src={logo} alt="Logo" draggable={false} />

        <SearchBox>
          <SearchInput
            onChange={onSearchInputChanged}
            onKeyDown={handleKeyDown}
            value={searchInput}
            type="search"
            placeholder="Search characters"
          />
          <div>
            <Button text="Search" link="#"/>
          </div>
        </SearchBox>

        {hasResults && (
          <ResultsGrid>
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
                  isSelected={selectedCharacter?.id === char.id}
                  onClick={() => handleCardClick(char)}
                />
              ))
            ) : (
              <p style={{color: 'white'}}>Nenhum personagem encontrado.</p>
            )}
          </ResultsGrid>
        )}
        {characters.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => handleSearch(page)}
          />
        )}
      </HomeContainer>
      <CharacterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        characterInfos={selectedCharacter as any}
      />
    </PageWrapper>
  )
}

export default Home
