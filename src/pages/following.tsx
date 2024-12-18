import CharacterList from "@/components/characters/CharacterList"
import { getFollowedCharacters } from "@/queries/followedCharacters";
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";
export default function CharactersFollowing({characters}){
    if(!characters.length){
        return <EmptyPlaceholder/>
    }
    return(
        <CharacterList characters={characters}/>
    )

}

export async function getStaticProps(){
    const characters  = await getFollowedCharacters();
    return {
        props:{
            characters
        },
        revalidate: 5,
    }
}