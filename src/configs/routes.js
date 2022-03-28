import { Suspense, lazy } from "react";

import { Home } from "@/pages/Home/Home";
import { Login } from "@/pages/Login/Login";
import { routesURL } from "./routes.url";

const Child = lazy(() => import("@/pages/Child/Child")); // 懒加载必须默认导出

// react-router v6 迁移: 之前写法是 component 现在的写法是 element
export const routes = [
  {
    path: routesURL.home,
    element: <Home />,
    children: [],
  },
  {
    path: routesURL.partners,
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Child />
      </Suspense>
    ),
  },
];

export const login_routes = [
  {
    path: routesURL.login,
    element: <Login />,
  },
];
