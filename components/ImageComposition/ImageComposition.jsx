import React from 'react'
import Image from 'next/image';
import styles from './ImageComposition.module.css';

const ImageComposition = () => {
  return (
    <section className="mt-auto">
      <div className={`${styles.composition} relative`}>
              <Image
                src="/images/composition-3.jpg"
                alt="Photo 1"
                height={1000}
                width={1000}
                className={`${styles.composition__photo} md:absolute md:w-[55%] w-[95%] mb-10 md:m-auto  ${styles.composition__photoP1}`}
              /><Image
              src="/images/composition-2.webp"
                alt="Photo 2"
                height={1000}
                width={1000}
                className={`${styles.composition__photo} md:absolute md:w-[55%] w-[95%] mb-10 md:m-auto  hidden md:inline ${styles.composition__photoP2}`}
              /><Image
              src="/images/composition-1.jpeg"
                alt="Photo 3"
                height={1000}
                width={1000}
                className={`${styles.composition__photo} md:absolute md:w-[55%] w-[95%] mb-10 md:m-auto  ${styles.composition__photoP3}`}
              />
            </div>
    </section>
  )
}

export default ImageComposition ;
