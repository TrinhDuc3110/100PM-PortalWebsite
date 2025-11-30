import { memo } from "react";
import { Outlet } from "react-router-dom";
import EmployerHeader from "../header";
import EmployerFooter from "../footer";

const MasterLayout = ({ ...props }) => {
  return (
    <>
      {/* Phần này dùng cho Header + nội dung, muốn max-width bao nhiêu tùy bạn */}
      <div {...props}>
        <EmployerHeader />
        <Outlet />
      </div>

      {/* Footer đứng riêng => full màn hình */}
      <EmployerFooter />
    </>
  );
};

export default memo(MasterLayout);