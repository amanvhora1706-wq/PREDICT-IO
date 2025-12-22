Note: API keys are not included in this repository. 
To enable live API calls, replace placeholder values with your own keys.


const symbols = ['TCS', 'HDFCBANK.BSE', 'INFY'];




async function fetchStockData(symbol) {
    const url = `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&datatype=json`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'Your API Key',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${symbol}. Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(`Stock data for ${symbol}:`, result);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    for (const symbol of symbols) {
        await fetchStockData(symbol);
    }
})();



