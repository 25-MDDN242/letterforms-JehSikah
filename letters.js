const C = 20;
const strW = 12;

const alphabet = {
  "default": {
    "arcX": 0,
    "arcY": -C,
    "arcR": C*2,
    "arcStart": -180,
    "arcStop": 90,

    "lineX": 0,
    "lineY": 0,
    "lineX2": 0,
    "lineY2": C,

    "circX": 0,
    "circY": C*2
  },

  "A": {
    "arcX": C/2,
    "arcY": -C/2,
    "arcR": C*3,
    "arcStart": -180,
    "arcStop": 0,

    "lineX": -C,
    "lineY": -C/2,
    "lineX2": -C,
    "lineY2": C*2,

    "circX": -C*2,
    "circY": C*2
  },

  "B": {
    "arcX": 0,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": -C*2,
    "lineY": C*2,
    "lineX2": C*2,
    "lineY2": C*2,

    "circX": 0,
    "circY": -C*2
  },

  "C": {
    "arcX": 0,
    "arcY": C,
    "arcR": C*2,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": C,
    "lineY": C,
    "lineX2": C,
    "lineY2": C*2,

    "circX": 0,
    "circY": -C*2
  },

  "D": {
    "arcX": -C*2,
    "arcY": C,
    "arcR": C*3,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": -C*2,
    "lineY": -C*2,
    "lineX2": C*2,
    "lineY2": -C*2,

    "circX": C,
    "circY": C
  },

  "E": {
    "arcX": 0,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": -180,

    "lineX": -C*2,
    "lineY": -C*2,
    "lineX2": -C*2,
    "lineY2": 0,

    "circX": C,
    "circY": -C
  },

  "F": {
    "arcX": 0,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": -180,
    "arcStop": -90,

    "lineX": 0,
    "lineY": 0,
    "lineX2": C*2,
    "lineY2": 0,

    "circX": C*2,
    "circY": -C*2
  },

  "G": {
    "arcX": -C*2,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": 0,
    "lineY": 0,
    "lineX2": 0,
    "lineY2": -C*2,

    "circX": 0,
    "circY": 0
  },

  "H": {
    "arcX": -C*2,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": -C*2,
    "lineY": -C*2,
    "lineX2": C*2,
    "lineY2": -C*2,

    "circX": C*2,
    "circY": 0
  },

  "I": {
    "arcX": C,
    "arcY": -C,
    "arcR": C*2,
    "arcStart": 180,
    "arcStop": -90,

    "lineX": 0,
    "lineY": 0,
    "lineX2": 0,
    "lineY2": C*2,

    "circX": 0,
    "circY": -C
  },

  "J": {
    "arcX": 0,
    "arcY": -C,
    "arcR": C*2,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": 0,
    "lineY": 0,
    "lineX2": 0,
    "lineY2": C*2,

    "circX": 0,
    "circY": 0
  },

  "K": {
    "arcX": C*2,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": 180,
    "arcStop": -90,

    "lineX": 0,
    "lineY": -C*2,
    "lineX2": 0,
    "lineY2": 0,

    "circX": -C*2,
    "circY": 0
  },

  "L": {
    "arcX": 0,
    "arcY": C,
    "arcR": C*2,
    "arcStart": 90,
    "arcStop": -180,

    "lineX": -C,
    "lineY": -C*2,
    "lineX2": -C,
    "lineY2": C,

    "circX": C,
    "circY": -C
  },

  "M": {
    "arcX": C,
    "arcY": C,
    "arcR": C*2,
    "arcStart": 0,
    "arcStop": 90,

    "lineX": C*2,
    "lineY": -C*2,
    "lineX2": C*2,
    "lineY2": C,

    "circX": -C,
    "circY": -C
  },

  "N": {
    "arcX": -C*2,
    "arcY": -C*2,
    "arcR": C*8,
    "arcStart": 0,
    "arcStop": 90,

    "lineX": -C*2,
    "lineY": -C*2,
    "lineX2": -C*2,
    "lineY2": -C,

    "circX": -C*2,
    "circY": -C
  },

  "O": {
    "arcX": -C*2,
    "arcY": -C*2,
    "arcR": C*8,
    "arcStart": 0,
    "arcStop": 90,

    "lineX": -C*2,
    "lineY": -C*2,
    "lineX2": C*2,
    "lineY2": -C*2,

    "circX": -C*2,
    "circY": -C*2
  },

  "P": {
    "arcX": C,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": -180,

    "lineX": C,
    "lineY": -C*2,
    "lineX2": C,
    "lineY2": 0,

    "circX": -C,
    "circY": -C*2
  },

  "Q": {
    "arcX": C,
    "arcY": C,
    "arcR": C*2,
    "arcStart": -90,
    "arcStop": 90,

    "lineX": -C*2,
    "lineY": C*2,
    "lineX2": C,
    "lineY2": C*2,

    "circX": 0,
    "circY": -C*2
  },

  "R": {
    "arcX": 0,
    "arcY": C,
    "arcR": C*2,
    "arcStart": 0,
    "arcStop": 90,

    "lineX": C,
    "lineY": -C*2,
    "lineX2": C,
    "lineY2": 0,

    "circX": -C,
    "circY": -C*2
  },

  "S": {
    "arcX": C,
    "arcY": -C*2,
    "arcR": C*2,
    "arcStart": 90,
    "arcStop": 180,

    "lineX": C,
    "lineY": -C,
    "lineX2": C,
    "lineY2": C*2,

    "circX": 0,
    "circY": -C*2
  },

  "T": {
    "arcX": C,
    "arcY": -C,
    "arcR": C*2,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": -C*2,
    "lineY": -C*2,
    "lineX2": C,
    "lineY2": -C*2,

    "circX": C*2,
    "circY": C*2
  },

  "U": {
    "arcX": C,
    "arcY": -C,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": 180,

    "lineX": -C,
    "lineY": -C,
    "lineX2": 0,
    "lineY2": -C,

    "circX": C,
    "circY": -C
  },

  "V": {
    "arcX": -C*2,
    "arcY": -C*2,
    "arcR": C*4,
    "arcStart": 0,
    "arcStop": 90,

    "lineX": -C*2,
    "lineY": C*2,
    "lineX2": C*2,
    "lineY2": C*2,

    "circX": C*2,
    "circY": 0
  },

  "W": {
    "arcX": 0,
    "arcY": 0 ,
    "arcR": C*2,
    "arcStart": 180,
    "arcStop": -90,

    "lineX": -C,
    "lineY": 0,
    "lineX2": -C,
    "lineY2": C,

    "circX": C,
    "circY": C
  },

  "X": {
    "arcX": C*2,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 180,
    "arcStop": -90,

    "lineX": 0,
    "lineY": 0,
    "lineX2": 0,
    "lineY2": C*2,

    "circX": -C*2,
    "circY": -C*2
  },

  "Y": {
    "arcX": C*2,
    "arcY": C*2,
    "arcR": C*2,
    "arcStart": 180,
    "arcStop": -90,

    "lineX": -C,
    "lineY": -C*2,
    "lineX2": -C,
    "lineY2": C*2,

    "circX": C,
    "circY": -C
  },

  "Z": {
    "arcX": 0,
    "arcY": -C,
    "arcR": C*2,
    "arcStart": 180,
    "arcStop": 0,

    "lineX": C,
    "lineY": -C,
    "lineX2": C,
    "lineY2": C*2,

    "circX": -C,
    "circY": C*2
  },

  "0": {
    "arcX": C,
    "arcY": -C,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": 180,

    "lineX": C,
    "lineY": -C,
    "lineX2": C,
    "lineY2": C,

    "circX": 0,
    "circY": -C
  },

  "1": {
    "arcX": C,
    "arcY": -C*2,
    "arcR": C*2,
    "arcStart": 90,
    "arcStop": 180,

    "lineX": C,
    "lineY": -C,
    "lineX2": C,
    "lineY2": C*2,

    "circX": 0,
    "circY": 0
  },

  "2": {
    "arcX": -C,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": -90,
    "arcStop": 0,

    "lineX": -C,
    "lineY": -C*2,
    "lineX2": -C,
    "lineY2": 0,

    "circX": C,
    "circY": 0
  },
  
  "3": {
    "arcX": C,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": -90,

    "lineX": 0,
    "lineY": 0,
    "lineX2": -C,
    "lineY2": 0,

    "circX": 0,
    "circY": 0
  },

  "4": {
    "arcX": 0,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": -90,

    "lineX": C*2,
    "lineY": -C*2,
    "lineX2": C*2,
    "lineY2": C*2,

    "circX": -C,
    "circY": 0
  },

  "5": {
    "arcX": 0,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": -90,

    "lineX": C,
    "lineY": 0,
    "lineX2": -C*2,
    "lineY2": 0,

    "circX": C*2,
    "circY": -C*2
  },

  "6": {
    "arcX": 0,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 90,
    "arcStop": -90,

    "lineX": 0,
    "lineY": 0,
    "lineX2": C*2,
    "lineY2": 0,

    "circX": C*2,
    "circY": -C*2
  },

  "7": {
    "arcX": 0,
    "arcY": 0,
    "arcR": C*4,
    "arcStart": 0,
    "arcStop": 180,

    "lineX": 0,
    "lineY": 0,
    "lineX2": 0,
    "lineY2": -C*2,

    "circX": 0,
    "circY": 0
  },

  "8": {
    "arcX": 0,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": 180,
    "arcStop": 0,

    "lineX": -C*2,
    "lineY": -C,
    "lineX2": C*2,
    "lineY2": -C,

    "circX": 0,
    "circY": C*2
  },

  "9": {
    "arcX": 0,
    "arcY": C*2,
    "arcR": C*4,
    "arcStart": 180,
    "arcStop": 0,

    "lineX": -C*2,
    "lineY": -C,
    "lineX2": C*2,
    "lineY2": -C,

    "circX": 0,
    "circY": -C*2
  }

}