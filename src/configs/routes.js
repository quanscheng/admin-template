import { Suspense, lazy } from "react";

import { Home } from "@/pages/Home/Home";
import { Login } from "@/pages/Login/Login";
import { _Url } from "./routes.url";

const Child = lazy(() => import("@/pages/Child/Child")); // 懒加载必须默认导出

// react-router v6 迁移: 之前写法是 component 现在的写法是 element
export const routes = [
  {
    path: _Url.home,
    element: <Home />,
    children: [],
  },
  {
    path: _Url.partners,
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Child />
      </Suspense>
    ),
  },
];

export const login_routes = [
  {
    path: _Url.login,
    element: <Login />,
  },
];
