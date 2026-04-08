import "./styles.css"

interface CardProps {
    imageUrl: string;
    name: string;
    gender: string;
    species: string;
    status: string;
    type: string;
    origin: string;
    location: string;
    episode: string[];
    isSelected: boolean;
    onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
    imageUrl,
    name,
    gender,
    species,
    status,
    type,
    origin,
    location,
    episode,
    isSelected,
    onClick,
}: CardProps) => {
    const isAlive = status === 'Alive';

    return (
        <>
        <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div className="image-container">
                <img src={imageUrl} alt={name} draggable={false}
                className={`card-image ${!isAlive ? 'grayscale' : ''}`}/>
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <span>{species}</span>
            </div>
        </div>
        
        </>
    )
}