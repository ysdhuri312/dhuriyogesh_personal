/** @format */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';

const MarkdownRender = ({ children }) => {
  return (
    <div className='prose mt-5 max-w-3xl mx-auto px-4'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, remarkMath]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
export default MarkdownRender;
