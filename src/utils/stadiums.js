const stadiumImages = [
  "Image of stadium/stadium1.jpg",
  "Image of stadium/stadium2.jpg",
  "Image of stadium/stadium3.jpg",
  "Image of stadium/stadium4.jpg"
];

export function getRandomStadiumImage() {
  const randomIndex = Math.floor(Math.random() * stadiumImages.length);
  return stadiumImages[randomIndex];
}