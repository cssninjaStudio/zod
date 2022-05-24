export function initSidebar() {
  return {
    openSidebar(param) {
      if (this.$store.app.sidebarOpenedState === false) {
        this.$store.app.sidebarOpenedState = !this.$store.app
          .sidebarOpenedState;
      }
      this.$store.app.activeSidebar = param;
      this.$store.app.isPanelOpened = false
      console.log(this.$store.app.activeSidebar);
    },
  };
}

export function initSidebarLeft() {
  return {
    init() {
      let location = window.location.href;
      let links = document.getElementsByClassName("sub-menu-item");
      for (var i = 0; i < links.length; i++) {
        if (links[i].href === location) {
          links[i].classList.add('is-active');
        }
      }
    },
    closeSidebar() {
      this.$store.app.sidebarOpenedState = false;
      this.$store.app.isSidebarOpenedMobile = false
    },

    openSidebarMenu(param) {
      if (this.$store.app.activeSidebarMenu === param) {
        this.$store.app.activeSidebarMenu = "";
      } else {
        switch (param) {
          case "dashboard-menu":
            this.$store.app.activeSidebarMenu = "dashboard-menu";
            break;
          case "datatables-menu":
            this.$store.app.activeSidebarMenu = "datatables-menu";
            break;
          case "charts-menu":
            this.$store.app.activeSidebarMenu = "charts-menu";
            break;
          case "auth-menu":
            this.$store.app.activeSidebarMenu = "auth-menu";
            break;
          case "accounting-menu":
            this.$store.app.activeSidebarMenu = "accounting-menu";
            break;
          case "social-menu":
            this.$store.app.activeSidebarMenu = "social-menu";
            break;
          case "forum-menu":
            this.$store.app.activeSidebarMenu = "forum-menu";
            break;
          case "support-menu":
            this.$store.app.activeSidebarMenu = "support-menu";
            break;
          case "projects-menu":
            this.$store.app.activeSidebarMenu = "projects-menu";
            break;
          case "crm-menu":
            this.$store.app.activeSidebarMenu = "crm-menu";
            break;
          case "contacts-menu":
            this.$store.app.activeSidebarMenu = "contacts-menu";
            break;
          case "messages-menu":
            this.$store.app.activeSidebarMenu = "messages-menu";
            break;
          case "forms-menu":
            this.$store.app.activeSidebarMenu = "forms-menu";
            break;
          case "empty-menu":
            this.$store.app.activeSidebarMenu = "empty-menu";
            break;
          case "others-menu":
            this.$store.app.activeSidebarMenu = "others-menu";
            break;

          default:
            console.log(`Sorry, something went wrong.`);
        }
      }
    },
  };
}