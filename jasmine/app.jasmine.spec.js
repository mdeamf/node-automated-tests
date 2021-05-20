const app = require('./app.jasmine');

describe('[ARRAY] Checking Contents', () => {
  it('contains Banjo-Kazooie', () => {
    expect(app.getBanjoGames()).toContain('Banjo-Kazooie');
  });
});
