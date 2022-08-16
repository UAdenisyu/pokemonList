import styles from "./PokemonListItem.module.css";

const PokemonListItem = ({ data }: any) => {
    return (
        <div className={styles["item-container"]}>
            <div>
                <img src={data.sprites.front_default} alt="" width="96" height="96"/>
            </div>
            <div className={styles["item-content"]}>
                <div>
                    #{data.id} <strong>{data.names.find((o:any) => o.language.name === 'en').name}</strong>
                </div>
                <div>Types: {data.types.map((t: any) => t.type.name).join(", ")}</div>
            </div>
        </div>
    );
}

export default PokemonListItem;