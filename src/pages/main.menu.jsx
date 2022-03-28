import { CustomersMajor, MarketingMajor, OrdersMinor, SettingsMajor } from "@shopify/polaris-icons";

import { Navigation } from "@shopify/polaris";
import React from "react";
import { routesURL } from "@/configs/routes.url";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const { pathname } = useLocation();
  // Section1
  const left_top = [
    {
      url: routesURL.test,
      label: "Navigation.Section",
      exactMatch: true,
    },
  ];
  // 左边主菜单 Section2
  const left_menu = [
    {
      url: routesURL.home,
      label: "Home",
      icon: CustomersMajor,
      exactMatch: true,
      // badge: '15',
      subNavigationItems: [
        {
          url: routesURL.partners,
          label: "All partners",
          // exactMatch: true, // 不加所有子路由都会让改标签处于选中状态
        },
        {
          url: "/collections",
          label: "Collections",
          exactMatch: true,
        },
      ],
    },
    {
      url: routesURL.campaigns,
      label: "Campaigns",
      icon: MarketingMajor,
      exactMatch: true,
      // badge: '15',
      subNavigationItems: [
        {
          url: routesURL.allcampaigns,
          label: "All campaigns",
          exactMatch: true,
        },
        {
          url: routesURL.cooperations,
          label: "Cooperations",
          exactMatch: true,
        },
        {
          url: routesURL.promotions,
          label: "Promotions",
          exactMatch: true,
        },
      ],
    },
    {
      url: routesURL.orders,
      label: "Orders",
      icon: OrdersMinor,
      exactMatch: true,
      subNavigationItems: [
        {
          url: routesURL.deliveries,
          label: "Deliveries",
          exactMatch: true,
        },
        {
          url: routesURL.payments,
          label: "Payments",
          exactMatch: true,
        },
      ],
    },
  ];
  // 左边下方菜单 Section3
  const bottom_menu = [
    {
      url: routesURL.settings,
      label: "settings",
      icon: SettingsMajor,
      exactMatch: true,
      // badge: '15',
    },
  ];
  return (
    <Navigation location={pathname}>
      <Navigation.Section items={left_top} />
      <Navigation.Section fill separator items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
  );
};
