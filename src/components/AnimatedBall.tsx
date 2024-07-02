import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface AnimatedImageProps {
    src: string
}

const AnimatedImage: React.FC <AnimatedImageProps> = ({src}) => {
    const imageRef = useRef(null);

    useEffect(() => {
        anime({
          targets: imageRef.current,
          translateY: [
            { value: -50, duration: 2000 },
            { value: 50, duration: 2000 }
          ],
          loop: true,
          easing: 'easeInOutSine'
        });
      }, []);

    return (
        <div className='flex justify-end'>
            <img ref={imageRef} className='w-96' src={src} alt="" />
        </div>
    );
};

export default AnimatedImage;
