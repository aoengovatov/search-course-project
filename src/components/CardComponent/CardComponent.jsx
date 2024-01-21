import styles from "./CardComponent.module.css";
import umschool from "../../assets/umschool.png";
import foxford from "../../assets/foksford.png";

export const CardComponent = ({ title, description, icon, price, subjects, link }) => {
    const getIconLink = (iconString) => {
        switch (iconString) {
            case "умскул":
                return umschool;
            case "фоксфорд":
                return foxford;
            default:
                return umschool;
        }
    };

    return (
        <a href={link} target="__blank" className={styles.cardBlock}>
            <img className={styles.icon} src={getIconLink(icon)}></img>
            <div className={styles.cardMainContent}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>
                    <span className={styles.bold}>Цена: </span>
                    {price}
                </div>
                <div className={styles.subjectContainer}>
                    <div className={styles.subjectTitle}>
                        <span className={styles.bold}>Предметы:</span>
                    </div>
                    {subjects.split(",").map((subject) => (
                        <div className={styles.subjectCard} key={subject}>
                            {subject}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};
