import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="section">
      <h2>products</h2>
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path=":productId" element={<SingleProduct />} />
      </Routes> */}
    </div>
  );
};
export default Home;
