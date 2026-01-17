import type { Location } from "./location";

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

export interface CharacterData extends Character, Location {
    origin: Location;
    location: Location;
    latest_air_date: string;
}