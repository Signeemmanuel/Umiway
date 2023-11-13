import { defineStore } from "pinia";

export const UseToastStore = defineStore("toast", {
   store: () => {
      return {
         ms: 0,
         message: "",
         classes: "",
         isVisible: false,
      };
   },

   action: {
      showToast(ms, message, classes) {
         this.ms = parseInt(ms);
         this.message = message;
         this.classes = classes;
         this.isVisible = true;

         setTimeout(() => {
            this.classes += " -translate-y-28";
         }, 10);

         setTimeout(() => {
            this.classes.replace("-translate-y-28", "");
         }, this.ms - 500);

         setTimeout(() => {
            this.isVisible = false;
         }, this.ms);
      },
   },
});
