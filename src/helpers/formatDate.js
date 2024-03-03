export function formatDate(date) {
    const currentDate = new Date(date);
    const today = new Date();

    let day = currentDate.getDate();
    if (day === 3 || day === 13) {
        day = `${day}rd`;
    } else if (day === 1 || day === 21 || day === 31) {
        day = `${day}st`;
    } else if (day === 2 || day === 22) {
        day = `${day}nd`;
    } else {
        day = `${day}th`;
    }

    if (currentDate.getFullYear() === today.getFullYear()) {
        return `${day} ${monthNamesShort[currentDate.getMonth()]}`;
    } else {
        return `${day} ${monthNamesShort[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    }
}

const monthNamesShort = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];