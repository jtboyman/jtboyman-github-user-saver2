//this module formats dates from the timestamp given by github to MM/DD/YYYY format

function formatDate(date: string) {
    let MM = date.substring(5,7);
    let DD = date.substring(8,10);
    let YYYY = date.substring(0,4);

    let formattedDate = MM + '/' + DD + '/' + YYYY;

    return formattedDate;
}


export default formatDate;
