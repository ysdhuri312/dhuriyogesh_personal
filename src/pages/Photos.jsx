/** @format */

import UnderConstruction from '../assets/icons/under-construction.gif';
import { useMetadata } from '../utils/hooks/useMetadata';

const Photos = () => {
  useMetadata({
    title: 'Photos | Collection of personal photographs',
    description:
      'Collection of personal photographs, from everyday moments to artistic shots. Discover unique perspectives & memories. Browse Photos',
  });
  return (
    <section
      style={{
        color: '#444',
        margin: 0,
        font: 'normal 14px/20px Arial, Helvetica, sans-serif',
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ height: '100vh', minHeight: '100%' }}>
        <div
          style={{
            textAlign: 'center',
            width: '800px',
            marginLeft: '-400px',
            position: 'absolute',
            top: '30%',
            left: '50%',
          }}
        >
          <img
            src={UnderConstruction}
            style={{
              display: 'inline',
              textAlign: 'center',
              height: '150px',
              width: '150px',
            }}
          />

          <h2 style={{ fontSize: '30px' }}>Coming Soon</h2>
          <p style={{ marginTop: '10px' }}>
            Our website is under construction!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Photos;
