
// Date utility function
const convertDate = (dateString) => {
    const regex = /^(\d{4})-(\d{2})-(\d{2})/; // Regular expression to match YYYY-MM-DD format
    const match = dateString.match(regex);

    if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];

        return { year, month, day };
    } else {
        return null;
    }
}

export default convertDate