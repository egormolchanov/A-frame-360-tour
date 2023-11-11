export default {
  room_1: {
    nameScense: 'room_1',
    nextScense: [
      {
        position: '-2.110 -0.500 -5.990',
        rotation: '0 0 0',
        next: 'room_2'
      }
    ],
    info: [
      {
        position: '-2.679 1.000 -1.201',
        rotation: '0 90 0',
        textModal: 'Здесь находится ресепшен, где можно узнать всю необходимую информацию о заведении'
      }
    ]
  },
  room_2: {
    nameScense: 'room_2',
    nextScense: [
      {
        position: '1.589 -0.687 -5.250',
        rotation: '0 0 0',
        next: 'room_2_1'
      },
      {
        position: '9.741 -0.814 -1.059',
        rotation: '0 90 0',
        next: 'room_2_2'
      },
      {
        position: '-3.387 -0.500 -0.937',
        rotation: '0 90 0',
        next: 'room_1'
      }
    ],
    info: [
      {
        position: '0 1 -4',
        rotation: '0 0 0',
        textModal: 'Выход на веранду'
      },
      {
        position: '2.548 1.000 0.661',
        rotation: '0 75 0',
        textModal: 'Основной зал'
      }
    ]
  },
  room_2_1: {
    nameScense: 'room_2_1',
    nextScense: [
      {
        position: '3.693 -0.533 4.255',
        rotation: '0 0 0',
        next: 'room_2'
      },
      {
        position: '-4.389 0.886 1.365',
        rotation: '0 90 0',
        next: 'room_2_1_1'
      },
      {
        position: '3.375 0.675 -2.015',
        rotation: '0 90 0',
        next: 'room_2_1_2'
      }
    ],
    info: [
      {
        position: '0 1 -4',
        rotation: '0 0 0',
        textModal: 'Веранда'
      }
    ]
  },
  room_2_1_1: {
    nameScense: 'room_2_1_1',
    nextScense: [
      {
        position: '-6.011 -0.118 2.846',
        rotation: '0 90 0',
        next: 'room_2_1'
      }
    ]
  },
  room_2_1_2: {
    nameScense: 'room_2_1_2',
    nextScense: [
      {
        position: '-3.354 -0.500 4.687',
        rotation: '0 120 0',
        next: 'room_2_1'
      },
      {
        position: '2.687 -0.500 -8.141',
        rotation: '0 120 0',
        next: 'room_2_1_3'
      }
    ]
  },
  room_2_1_3: {
    nameScense: 'room_2_1_3',
    nextScense: [
      {
        position: '1.585 -0.500 -5.990',
        rotation: '0 0 0',
        next: 'room_2_1_2'
      },
      {
        position: '-6.641 0.551 -2.225',
        rotation: '0 90 0',
        next: 'room_2_1_4'
      }
    ]
  },
  room_2_1_4: {
    nameScense: 'room_2_1_4',
    nextScense: [
      {
        position: '0.356 -0.078 -5.990',
        rotation: '0 0 0',
        next: 'room_2_1_3'
      }
    ]
  },
  room_2_2: {
    nameScense: 'room_2_2',
    nextScense: [
      {
        position: '2.133 0.112 -5.990',
        rotation: '0 0 0',
        next: 'room_2'
      }
    ],
    info: [
      {
        position: '0.021 1.916 3.306',
        rotation: '0 180 0',
        textModal: 'Здесь можно сделать заказ напиков'
      }
    ]
  }
}
