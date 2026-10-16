// 事前準備で npm test が動くことを確かめるためのサンプル。第3回で本物のテストに置き換える
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');

test('トップページに見出しがある', () => {
  const html = fs.readFileSync('public/index.html', 'utf8');
  assert.match(html, /<h1>.+<\/h1>/);
});
