import { CustomersMajor, MarketingMajor, OrdersMinor, SettingsMajor } from "@shopify/polaris-icons";

import { Navigation } from "@shopify/polaris";
import React from "react";
import { _Url } from "@/configs/routes.url";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const { pathname } = useLocation();
  // Section1
  const left_top = [
    {
      url: _Url.test,
      label: "Navigation.Section",
      exactMatch: true,
    },
  ];
  // 左边主菜单 Section2
  const left_menu = [
    {
      url: _Url.home,
      label: "Home",
      icon: CustomersMajor,
      exactMatch: true,
      // badge: '15',
      subNavigationItems: [
        {
          url: _Url.partners,
          label: "All partners",
          exactMatch: true,
        },
        {
          url: "/collections",
          label: "Collections",
          exactMatch: true,
        },
      ],
    },
    {
      url: _Url.campaigns,
      label: "Campaigns",
      icon: MarketingMajor,
      exactMatch: true,
      // badge: '15',
      subNavigationItems: [
        {
          url: _Url.allcampaigns,
          label: "All campaigns",
          exactMatch: true,
        },
        {
          url: _Url.cooperations,
          label: "Cooperations",
          exactMatch: true,
        },
        {
          url: _Url.promotions,
          label: "Promotions",
          exactMatch: true,
        },
      ],
    },
    {
      url: _Url.orders,
      label: "Orders",
      icon: OrdersMinor,
      exactMatch: true,
      subNavigationItems: [
        {
          url: _Url.deliveries,
          label: "Deliveries",
          exactMatch: true,
        },
        {
          url: _Url.payments,
          label: "Payments",
          exactMatch: true,
        },
      ],
    },
  ];
  // 左边下方菜单 Section3
  const bottom_menu = [
    {
      url: _Url.settings,
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
