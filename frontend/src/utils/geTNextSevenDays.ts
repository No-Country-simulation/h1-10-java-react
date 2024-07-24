export const getNextSevenDays = () => {
    const daysArray = [];
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    for (let i = 0; i < 8; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);

        const day = currentDate.getDate();
        const month = months[currentDate.getMonth()];

        daysArray.push({
            fecha: day,
            mes: month
        });
    }

    return daysArray;
};