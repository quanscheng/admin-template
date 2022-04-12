import { Suspense, lazy } from "react";

import { Home } from "@/pages/Home/Home";
import { ur } from "./routes.url";

const Child = lazy(() => import("@/pages/Child/Child")); // 懒加载必须默认导出

// react-router v6 迁移: 之前写法是 component 现在的写法是 element
export const routes = [
  {
    path: ur.home,
    element: <Home />,
    children: [],
  },
  {
    path: ur.partners,
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Child />
      </Suspense>
    ),
  },
];
