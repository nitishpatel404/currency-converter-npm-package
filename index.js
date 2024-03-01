import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_EMFa3d4VWnskbtjVgaQCts6LgTQAiRmJtV4bkIgn');

async function convertCurrency(fromCurrency, toCurrency, units) {
    try {
        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });

        // Check if the response has data and the conversion rate for the target currency
        if (res.data && res.data[toCurrency] !== undefined) {
            const multiplier = res.data[toCurrency];
            const convertedValue = units * multiplier;
            return convertedValue;
        } else {
            console.error(`Unable to find conversion rate for ${fromCurrency} to ${toCurrency}`);
            return null;
        }
    } catch (error) {
        console.error('Error converting currency:', error.message);
        return null;
    }
}

export { convertCurrency };
convertCurrency("USD", "INR", 1);
