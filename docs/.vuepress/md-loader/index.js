const { genInlineComponentText } = require('./util');

module.exports = (source) => {
  const demoBlockReg = /:::\s*demo([\s\S]*?):::/gm;
  let id = 0;
  const components = [];

  const output = source.replace(demoBlockReg, function (match, p1) {
    const templateReg = /<template>([\s\S]*)<\/template>/gm;
    const scriptReg = /<script>([\s\S]*)<\/script>/gm;
    const templateMatch = templateReg.exec(p1);
    const template = templateMatch ? templateMatch[1] : '';
    const scriptMatch = scriptReg.exec(p1);
    const script = scriptMatch ? scriptMatch[1] : '';

    let sourceCode = '';
    sourceCode += templateMatch ? `${templateMatch[0].trim()}\n` : '';
    sourceCode += scriptMatch ? `${scriptMatch[0].trim()}\n` : '';

    let demoTemplate = '';
    if (scriptMatch) {
      const demoComponentName = `demo-block-${id++}`;
      const demoComponentContent = genInlineComponentText(template, script);
      components.push([demoComponentName, demoComponentContent]);
      demoTemplate = `<${demoComponentName} />`;
    }

    return match.replace(/```html([\s\S]*?)```/gm, (htmlFence, html) => {
      let content = '```html\n' + `<template>${demoTemplate ? demoTemplate : html}</template>\n` + '```\n';
      content += '```code\n' + `${templateMatch ? sourceCode.trim() : html.trim()}\n` + '```\n';
      return content;
    });
  });

  componenetsString = components
    .map((component) => {
      return `'${component[0]}': ${component[1]}`;
    })
    .join(',');

  let pageScript = '';
  if (components.length) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  }
  return output + '\n' + pageScript;
};
