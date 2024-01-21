import { useState } from "react";
import { QuickTabComponent } from "./components/QuickTabComponent/QuickTabComponent";
import { CaseContainerComponent } from "./components/CaseContainerComponent/CaseContainerComponent";
import { getEnding, getTitle } from "./utils/utils";
import styles from "./App.module.css";

export const App = () => {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);
    const [valueOnView, setValueOnView] = useState("");

    const setQuickSearchValue = (value) => {
        setSearch(value);
        setValueOnView(value);
    };

    const updateSearch = (value) => {
        setSearch(value);
        setValueOnView(value);
    };

    let title = getTitle(count, search, getEnding);

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{title}</h1>
            <input
                type="search"
                placeholder="Математика"
                className={styles.input}
                value={valueOnView}
                onChange={({ target }) => updateSearch(target.value)}
            ></input>
            <QuickTabComponent setQuickSearchValue={setQuickSearchValue} />
            <div className={styles.contentContainer}>
                <CaseContainerComponent search={search} setCount={setCount} />
            </div>
        </div>
    );
};
