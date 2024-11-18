import CharacterList from "@/components/characters/CharacterList"
import {getCharacters} from "../queries/characters"
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const CHARACTERS_LIST_QUERY = gql`
  query characters {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export default function AllCharacters(){
    const {loading, error, data} = useQuery(CHARACTERS_LIST_QUERY)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    return (
        <CharacterList characters={data.characters.results}/>
    )
}


export async function getStaticProps(){
    // const {characters} = await getCharacters();
    // const {results} = characters;
    return {
        props:{
            
        }
    }
}