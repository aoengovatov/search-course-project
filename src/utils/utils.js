export const getEnding = (count) => {
    if (count === 1 || count === 21 || count === 31 || count === 41 || count === 51) {
        return "";
    }
    if (
        (count > 1 && count < 5) ||
        (count > 21 && count < 25) ||
        (count > 31 && count < 35) ||
        (count > 41 && count < 45)
    ) {
        return "а";
    }
    if (
        (count > 4 && count < 21) ||
        (count > 24 && count < 31) ||
        (count > 34 && count < 41) ||
        (count > 44 && count < 51)
    ) {
        return "ов";
    }
};

export const getTitle = (count, search, getEnding) => {
    switch (count) {
        case 0:
            if (search.length > 0) {
                return "Может в следующий раз повезет!";
            } else {
                return "Поймай курс мечты!";
            }
        default:
            return `Поймали для тебя ${count} курс${getEnding(count)}!`;
    }
};
