import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");

    return (
        <DataContext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
