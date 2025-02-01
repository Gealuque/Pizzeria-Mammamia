const Totales = (value) => {

    if (typeof value !== 'number') {
        return value;
    }

    return value.toLocaleString('es-ES',
        {
            style: 'decimal',
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0
        }
    )
}

export default Totales