const BASE_URL = `https://api.coinpaprika.com/v1`

export const fetchCoins = async() => {
    return fetch(`${BASE_URL}/coins`).then(response => response.json() )
}

export const fetchCoinInfo = async(coinId: string) => {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(response => response.json() )
}

export const fetchCoinTickers = async(coinId: string) => {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json() )
}

export const fetchCoinHistory =async (coinId: string) => {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60*60*24*7*2;
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(response => response.json() )
    
}