/** @format */

import matter from 'grey-matter';

export function markdownParser(raw) {
  const { content, data } = matter(raw);
  return { meta: data, content };
}
