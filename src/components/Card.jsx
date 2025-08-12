export default function Card ({ name, img, onClick}) {

    return (
        <div className="poke-card" onClick={onClick}>
            <p className="poke-name">{name}</p>
            <img src={img} alt=""/>
        </div>
    )
}