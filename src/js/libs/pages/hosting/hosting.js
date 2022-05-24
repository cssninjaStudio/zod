export function iniHostingDashboard() {
  return {
    activeTab: "resources",
    toggleTabs(e) {
      let element = e.target;
      let target = element.getAttribute("data-target");
      this.activeTab = target;
    },
    headerActive: true,
    removeHeader() {
      this.headerActive = false;
    },
  };
}
