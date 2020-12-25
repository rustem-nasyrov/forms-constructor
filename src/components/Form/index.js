// @ts-nocheck
'use strict';

// Stylesheets
// import styles from './form.scss';

// Label
import Label from '../Label';
// Items manager
import Components from '../index';

export default class Form {
  elem = null;
  constructor(el, options) {
    const container = el;
    const formElem = document.createElement('form');
    const { label = null, id = 'fc-form', name = 'fc-form', items = null } = options;

    this.elem = formElem;

    const itemsContainer = document.createElement('div');

    itemsContainer.classList.add('form-body');
    
    if (label) {
      new Label(this.elem, label);
    }
    
    formElem.classList.add('form');
    formElem.appendChild(itemsContainer);
    container.appendChild(this.elem);
    
    if (items) {
      new Components(itemsContainer, items);
    }
  }
}