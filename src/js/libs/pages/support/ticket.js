import { successToast } from "../../components/toast/toast";

export function initSupportTicket() {
  return {
    typeReply(e) {
      let value = e.target.value;
      if (!value == "") {
        this.$refs.composemessage.classList.add("is-expanded");
      } else {
        this.$refs.composemessage.classList.remove("is-expanded");
      }
    },

    saveTicket(e) {
      e.target.classList.add("is-loading");
      setTimeout(() => {
        e.target.classList.remove("is-loading");
        this.ticketSidebarOpen = false;
        successToast("Changes saved successfully.");
      }, 1200);
    },
  };
}
