import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { getCharacters } from "@/queries/characters";
import { getFollowedCharacters } from "@/queries/followedCharacters";
import { followCharacter, unFollowCharacter } from "@/mutations/follow";
import { useCallback, useState } from "react";


export default function CharacterPage({character, _isFollowed}){
    const [isFollowed, setIsFollowed] =useState(_isFollowed)
    const onFollow = useCallback(async(isFollowed)=>{
        try{
            if(!isFollowed){
                await followCharacter({id:character.id})
            }
            else{
                await unFollowCharacter({id:character.id})
            }
            setIsFollowed(isFollowed=>!isFollowed)
        }
        catch(error){
            console.log(error)
        }
    },[character])

    return (
        <Character character={{...character, isFollowed:isFollowed}} onFollow={onFollow}/>
    )
}

// export async function  getStaticPaths (){
//     const {characters} = await getCharacters();
//     const {results} = characters;
//     const paths  = results.map((character)=>{
//         return {params:{character_id:character.id}}
//     })
//     return {
//         paths,
//         fallback:false
//     }
// }

export async function getServerSideProps({params}){
    const characterId  = params.character_id;

    const {character}  = await getCharacterById({id: characterId});
    const characters  = await getFollowedCharacters();
    const isFollowed  = characters.find((_character)=>_character.id===character.id)? true: false;

    return {
        props:{
            character,
            _isFollowed:isFollowed
        }
    }
}