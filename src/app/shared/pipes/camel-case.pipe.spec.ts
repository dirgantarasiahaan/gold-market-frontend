import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  const pipe = new CamelCasePipe();
  const expectText = 'Our Products'
  const expectText1 = 'Platinum Investment'
  const expectText2 = 'Gold Investment'
  const expectText3 = 'Silver Investment'

  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('Transform camel case pipe "Our Products"', () => {
    expect(pipe.transform('our products')).toBe(expectText);
  });

  it('Transform camel case pipe "Platinum Investment"', () => {
    expect(pipe.transform('platinum investment')).toBe(expectText1);
  });

  it('Transform camel case pipe "Gold Investment"', () => {
    expect(pipe.transform('gold investment')).toBe(expectText2);
  });

  it('Transform camel case pipe "Silver Investment"', () => {
    expect(pipe.transform('silver investment')).toBe(expectText3);
  });
});
