import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({ ...props }) => {
  return (
    <>
      {/* Phần này dùng cho Header + nội dung, muốn max-width bao nhiêu tùy bạn */}
      <div {...props}>
        <Header />
        <Outlet />
      </div>

      {/* Footer đứng riêng => full màn hình */}
      <Footer />
    </>
  );
};

export default memo(MasterLayout);