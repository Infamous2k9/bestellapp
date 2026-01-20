export const localStorageHelper = {

    setItem(key, value) {

        localStorage.setItem(key, JSON.stringify(value));

    },

    getItem(key, fallback) {

        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;

    }

}

export const formatToCurrency = (amount = 0, currency = "EUR", locale = "de-DE") => {

    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);

}