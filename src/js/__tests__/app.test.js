import telephon from '../app';

test('tel test', () => {
  const tel = telephon('8 ( 906 ) 254 36 10');
  expect(tel).toBe('+79062543610');
});
test('tel test 2', () => {
  const tel = telephon('+7(9 0 6 ) 254 36 10');
  expect(tel).toBe('+79062543610');
});
