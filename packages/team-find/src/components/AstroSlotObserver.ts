export default class AstroSlotObserver extends HTMLElement {
  constructor() {
    super();

    if (this.assignedSlot) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(async (mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === 'data-url') {
            console.log('mutation', mutation)

            const response = await fetch((mutation.target as HTMLElement).dataset.url);
            this.innerHTML = await response.text();
          }
        });
      });

      observer.observe(this.assignedSlot, {
        attributes: true //configure it to listen to attribute changes
      });
    }
  }
}

customElements.define('astro-slot-observer', AstroSlotObserver);
