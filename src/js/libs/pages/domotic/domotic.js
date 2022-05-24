export function initDomoticDashboard() {
  return {
    activeBox: 'living',
    toggleBox(e) {
      let element = e.target;
      let target = element.getAttribute('data-target');
      this.activeBox = target
    },
  }
}