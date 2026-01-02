/** @format */

import matter from 'gray-matter';

export function markdownParser(raw) {
  const { content, data } = matter(raw);

  function cleanMarkdown(content) {
    return content.replace(/^<!--\s*@format\s*-->\s*/m, '');
  }

  const formatedContend = cleanMarkdown(content);

  return { meta: { data, formatedContend } };
}
