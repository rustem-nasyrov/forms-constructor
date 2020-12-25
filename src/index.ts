// @ts-nocheck
'use strict'

import Components from './components';
// import ConstructorUI from './Constructor';

export default class FormsConstructor extends Components {
  constructor(opt) {
    const { el, mode = 'output', items = null } = opt;
    let rootElem = document.querySelector(el);

    switch (mode) {
      case 'builder':
      case 'constructor':
        new ConstructorUI(rootElem);
        break;
      case 'output':
        super(rootElem, items);
        break;
      default:
        super(rootElem, items);
    }
  }
}

new FormsConstructor({
  el: '#app',
  mode: 'output',
  items: {
    form: {
      label: {
        text: 'Моя первая форма',
        align: 'center',
      },
      name: 'test-form',
      id: 'test',
      method: 'post',
      items: [
        {
          type: 'fieldset',
          label: 'Аккаунт',
          name: 'user-address',
          items: [
            {
              type: 'text',
              label: 'Логин',
              placeholder: 'username',
            },
            {
              type: 'email',
              label: 'Эл. почта',
              placeholder: 'mail@domain.com',
            },
          ],
        },
        {
          type: 'fieldset',
          label: 'Данные пользователя',
          name: 'user-info',
          items: [
            {
              type: 'text',
              label: 'Фамилия',
              placeholder: 'Иванов',
            },
            {
              type: 'text',
              label: 'Имя',
              placeholder: 'Иван',
            },
            {
              type: 'date',
              label: 'Дата рождения',
              placeholder: '05.05.1985',
            },
            {
              type: 'combo',
              label: 'Пол',
              placeholder: 'Выберите ваш пол',
              valueField: 'id',
              displayField: 'capt',
              value: {
                fields: ['id', 'capt'],
                data: [
                  { id: 0, capt: 'Мужчина', },
                  { id: 1, capt: 'Женщина', },
                  { id: 2, capt: 'Другое', },
                ],
              },
            },
          ],
        },
        {
          type: 'combo',
          label: 'List',
          value: {
            fields: ['id', 'capt'],
            data: [
              { id: 0, capt: 'Мужчина', },
              { id: 1, capt: 'Женщина', },
              { id: 2, capt: 'Другое', },
            ],
          },
        },
        {
          type: 'button',
          text: 'Submit',
          handler: function () {
            alert('Button clicked!');
          },
        }
      ],
    },
  },
});