import CharacterList from "@/components/characters/CharacterList"
import {getCharacters} from "../queries/characters"

export default function AllCharacters({allCharacters}){
    return (
        <CharacterList characters={allCharacters}/>
    )
}


export async function getStaticProps(){
    let {characters} = await getCharacters();
    let {results} = characters;
    return {
        props:{
            allCharacters:results
        }
    }
}