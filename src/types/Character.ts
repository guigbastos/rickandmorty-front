import type { Location } from "./Location.ts";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterData extends Character, Location {
  character_origin: Location;
  character_location: Location;
  last_episode?: {
    name: string;
    episode: string;
    air_date: string;
  };
}
