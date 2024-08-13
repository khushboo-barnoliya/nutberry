import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ Title }) => {
  const whiteWholesList = [
    "White Wholes - 180",
    "White Wholes - 210",
    "White Wholes - 240",
    "White Wholes - 300",
    "White Wholes - 450",
    "White Wholes - 500",
  ];
  const scrochedWholesList = [
    "Scroched Wholes - 180",
    "Scroched Wholes - 210",
    "Scroched Wholes - 240",
    "Scroched Wholes - 300",
    "Scroched Wholes - 450",
    "Scroched Wholes - 500",
  ];
  const desertWholesList = ["Scroched Wholes seconds", "Desert Wholes"];

  const whitePiecesList = [
    "Butts",
    "Splits",
    "Large White Pieces",
    "Small White Pieces",
    "Baby Bits",
  ];
  const scrochedPiecesList = [
    "Scroched Butts",
    "Scroched Splits",
    "Large Scroched Pieces",
    "Small Scroched Pieces",
  ];
  const desertPiecesList = ["Scroched Pieces seconds", "Desert Pieces"];

  return (
    <main>
      <div className={`${styles.card} w-[90%] md:w-full mx-auto`}>
        <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
          <div className={`${styles.cardPicture} ${styles.cardPicture1}`}>
            &nbsp;
          </div>

          <h4 className={`${styles.cardHeading}`}>
            <span
              className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan1}`}
            >
              {Title}
            </span>
          </h4>

          <div className={`${styles.cardDetails}`}>
            {Title === "White Wholes" ? (
              <div className="flex flex-wrap justify-center items-center">
                <Image
                  src="/images/Wholes/WW-400.png"
                  alt=""
                  className="rounded-lg"
                  height={300}
                  width={150}
                />
              </div>
            ) : Title === "Scroched Wholes" ? (
               <div className="flex flex-wrap justify-center items-center">
                <Image
                  src="/images/Wholes/SW.png"
                  alt=""
                  className="rounded-lg"
                  height={300}
                  width={150}
                />
              </div>
            ) : Title === "Desert Wholes" ? (
               <div className="flex flex-wrap justify-center items-center">
                <Image
                  src="/images/Wholes/DW.png"
                  alt=""
                  className="rounded-lg"
                  height={300}
                  width={150}
                />
              </div>
            ) : Title === "White Pieces" ? (
              <div className="flex flex-wrap justify-center items-center">
               <Image
                 src="/images/Pieces/BB.png"
                 alt=""
                 className="rounded-lg"
                 height={300}
                 width={150}
               />
             </div>
           ) : Title === "Scroched Pieces" ? (
            <div className="flex flex-wrap justify-center items-center">
             <Image
               src="/images/Pieces/SP.png"
               alt=""
               className="rounded-lg"
               height={300}
               width={150}
             />
           </div>
         ) : Title === "Desert Pieces" ? (
          <div className="flex flex-wrap justify-center items-center">
           <Image
             src="/images/Pieces/DP.png"
             alt=""
             className="rounded-lg"
             height={300}
             width={150}
           />
         </div>
       ): null}
          </div>
        </div>
        <div
          className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack1}`}
        >
          <div className={`${styles.cardPicture} ${styles.cardPicture1}`}>
            &nbsp;
          </div>

          <h4 className={`${styles.cardHeading}`}>
            <span
              className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan1}`}
            >
              {Title}
            </span>
          </h4>

          <div className={`${styles.cardDetails}`}>
            {Title === "White Wholes" ? (
              <ul>
                {whiteWholesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : Title === "Scroched Wholes" ? (
              <ul>
                {scrochedWholesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : Title === "Desert Wholes" ? (
              <ul>
                {desertWholesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : Title === "White Pieces" ? (
              <ul>
                {whitePiecesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : Title === "Scroched Pieces" ? (
              <ul>
                {scrochedPiecesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : Title === "Desert Pieces" ? (
              <ul>
                {desertPiecesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
