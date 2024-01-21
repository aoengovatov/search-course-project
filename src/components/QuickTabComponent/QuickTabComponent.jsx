import styles from "./QuickTabComponent.module.css";
import { subjects } from "../../db/subjects";

export const QuickTabComponent = ({ setQuickSearchValue }) => {
    return (
        <div className={styles.container}>
            {subjects.map((subject) => (
                <button
                    className={styles.button}
                    key={subject}
                    onClick={() => setQuickSearchValue(subject)}
                >
                    {subject}
                </button>
            ))}
        </div>
    );
};
