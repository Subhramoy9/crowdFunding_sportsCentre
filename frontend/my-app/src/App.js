
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import CollectibleData from "./contractData/Collectible.json";
import nftData from "./contractData/nftData.json";
import AddAddress from "./components/AddAddress";
import AddPayment from "./components/AddPayment";
import Checkout from "./components/Checkout";
import Bag from "./components/Bag";
import ItemView from "./components/ItemView";
import ListedItems from "./components/ListedItems";
import Create from "./components/Create";

function App() {
  const [marketPlace, setMarketPlace] = useState({});
  const [nft, setNft] = useState({});

  useEffect(() => {
    async function fetchData() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const collectibleAddress = '0xE044D37c91f79100538c9ad4Ca7b08d49B5fD0c5';
      const nftAddress = '0x4bBa4Be5380D5fCc2251BC40B0349a7bBe341358';

      const marketPlaceContract = new ethers.Contract(collectibleAddress, CollectibleData, signer);
      setMarketPlace(marketPlaceContract);

      const nftContract = new ethers.Contract(nftAddress, nftData, signer);
      setNft(nftContract);
    }

    fetchData();
  }, []);

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<AddAddress />} />
          <Route path="/addpayment" element={<AddPayment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/itemview" element={<ItemView />} />
          <Route path="/list" element={<ListedItems marketPlace={marketPlace} nft={nft} />} />
          <Route path="/create" element={<Create marketPlace={marketPlace} nft={nft} />} />
          {/* Add your other routes and components here */}
        </Routes>
      </>
    </Router>
  );
}

export default App;

