import styles from "./CaseContainerComponent.module.css";
import { CardComponent } from "../CardComponent/CardComponent";
import { db } from "../../db/db";

export const CaseContainerComponent = ({ search = "", setCount }) => {
    let searchResult = db.filter(
        (card) =>
            card.title.toLowerCase().includes(search.toLowerCase().trim()) ||
            card.description.toLowerCase().includes(search.toLowerCase().trim()) ||
            card.subjects.toLowerCase().includes(search.toLowerCase().trim()) ||
            card.price.toLowerCase().includes(search.toLowerCase().trim())
    );

    if (search === "") {
        searchResult = [];
    }

    if (searchResult.length === 0) {
        setCount(0);
    }

    if (search !== "" && searchResult.length > 0) {
        setCount(searchResult.length);
    }

    return (
        <div className={styles.container}>
            {searchResult.map(
                ({ id, title, description, icon, price, subjects, link }) => (
                    <CardComponent
                        key={id}
                        title={title}
                        description={description}
                        icon={icon}
                        price={price}
                        subjects={subjects}
                        link={link}
                    />
                )
            )}
        </div>
    );
};
