import { RelativeDatePipe } from './relative-date.pipe';

describe('RelativeDatePipe', () => {
  const date: Date = new Date()
  const customeDate: RelativeDatePipe = new RelativeDatePipe()
  const expectDate = 'Kamis, 08 Juli 2021'

  it('create an instance', () => {
    const pipe = new RelativeDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Transform date with CustomeDate', () => {
    expect(customeDate.transform(date)).toBe(expectDate);
  });

  it('Transform date ', () => {
    const result = 'Kamis, 08 Juli 2021'
    const exp = customeDate.transform('Thu Jul 08 2021 09:00:24 GMT+0700',
    'dddd, DD MMMM YYYY',
    'dddd, DD MMMM YYYY')
    expect(exp).toEqual(result);
  });
});
