import { Routes, Route } from "react-router-dom";
import BitcoinRates from "./BitCoinComponent";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import PageNotFound from "./PageNotFound";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/bitcoin-rates" element={<BitcoinRates></BitcoinRates>}></Route>
      <Route path="/login" element={<LoginForm></LoginForm>}></Route>
      <Route path="*" element ={<PageNotFound></PageNotFound>}></Route>
    </Routes>

  );
}
export default AppRoutes;