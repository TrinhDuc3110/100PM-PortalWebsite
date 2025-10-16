import MasterLayout from "./theme/masterLayout";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import Homepage from "./pages/users/homepage";
import JobPage from "./pages/users/jobPage";

const renderUserRoutes = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage />,
        },
        {
            path: ROUTERS.USER.JOB,
            component: <JobPage />,
        },
    ];
    return (
        <MasterLayout>
        <Routes>
            {userRouters.map((item, key) => {
                return <Route key={key} path={item.path} element={item.component} />;
            })
        }
        </Routes>
        </MasterLayout>
    );
};
const RouterCustom = () => {
    return renderUserRoutes();
};
export default RouterCustom;