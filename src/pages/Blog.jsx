/** @format */

import ProjectCard from '../components/ProjectCard';

const Blog = () => {
  return (
    <section id='blogs' className='container py-6 flex gap-5'>
      <div className='flex-3/4'>
        <h1 className='font-black text-3xl'>Blogs</h1>
        <nav class='breadcrumb' className='my-3.5'>
          <a href='' className='underline'>
            Home
          </a>{' '}
          <span>/</span>{' '}
          <a href='' className='underline'>
            Tags
          </a>
        </nav>

        <ProjectCard />
        <ProjectCard />

        {/* <article class='blog'>
          <figure>
            <img
              src='../assets/placeholder_blog-card.png'
              alt='Raspberry Pi Home Automation'
            />
          </figure>
          <div class='blog__content'>
            <h4 class='blog__title'>
              <a href='/pages/blog.html'>
                Raspberry Pi Home Automation with Google Assistant
                integration — Part 3 (Assistant integration)
              </a>
            </h4>
            <div class='blog__meta'>
              <time datetime='2018-11-03'>Nov 3, 2018</time>
              <span>•</span>
              <span class='blog-reading__time'>6 min read</span>
            </div>
            <p class='blog__description'>
              So up till now you have been able to control the switches with the
              React based frontend. Time to take things up a little notch. We’ll
              be integrating Google Assistant...
            </p>
          </div>
        </article>

        <article class='blog'>
          <figure>
            <img
              src='../assets/placeholder_blog-card.png'
              alt='Raspberry Pi Home Automation'
            />
          </figure>
          <div class='blog__content'>
            <h4 clss='blog__title'>
              <a href='/pages/blog.html'>
                Raspberry Pi Home Automation with Google Assistant
                integration — Part 3 (Assistant integration)
              </a>
            </h4>
            <div class='blog__meta'>
              <time datetime='2018-11-03'>Nov 3, 2018</time>
              <span>•</span>
              <span class='blog-reading__time'>6 min read</span>
            </div>
            <p class='blog__description'>
              So up till now you have been able to control the switches with the
              React based frontend. Time to take things up a little notch. We’ll
              be integrating Google Assistant...
            </p>
          </div>
        </article>

        <article class='blog'>
          <figure>
            <img
              src='../assets/placeholder_blog-card.png'
              alt='Raspberry Pi Home Automation'
            />
          </figure>
          <div class='blog__content'>
            <h4 clss='blog__title'>
              <a href='/pages/blog.html'>
                Raspberry Pi Home Automation with Google Assistant
                integration — Part 3 (Assistant integration)
              </a>
            </h4>
            <div class='blog__meta'>
              <time datetime='2018-11-03'>Nov 3, 2018</time>
              <span>•</span>
              <span class='blog-reading__time'>6 min read</span>
            </div>
            <p class='blog__description'>
              So up till now you have been able to control the switches with the
              React based frontend. Time to take things up a little notch. We’ll
              be integrating Google Assistant...
            </p>
          </div>
        </article> */}

        <nav>
          <ul className='flex justify-between'>
            <li className='hover:underline'>
              <a href='' rel='prev' aria-label='Previous page'>
                ← Previous
              </a>
            </li>
            <li class='pagination__item pagination_item--status'>
              <span aria-current='page'>1 of 6</span>
            </li>
            <li className='hover:underline'>
              <a href='' rel='next' aria-label='Next page'>
                Next →
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <aside className='flex-1/4 mt-21 text-[15px]'>
        {/* Table of Contents */}
        <section>
          <h3 className='font-bold'>On this page</h3>
          <ul>
            <li>
              <a href='#prerequisites'>Prerequisites</a>
            </li>
            <li>
              <a href='#assistant-setup'>Google Assistant Setup</a>
            </li>
          </ul>
        </section>
        {/* Related Posts  */}
        <section class='blogs-aside__related'>
          <h3 className='font-bold mt-2'>Related Posts</h3>
          <ul>
            <li>
              <a href='#'>Raspberry Pi Home Automation — Part 1</a>
            </li>
            <li>
              <a href='#'>Raspberry Pi Home Automation — Part 2</a>
            </li>
          </ul>
        </section>
      </aside>
    </section>
  );
};
export default Blog;
