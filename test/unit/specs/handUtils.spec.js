import handUtils from '../../../src/utils/handUtils';

describe('handUtils', () => {
  describe('isSPTF()', () => {
    it('should return true for singles', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        }
      ];

      expect(handUtils.isSPTF(hand)).to.be.eq(true);
    });
    it('should return true for pairs', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '4H',
          rank: 8,
          isSelected: false
        }
      ];

      expect(handUtils.isSPTF(hand)).to.be.eq(true);
    });
    it('should return true for triples', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '4H',
          rank: 8,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        }
      ];

      expect(handUtils.isSPTF(hand)).to.be.eq(true);
    });
    it('should return true for four of a kind', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '4H',
          rank: 8,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        }
      ];

      expect(handUtils.isSPTF(hand)).to.be.eq(true);
    });
    it('should return false for a single diff numeral', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        }
      ];

      expect(handUtils.isSPTF(hand)).to.be.eq(false);
    });
  });
  describe('isConsecutive()', () => {
    it('should return false for presence of 2', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '5H',
          rank: 8,
          isSelected: false
        },
        {
          name: '6D',
          rank: 7,
          isSelected: false
        },
        {
          name: '2H',
          rank: 52,
          isSelected: false
        }
      ];

      expect(handUtils.isConsecutive(hand)).to.be.eq(false);
    });
    it('should return false for less than 3 cards', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '5H',
          rank: 8,
          isSelected: false
        }
      ];

      expect(handUtils.isConsecutive(hand)).to.be.eq(false);
    });
    it('should return true for consecutive sequence with number and face cards', () => {
      const hand = [
        {
          name: '8H',
          rank: 24,
          isSelected: false
        },
        {
          name: '9H',
          rank: 28,
          isSelected: false
        },
        {
          name: '10H',
          rank: 32,
          isSelected: false
        },
        {
          name: 'JH',
          rank: 36,
          isSelected: false
        },
        {
          name: 'QH',
          rank: 40,
          isSelected: false
        }];

      expect(handUtils.isConsecutive(hand)).to.be.eq(true);
    });
  });
  describe('isConsecTriplePairs()', () => {
    it('should return false for less than 6 cards', () => {
      const hand = [
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        }
      ];

      expect(handUtils.isConsecTriplePairs(hand)).to.be.eq(false);
    });
    it('should return false for non-pairs', () => {
      const hand = [
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '5D',
          rank: 11,
          isSelected: false
        },
        {
          name: '6S',
          rank: 13,
          isSelected: false
        },
        {
          name: '7D',
          rank: 19,
          isSelected: false
        },
        {
          name: '8S',
          rank: 21,
          isSelected: false
        },
        {
          name: '8D',
          rank: 23,
          isSelected: false
        }
      ];

      expect(handUtils.isConsecTriplePairs(hand)).to.be.eq(false);
    });
    it('should return false for non-consecutive pairs', () => {
      const hand = [
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '5D',
          rank: 11,
          isSelected: false
        },
        {
          name: '7S',
          rank: 17,
          isSelected: false
        },
        {
          name: '7D',
          rank: 19,
          isSelected: false
        },
        {
          name: '8S',
          rank: 21,
          isSelected: false
        },
        {
          name: '8D',
          rank: 23,
          isSelected: false
        }
      ];

      expect(handUtils.isConsecTriplePairs(hand)).to.be.eq(false);
    });
    it('should return true for consecutive pairs with face cards', () => {
      const hand = [
        {
          name: '9D',
          rank: 27,
          isSelected: false
        },
        {
          name: '9H',
          rank: 28,
          isSelected: false
        },
        {
          name: '10H',
          rank: 32,
          isSelected: false
        },
        {
          name: '10D',
          rank: 31,
          isSelected: false
        },
        {
          name: 'JS',
          rank: 33,
          isSelected: false
        },
        {
          name: 'JD',
          rank: 35,
          isSelected: false
        }
      ];

      expect(handUtils.isConsecTriplePairs(hand)).to.be.eq(true);
    });
  });
  describe('isValidHand()', () => {
    it('should return true for singles', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(true);
    });
    it('should return true for pairs', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '4H',
          rank: 8,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(true);
    });
    it('should return true for triples', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '4H',
          rank: 8,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(true);
    });
    it('should return true for four of a kind', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '4H',
          rank: 8,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(true);
    });
    it('should return false for a single diff numeral', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(false);
    });
    it('should return false for presence of 2', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '5H',
          rank: 8,
          isSelected: false
        },
        {
          name: '6D',
          rank: 7,
          isSelected: false
        },
        {
          name: '2H',
          rank: 52,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(false);
    });
    it('should return false for less than 3 cards', () => {
      const hand = [
        {
          name: '4C',
          rank: 6,
          isSelected: false
        },
        {
          name: '5H',
          rank: 8,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(false);
    });
    it('should return true for consecutive sequence with number and face cards', () => {
      const hand = [
        {
          name: '8H',
          rank: 24,
          isSelected: false
        },
        {
          name: '9H',
          rank: 28,
          isSelected: false
        },
        {
          name: '10H',
          rank: 32,
          isSelected: false
        },
        {
          name: 'JH',
          rank: 36,
          isSelected: false
        },
        {
          name: 'QH',
          rank: 40,
          isSelected: false
        }];

      expect(handUtils.isValidHand(hand)).to.be.eq(true);
    });
    it('should return false for less than 6 cards', () => {
      const hand = [
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        },
        {
          name: '4D',
          rank: 7,
          isSelected: false
        },
        {
          name: '4S',
          rank: 5,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(false);
    });
    it('should return false for non-pairs', () => {
      const hand = [
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '5D',
          rank: 11,
          isSelected: false
        },
        {
          name: '6S',
          rank: 13,
          isSelected: false
        },
        {
          name: '7D',
          rank: 19,
          isSelected: false
        },
        {
          name: '8S',
          rank: 21,
          isSelected: false
        },
        {
          name: '8D',
          rank: 23,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(false);
    });
    it('should return false for non-consecutive pairs', () => {
      const hand = [
        {
          name: '5S',
          rank: 9,
          isSelected: false
        },
        {
          name: '5D',
          rank: 11,
          isSelected: false
        },
        {
          name: '7S',
          rank: 17,
          isSelected: false
        },
        {
          name: '7D',
          rank: 19,
          isSelected: false
        },
        {
          name: '8S',
          rank: 21,
          isSelected: false
        },
        {
          name: '8D',
          rank: 23,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(false);
    });
    it('should return true for consecutive pairs with face cards', () => {
      const hand = [
        {
          name: '9D',
          rank: 27,
          isSelected: false
        },
        {
          name: '9H',
          rank: 28,
          isSelected: false
        },
        {
          name: '10H',
          rank: 32,
          isSelected: false
        },
        {
          name: '10D',
          rank: 31,
          isSelected: false
        },
        {
          name: 'JS',
          rank: 33,
          isSelected: false
        },
        {
          name: 'JD',
          rank: 35,
          isSelected: false
        }
      ];

      expect(handUtils.isValidHand(hand)).to.be.eq(true);
    });
  });
});