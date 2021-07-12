import { useEffect, useState } from "react";
import { Background } from "./components/Background/Background";
import { Spinner } from "./components/Spinner/Spinner";
import { AppRouter } from "./router/AppRouter";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            <Background />
            {
                isLoading
                    ?
                    <Spinner />
                    :
                    <AppRouter />

            }
        </>
    );
};

export default App;
