export const createCalenderDays = (emptyDaySquare, evForDate, monthNav) => {

    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArr = [];
    for (let i = 1; i <= emptyDaySquare + daysInMonth; i++) {
        const dayStr = `${month + 1 + monthNav}/${i - emptyDaySquare}/${year}`;
        if (i > emptyDaySquare) {
            daysArr.push({
                value: i - emptyDaySquare,
                isCurrDay: i - emptyDaySquare === day && monthNav === 0,
                date: dayStr,
                event: evForDate(dayStr)
            });
        } else {
            daysArr.push({
                value: 'empty',
                isCurrDay: null,
                date: '',
                event: null
            });
        }
    }
    return daysArr
}