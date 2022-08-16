import { useInfiniteQuery } from "@tanstack/react-query";
import PokemonListItem from "./PokemonListItem";
import { listFetcher } from "../API";
import { Link } from "react-router-dom";
import styles from "./PokemonList.module.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";
import { useEffect } from "react";

const PokemonList = ( {filter} : any) => {
    const { app } = useStore();
    const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
        ["pokemon-list"],
        listFetcher(),
        {
            staleTime: 600_000,
            getNextPageParam: (lastPage) => {
                if(lastPage !== null){
                    return lastPage.page + 1;
                }
            }
        }
    );

    useEffect(() => {
        window.scrollTo(0, app.scrollPositionY);
    }, [app])

    const handlePokemonClick = () => {
        app.handleScrollPositionChange(window.scrollY);
    }
    
    return (
        <>
            {!isLoading && 
                data?.pages.map(d => d.results.filter(filter).map((e: any) => (
                        <Link to={`/details/${e.name}`} key={e.name} className={styles["pokemon-link"]} onClick={handlePokemonClick}>
                            <PokemonListItem key={e.name} {...e}/>
                        </Link>
                    ))
                )}
            {
                hasNextPage && (
                    <button className={styles["load-more-btn"]} onClick={() => fetchNextPage()}>Load more</button>
                )
            }

        </>
    );
}

export default observer(PokemonList);