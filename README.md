# kubo.bitBoard 💹

**kubo.bitBoard** is a modern, responsive crypto dashboard built with React, Hero UI, Zustand, and React Query. It allows users to track the top cryptocurrencies in real-time with interactive charts, detailed info panels, and smooth UX loading states.

![Preview](./public/preview-desktop.png)

## ✨ Features

- 🔥 Top 10 crypto ranking with real market data (via CoinGecko API)
- 📈 Interactive price chart powered by Recharts
- 🧠 Global state management with Zustand
- 💾 Data fetching and caching with React Query
- 📱 Mobile-first responsive design
- 💀 Graceful error handling and Skeleton loading for better UX
- 🎨 Clean UI using Hero UI and Tailwind CSS

## 🚀 Technologies

- React + TypeScript
- Zustand (global state for selected coin)
- @tanstack/react-query (API caching and management)
- Hero UI (UI kit + skeleton loaders)
- Recharts (graph rendering)
- Tailwind CSS (utility-first styling)

## 📦 Installation

```bash
npm install
# or
yarn install
```

## 🧪 Development

clone .env.template and ajust with your apikey and rename to .env

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:5173](http://localhost:5173)

## 🌍 API

Live data is fetched from [CoinGecko Market Chart API](https://www.coingecko.com/en/api/documentation).  
All requests include error handling and fallback mocks for testing.

## 📁 Project Structure

```plaintext
├── components/       # UI components (SliderCoins, Details, Ranking, CryptoChart)
├── interfaces/       # TypeScript interfaces
├── mocks/            # Mock data for dev/fallback
├── services/         # API calls (fetchTopCryptos, fetchCryptoHistory)
├── stores/           # Zustand state store
├── App.tsx           # Main layout and composition
```





## 🙌 Acknowledgements

- [CoinGecko](https://www.coingecko.com/) for public crypto data
- [Hero UI](https://www.heroui.dev/) for component library
- [Recharts](https://recharts.org/) for chart rendering

---

Built with 💚 and ☕ by  Israel Albarrán
