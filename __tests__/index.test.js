const { statement } = require('../src/index');

const invoices = require('../__mocks__/utils/invoices.json');
const plays = require('../__mocks__/utils/plays.json');

describe('Statement function tests', () => {
  const BigCoI = invoices.find(({ customer }) => customer === 'BigCo I');
  test('should be able to pass in BigCo I test', () => {
    expect(statement(BigCoI, plays)).toBe(
      'Statement for BigCo I\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n'
    );
  });

  const BigCoII = invoices.find(({ customer }) => customer === 'BigCo II');
  test('should be able to pass in BigCo II test', () => {
    expect(statement(BigCoII, plays)).toBe(
      'Statement for BigCo II\n  Hamlet: $400.00 (10 seats)\n  As You Like It: $940.00 (80 seats)\n  Othello: $760.00 (66 seats)\nAmount owed is $2,100.00\nYou earned 102 credits\n'
    );
  });

  const BigCoIII = invoices.find(({ customer }) => customer === 'BigCo III');
  test('should be able to pass in BigCo III test', () => {
    expect(statement(BigCoIII, plays)).toBe(
      'Statement for BigCo III\n  Hamlet: $11,660.00 (1156 seats)\n  As You Like It: $7,220.00 (865 seats)\n  Othello: $5,560.00 (546 seats)\nAmount owed is $24,440.00\nYou earned 2650 credits\n'
    );
  });

  const BigCoIV = invoices.find(({ customer }) => customer === 'BigCo IV');
  test('should be able to pass in BigCo IV test', () => {
    expect(statement(BigCoIV, plays)).toBe(
      'Statement for BigCo IV\n  Hamlet: $6,640.00 (654 seats)\n  As You Like It: $5,636.00 (667 seats)\n  Othello: $620.00 (52 seats)\nAmount owed is $12,896.00\nYou earned 1416 credits\n'
    );
  });

  const BigCoV = invoices.find(({ customer }) => customer === 'BigCo V');
  test('should be able to pass in BigCo V test', () => {
    expect(statement(BigCoV, plays)).toBe(
      'Statement for BigCo V\n  Hamlet: $430.00 (33 seats)\n  As You Like It: $636.00 (42 seats)\n  Othello: $870.00 (77 seats)\nAmount owed is $1,936.00\nYou earned 70 credits\n'
    );
  });
});
