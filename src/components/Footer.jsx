/** @format */

import linkdin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import x from '../assets/icons/X.svg';

const Footer = () => {
  return (
    <footer id='footer' className='h-2.5'>
      <div className='px-25 py-1 bg-primary text-amber-50 flex justify-between items-center'>
        <p class='copyright'>© 2026 Yogesh Dhuri. All rights reserved.</p>
        <div className='flex gap-3 my-2 bg-primary items-center'>
          <a href='http://www.linkedin.com/in/dhuriyogesh0312'>
            <img
              src={linkdin}
              alt='linkedin-logo'
              target='_blank'
              className='h-5 w-5'
            />
          </a>
          <a href='https://github.com/yogesh-dhuri' target='_blank'>
            <img src={github} alt='github-logo' className='h-7 w-7' />
          </a>
          <a href='#' target='_blank'>
            <img src={x} alt='X-logo' className='h-5 w-5 bg-primary' />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
