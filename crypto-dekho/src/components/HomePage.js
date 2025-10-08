import { useEffect, useState } from "react";
import mockcoindatas from "../utils/coinsdata";

const HomePage = () => {
  // const { rank, name, symbol, marketCap, price, availableSupply, volume } =
  //   mockcoindatas || {};
  // console.log(mockcoindatas[0].name);

  // Market Data,Price & BTC Dominance
  const [marketData, setMarketData] = useState([]);
  const url = "https://openapiv1.coinstats.app/markets";
  const options = {
    method: "GET",
    headers: { "X-API-KEY": "JMIl8ynqt1WmUn0e7szmfbnU5rEWzzQRiVKFn3eaOVY=" },
    body: undefined,
  };

  const fetchMarketCap = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    setMarketData(json);
  };
  // console.log(marketData);

  // const [coins, setCoins] = useState([]);
  // const fetchAllCoins = async () => {
  //   const allCoins = [];
  //   let page = 1;
  //   const limit = 50; // You can go up to 100 per page

  //   try {
  //     while (true) {
  //       const response = await fetch(
  //         `https://openapiv1.coinstats.app/coins?page=${page}&limit=${limit}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "X-API-KEY": "JMIl8ynqt1WmUn0e7szmfbnU5rEWzzQRiVKFn3eaOVY=",
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       allCoins.push(...data.result);

  //       if (!data.meta.hasNextPage) break;
  //       page++;
  //     }

  //     setCoins(allCoins);
  //   } catch (error) {
  //     console.error("Error fetching coins:", error);
  //   }
  // };

  useEffect(() => {
    fetchMarketCap();
    // fetchAllCoins();
  }, []);

  // console.log(coins[1]?.result?.name);

  return (
    <>
      <div className="home-page">
        <div className="home-header">
          <h1 className="header1">Cryptocurrency Tracker</h1>
          <h2 className="header2">Today's Crypto Prices by Market Cap</h2>
          <p className="header3">
            The worldwide cryptocurrency market capitalization today stands at
            an estimated $4.4T , seeing a 1.65% movement over the last 24 hours.
            The total cryptocurrency trading volume in the past day is roughly
            $212B. Bitcoin's market dominance is at about 55.8%.
          </p>
        </div>
        <div className="fa-fa-bars">
          <div className="fa-fa-cols">
            <div className="fa-fa-rows">
              <button className="box">
                <p className="vol-text">Market Cap</p>
                <strong>
                  ${" "}
                  {marketData && marketData.marketCap
                    ? marketData.marketCap.toLocaleString()
                    : "Loading"}
                </strong>
              </button>

              <button className="box1">
                <p className="vol-text">Volume 24hrs</p>{" "}
                <strong>
                  ${" "}
                  {marketData && marketData.volume
                    ? marketData.volume.toLocaleString()
                    : "Loading"}
                </strong>
              </button>

              <button className="box2">
                <p className="vol-text">BTC Dominance</p>
                {marketData.btcDominance}%
              </button>
            </div>
          </div>
        </div>

        {/* Seach Button */}
        <div className="fa-search">
          <div className="fa-crypto-btn">
            <button className="">Cryptocurrencies</button>
          </div>
          <div className="fa-whatchlist">
            <p>Whatchlist</p>
          </div>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search Crypto..."
            />
            {/* <button className="search-btn">Search</button> */}
          </div>
        </div>

        <div className="table-header">
          <table>
            <thead>
              <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Symbol</td>
                <td>Market Cap</td>
                <td>Price</td>
                <td>Available Supply</td>
                <td>Volume(24hrs)</td>
              </tr>
            </thead>
            <tbody>
              {mockcoindatas.map((coin) => (
                <tr key={coin.id + coin.symbol}>
                  <td>{coin.rank}</td>
                  <td>
                    <img
                      src={coin.icon}
                      alt={coin.name}
                      width="20"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                    />
                    {coin.name}
                  </td>
                  <td>{coin.symbol}</td>
                  <td>${coin.marketCap.toLocaleString()}</td>
                  <td>${coin.price.toFixed(2)}</td>
                  <td>{coin.availableSupply.toLocaleString()}</td>
                  <td>${coin.volume.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
            {coins.map((coin) => (
              <tr key={coin.result.id}>
                <td>{coin.result.rank}</td>
                <td>
                  <img
                    src={coin.icon}
                    alt={coin.name}
                    width="20"
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  {coin.name}
                </td>
                <td>{coin.symbol}</td>
                <td>${coin.marketCap.toLocaleString()}</td>
                <td>${coin.price.toFixed(2)}</td>
                <td>{coin.availableSupply?.toLocaleString()}</td>
                <td>${coin.volume.toLocaleString()}</td>
              </tr>
            ))}
          </tbody> */}
          </table>
        </div>
      </div>
      <div className="footer">@2025|made by Divyashakti Pal</div>
    </>
  );
};
export default HomePage;
