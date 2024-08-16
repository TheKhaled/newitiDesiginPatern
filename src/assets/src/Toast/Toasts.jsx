import React from "react";

export default function Toasts() {
  class Toast {
    constructor() {
      this.toasts = [];
      this.container = document.createElement("div");
      this.container.style.position = "fixed";
      this.container.style.bottom = "10px";
      this.container.style.right = "10px";
      this.container.style.zIndex = "1000";
      document.body.appendChild(this.container);
    }

    createToast(message, type) {
      const toast = document.createElement("div");
      toast.textContent = message;
      toast.style.padding = "10px";
      toast.style.marginBottom = "10px";
      toast.style.borderRadius = "5px";
      toast.style.color = "#fff";
      toast.style.maxWidth = "300px";
      toast.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease-in-out";

      if (type === "success") {
        toast.style.backgroundColor = "#28a745";
      } else if (type === "error") {
        toast.style.backgroundColor = "#dc3545";
      } else {
        toast.style.backgroundColor = "#343a40";
      }

      this.container.appendChild(toast);
      this.toasts.push(toast);

      requestAnimationFrame(() => {
        toast.style.opacity = "1";
      });

      // Remove the toast after 3 seconds
      setTimeout(() => {
        this.removeToast(toast);
      }, 3000);
    }

    toast(message) {
      this.createToast(message, "default");
    }

    success(message) {
      this.createToast(message, "success");
    }

    error(message) {
      this.createToast(message, "error");
    }

    dismissAll() {
      this.toasts.forEach((toast) => this.removeToast(toast));
    }

    removeToast(toast) {
      // Fade out the toast
      toast.style.opacity = "0";

      setTimeout(() => {
        this.container.removeChild(toast);
        this.toasts = this.toasts.filter((t) => t !== toast);
      }, 600);
    }
  }

  // Usage
  const toast = new Toast();
  toast.toast("This is a dfault toast");
  toast.success("This is a succes toast");
  toast.error("This is an error toast");

  return <div>Toasts</div>;
}
