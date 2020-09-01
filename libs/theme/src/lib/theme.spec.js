import { theme } from './theme';
describe('Theme', () => {
  describe('fontFamily', () => {
    it('Should be overriden', () => {
      expect(theme.fontFamily).toBeTruthy();
    });

    it('Sans is an array ', () => {
      expect(typeof theme.fontFamily.sans).toBe(typeof []);
    });

    it('`sans` should contain `Fredoka One`', () => {
      expect(theme.fontFamily.sans[0]).toBe('Fredoka One');
    });
  });
});
