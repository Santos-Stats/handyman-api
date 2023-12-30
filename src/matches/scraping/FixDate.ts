export function convertDate(dateString: string): string {
    const monthAbbreviations: { [key: string]: string } = {
        jan: '01',
        fev: '02',
        mar: '03',
        abr: '04',
        mai: '05',
        jun: '06',
        jul: '07',
        ago: '08',
        set: '09',
        out: '10',
        nov: '11',
        dez: '12',
    };

    // Extract date information
    const dateParts = dateString.match(/(\d+|[a-zA-Z]+)/g) || [];
    const dayOfMonth = dateParts[1];
    const monthAbbrev = dateParts[2]?.toLowerCase();

    // Validate if necessary information is present
    if (!dayOfMonth || !monthAbbrev) {
        console.error('Formato de data não reconhecido:', dateString);
        return dateString;
    }

    const month = monthAbbreviations[monthAbbrev];
    const year = 2024;

    return `${dayOfMonth}/${month}/${year}`;
}