import style from "../css/PokeList.module.css"
export function PokeCard(props){
    const {id, imageUrl, name} = props;
    return (
        <div key={id}>
            <h2>#{id}</h2>
            <img src={imageUrl} />
            <p>Name: {name}</p>
        </div>
    )
}

