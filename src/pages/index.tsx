import CharacterList from "@/components/characters/CharacterList"
import {getCharacters} from "../queries/characters"

export default function AllCharacters({allCharacters}){
    return (
        <CharacterList characters={allCharacters}/>
    )
}


export async function getStaticProps(){
    const {characters} = await getCharacters();
    const {results} = characters;
    return {
        props:{
            allCharacters:results
        }
    }
}