import { DocumentNumberPipe } from './document-number.pipes';

describe('DocumentNumberPipe', () => {
  const pipe = new DocumentNumberPipe();

  it('empty input should return empty', () => {
    expect(pipe.transform(null)).toBe(null);
    expect(pipe.transform('')).toBe(null);
  });

  it('should not format incomplete document number', () => {
    expect(pipe.transform('012345')).toBe('012345');
    expect(pipe.transform('0123456789')).toBe('0123456789');
    expect(pipe.transform('a0123456789')).toBe('0123456789');
  });

  it('should format document number', () => {
    expect(pipe.transform('01234567890')).toBe('012.345.678-90');
    expect(pipe.transform('a012b345c678d90')).toBe('012.345.678-90');
  });
});