import { useEffect, useState } from "react";
import { Background } from "./components/Background/Background";
import { Spinner } from "./components/Spinner/Spinner";
import "./normalize.css";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {
                isLoading
                ?
                    <Spinner />
                :
                    <Background />
            }
        </>
    );
};

export default App;
