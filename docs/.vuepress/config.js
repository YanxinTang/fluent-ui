const path = require('path');

module.exports = {
  title: 'Fluent UI',
  description: 'Fluent UI implements by Vue 2',
  themeConfig: {
    nav: [{ text: 'Github', link: 'https://github.com/YanxinTang/fluent-ui', target: '_blank' }],
    sidebarDepth: 0,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: ['/install'],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/grid',
          '/components/button',
          '/components/checkbox',
          '/components/radio',
        ],
      },
    ],
  },
  clientRootMixin: path.resolve(__dirname, 'mixin.js'),
  chainWebpack: (config) => {
    const sourcePath = path.resolve(process.cwd(), 'src');
    const componentsPath = path.resolve(sourcePath, 'components');
    config.resolve.alias.set('@components', componentsPath);
    config.resolve.alias.set('@', sourcePath);

    config.module.rule('markdown-demo').test(/\.md$/).use('demo-loader').loader(require.resolve('./md-loader'));
  },
  extendMarkdown: (md) => {
    const defaultRender = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      // 判断该 fence 是否在 :::demo 内
      const prevToken = tokens[idx - 1];
      const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
      if (token.info === 'html' && isInDemoContainer) {
        return token.content;
      } else if (token.info === 'code') {
        tokens[idx].info = 'html';
        return `<template #code>${defaultRender(tokens, idx, options, env, self)}</template>`;
      }
      return defaultRender(tokens, idx, options, env, self);
    };

    md.use(require('markdown-it-container'), 'demo', {
      validate(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },
      render(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          const title = m && m.length > 1 ? m[1] : '';
          return title ? `<Demo title="${md.utils.escapeHtml(title)}">` : '<Demo>';
        }
        return '</Demo>';
      },
    });
  },
};
