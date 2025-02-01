const Totales = (value) => {
    return value.toLocaleString('es-ES',
        {
            currency: 'USD',
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0
        }
    )
}

export default Totales