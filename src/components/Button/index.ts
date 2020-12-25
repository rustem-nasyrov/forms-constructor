"use strict";
// import EventManager from '../../Utils/EventsManager';

/**
 * Компонент кнопки
 */
class Button {
  private parentElement: Element | null;
  private buttonElement: HTMLButtonElement | null;

  public constructor(
    parentElement: Element,
    options: { type: string; text: string | null; handler: Function | null }
  ) {
    this.parentElement = parentElement;
    const { type = "button", text, handler = null } = options;

    // Button container
    const buttonElementContainer = document.createElement("div");

    buttonElementContainer.classList.add("fc-btn-container");

    // Button
    const buttonElement = (this.buttonElement = document.createElement(
      "button"
    ));

    if (text) {
    buttonElement.innerText = text;
    } else {
      buttonElement.innerText = 'Button';
    }

    // Apply created elements to 'parentElement'
    if (handler) {
      this.applyHandler(handler);
    }

    buttonElementContainer.appendChild(buttonElement);
    this.parentElement.appendChild(buttonElementContainer);
  }

  private applyHandler(handler: Function | any) {
    this.buttonElement.addEventListener("click", handler, false);
  }
}

export default Button;
