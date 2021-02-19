import { expect, fixture, html } from '@open-wc/testing';
import register from '../build/dist/index.js';

register();

describe('components', () => {
  describe('base', () => {
    describe('ds-button', async () => {
      const el = (
        await fixture(html` <ds-button primary>Web test</ds-button> `)
      ).shadowRoot.querySelector('button');

      it('should be accessible', async () => {
        await expect(el).to.be.accessible();
      });

      it('should have primary class', async () => {
        await expect(el).to.have.class('primary');
      });
    });
  });
});
