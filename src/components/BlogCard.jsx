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
    <article className='border border-[#E1B6B6] bg-[#D9D9D93a] my-4 flex flex-wrap sm:flex-nowrap '>
      <figure>
        <img
          src={image}
          alt='Raspberry Pi Home Automation'
          className='w-full h-auto sm:w-60 sm:h-45 sm:object-cover '
        />
      </figure>
      <div className='px-2.5 w-139'>
        <h4 className='font-bold hover:underline tracking-wide pt-1.5'>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h4>
        <div className='blog__meta opacity-50 text-sm'>
          <time dateTime='2018-11-03'>{date}</time>
          <span> • </span>
          <span className='blog-reading__time'>{readingTime}</span>
        </div>
        <p className='font-light text-sm'>{description}</p>
        <div className='my-2'>
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
