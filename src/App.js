import DienThoai from "./component/BaiTapDienThoai/DienThoai";
import DemoRedux from "./component/DemoRedux/DemoRedux";
import GameDoXiNgau from "./component/DemoRedux/GameDoXiNgau/GameDoXiNgau";
import HienThiGioHang from "./component/ModelGioHang/HienThiGioHang";
import ShoesStore from "./component/ShoesProduct/ShoesStore";

function App() {
  return (
    <div className="App container">
      {/* <DienThoai></DienThoai> */}
      {/* <HienThiGioHang></HienThiGioHang> */}
      {/* <DemoRedux></DemoRedux> */}
      {/* <GameDoXiNgau></GameDoXiNgau> */}
      <ShoesStore></ShoesStore>
    </div>
  );
}

export default App;
