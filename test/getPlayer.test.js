const getplayer = require('../app/getPlayer.cjs');

test('returns player information when given playerid', () => {
  expect(getplayer(1).Name).toBe('Richard');
});

test('returns player information when given playerid', () => {
  expect(getplayer(2).Name).toBe('Ben');
});

test('returns player information when given playerid', () => {
  expect(getplayer('1').Name).toBe('Richard');
});
