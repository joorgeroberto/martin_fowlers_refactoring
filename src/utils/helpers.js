const POSITIONS = {
  1: 'st',
  2: 'nd',
  3: 'rd'
};

const covertToOrdinalNumber = num => {
  return num % 10 in POSITIONS ? `${num}${POSITIONS[num % 10]}` : `${num}th`;
};

module.exports = { covertToOrdinalNumber };
