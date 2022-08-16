import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserHistory } from "history";
import { Routes, Route } from "react-router";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Pokedex = lazy(() => import("./Pokedex"));
const PokemonDetails = lazy(() => import("./Pokedex/PokemonDetails"));
const history = createBrowserHistory();
const queryClient = new QueryClient();

const App = () => {
    return (
        <Suspense fallback={<>loading ... </>}>
            <HistoryRouter history={history}>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route element={<Pokedex/>} path="/"/>
                        <Route element={<PokemonDetails/>} path="/details/:name"/>
                    </Routes>
                </QueryClientProvider>
            </HistoryRouter>
        </Suspense>
    );
}

export default App;