"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";
import Fern from "@ryangjchandler/fern";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init Fern plugin
Alpine.plugin(Fern);
//Init collapse plugin
Alpine.plugin(collapse);
//Init Fern persisted store
Alpine.persistedStore("app", {
  isDark: false,
  isSidebarOpened: true,
  isSidebarOpenedMobile: false,
  activeSidebar: "dashboard",
  activeSidebarMenu: "",
  isPanelOpened: false,
});
//Start Alpine JS
Alpine.start();

import { insertBgImages } from "./libs/utils/utils";
import { initLazyLoading } from "./libs/utils/lazyload";
import "./libs/demo";
import "./libs/components";
import "./libs/pages";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Lazy Loading
    const lazy = initLazyLoading();

    //Switch backgrounds
    const changeBackgrounds = insertBgImages();
  }
};
