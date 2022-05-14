import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Home from "@/pages/rootLevelPages/home/Home";
// import Login from "@/pages/rootLevelPages/login/Login";
// import ComputerDevice from "@/pages/secondLevelPages/computerManage/computerDevice/ComputerDevice";
// import ComputerInfo from "@/pages/secondLevelPages/computerManage/computerInfo/ComputerInfo";
// import NotifyData from "@/pages/secondLevelPages/notifyManage/notifyData/NotifyData";
// import NotifyInfo from "@/pages/secondLevelPages/notifyManage/notifyInfo/NotifyInfo";
// import UserInfo from "@/pages/secondLevelPages/userManage/userInfo/UserInfo";
// import UserPassword from "@/pages/secondLevelPages/userManage/userPassword/UserPassword";
// import AvatorDetail from "@/pages/thirdLevelPages/home-userManage-userInfo/avatorDetail/AvatorDetail";
// import UserDetail from "@/pages/thirdLevelPages/home-userManage-userInfo/userDetail/UserDetail";
const Login = lazy(() => import("@/pages/rootLevelPages/login/Login"));
const Home = lazy(() => import("@/pages/rootLevelPages/home/Home"));
const ComputerDevice = lazy(
  () =>
    import("@/pages/secondLevelPages/computerManage/computerInfo/ComputerInfo")
);
const ComputerInfo = lazy(
  () =>
    import("@/pages/secondLevelPages/computerManage/computerInfo/ComputerInfo")
);
const NotifyData = lazy(
  () => import("@/pages/secondLevelPages/notifyManage/notifyData/NotifyData")
);
const NotifyInfo = lazy(
  () => import("@/pages/secondLevelPages/notifyManage/notifyInfo/NotifyInfo")
);
const UserInfo = lazy(
  () => import("@/pages/secondLevelPages/userManage/userInfo/UserInfo")
);
const UserPassword = lazy(
  () => import("@/pages/secondLevelPages/userManage/userPassword/UserPassword")
);
const AvatorDetail = lazy(
  () =>
    import(
      "@/pages/thirdLevelPages/home-userManage-userInfo/avatorDetail/AvatorDetail"
    )
);
const UserDetail = lazy(
  () =>
    import(
      "@/pages/thirdLevelPages/home-userManage-userInfo/userDetail/UserDetail"
    )
);

export const rootRouterConfig = [
  { path: "/", element: <Login /> },
  {
    path: "/home/*",
    element: <Home />,
    children: [
      {
        path: "/*",
        element: <Navigate to={"/home/userManage/userPassword"} />,
      },
      {
        path: "userManage/userPassword/*",
        element: <UserPassword />,
        children: [
          { path: "change", element: <p>修改密码</p> },
          { path: "reset", element: <p>重置密码</p> },
        ],
      },
      {
        path: "userManage/userInfo/*",
        element: <UserInfo />,
        children: [
          { path: "detail:id", element: <UserDetail /> },
          { path: "avator:id", element: <AvatorDetail /> },
        ],
      },
      {
        path: "computerManage/computerInfo/*",
        element: <ComputerInfo />,
      },
      {
        path: "computerManage/computerDevice/*",
        element: <ComputerDevice />,
      },
      {
        path: "notifyManage/notifyInfo/*",
        element: <NotifyInfo />,
      },
      {
        path: "notifyManage/notifyData/*",
        element: <NotifyData />,
      },
      { path: "*", element: <p>ERROR-PAGE</p> },
    ],
  },
  { path: "*", element: <p>ERROR-PAGE</p> },
];
