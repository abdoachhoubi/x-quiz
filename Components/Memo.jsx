import React, { useState, useEffect } from "react";
import pic1 from "@/public/assets/image 1.png";
import pic2 from "@/public/assets/image 2.png";
import pic3 from "@/public/assets/image 3.png";
import pic4 from "@/public/assets/image 4.png";
import pic5 from "@/public/assets/image 5.png";
import pic6 from "@/public/assets/image 6.png";
import pic7 from "@/public/assets/image 7.png";
import pic8 from "@/public/assets/image 8.png";

const { src: image1 } = pic1;
const { src: image2 } = pic2;
const { src: image3 } = pic3;
const { src: image4 } = pic4;
const { src: image5 } = pic5;
const { src: image6 } = pic6;
const { src: image7 } = pic7;
const { src: image8 } = pic8;

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const MemoryGame = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [matchedImages, setMatchedImages] = useState([]);
  const [flippedImages, setFlippedImages] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (matchedImages.length === 8) {
      setGameOver(true);
      alert(`You won in ${moves} moves!`);
    }
  }, [matchedImages]);

  const handleImageClick = (image) => {
    if (
      selectedImages.length < 2 &&
      !matchedImages.includes(image) &&
      !flippedImages.includes(image)
    ) {
      setSelectedImages([...selectedImages, image]);
      setFlippedImages([...flippedImages, image]);
    }
  };

  useEffect(() => {
    if (selectedImages.length === 2) {
      setMoves(moves + 1);
      if (selectedImages[0] === selectedImages[1]) {
        setMatchedImages([...matchedImages, selectedImages[0]]);
        setSelectedImages([]);
        setFlippedImages([...flippedImages, selectedImages[0]]);
      } else {
        setTimeout(() => {
          setSelectedImages([]);
          setFlippedImages(
            flippedImages.filter(
              (image) =>
                image !== selectedImages[0] && image !== selectedImages[1]
            )
          );
        }, 1000);
      }
    }
  }, [selectedImages]);

  return (
    <>
      <h1>Memory Game</h1>
      <p>Moves: {moves}</p>
      <div className="memory-game-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`memory-game-image-container ${
              flippedImages.includes(image) ? "flipped" : ""
            }`}
            onClick={() => handleImageClick(image)}
          >
            <div className="memory-game-image-front"></div>
            <img
              src={image}
              alt={`Image ${index}`}
              className="memory-game-image-back"
            />
          </div>
        ))}
      </div>
      {gameOver && <p>Congratulations, you won!</p>}
    </>
  );
};

export default MemoryGame;
