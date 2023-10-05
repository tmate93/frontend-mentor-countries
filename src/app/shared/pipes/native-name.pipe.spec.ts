import { NativeNamePipe } from './native-name.pipe';

describe('NativeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new NativeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
