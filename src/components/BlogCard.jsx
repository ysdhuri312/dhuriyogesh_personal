/** @format */

import { Link } from 'react-router';

const BlogCard = ({
  title,
  description,
  date,
  readingTime,
  image,
  slug,
  tags,
}) => {
  return (
    <article className='border border-[#E1B6B6] bg-[#D9D9D93a] my-4 flex'>
      <figure>
        <img
          src={image}
          alt='Raspberry Pi Home Automation'
          className='block w-60 h-45 object-fill'
        />
      </figure>
      <div className='p-2.5 w-139'>
        <h4 className='font-bold hover:underline tracking-wide'>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h4>
        <div className='blog__meta opacity-50'>
          <time dateTime='2018-11-03'>{date}</time>
          <span> • </span>
          <span className='blog-reading__time'>{readingTime}</span>
        </div>
        <p className='font-light'>{description}</p>
        <div className='pt-1.5'>
          {tags.map((tag) => {
            return (
              <button
                key={tag}
                className='text-xs font-medium mr-2 bg-primary px-1.5 py-1 rounded-full text-amber-50 disable'
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
