import { PokeCard } from "./PokeCard.jsx"

export function PokeList(fetchDataResult){
    return (
        <div className="ListOfPkemon">
            {
                fetchDataResult.fetchDataResult.map((element) => {
                   return <PokeCard id={element.id} imageUrl={element.url} name={element.name}/>
                })
            }
        </div>
    )
}