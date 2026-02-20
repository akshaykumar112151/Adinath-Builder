import React, { useState } from 'react';
import './ImageGallery.css';
// shourya img
import Shoryaimg3 from "./img/Shoryaimg3.jpg";
import Shoryaimg4 from "./img/Shoryaimg4.jpg";
import Shoryaimg5 from "./img/Shoryaimg5.jpg";
import Shoryaimg6 from "./img/Shoryaimg6.jpg";
import Shoryaimg7 from "./img/Shoryaimg7.jpg";
import Shoryaimg8 from "./img/Shoryaimg8.jpg";
import Shoryaimg9 from "./img/Shoryaimg9.jpg";
import Shoryaimg10 from "./img/Shoryaimg10.jpg";
import Shoryaimg11 from "./img/Shoryaimg11.jpg";
import Shoryaimg12 from "./img/Shoryaimg12.jpg";
import Shoryaimg13 from "./img/Shoryaimg13.jpg";
// Vedpuram img
import Veddpuram1 from "./img/Veddpuram1.jpg";
import Veddpuram2 from "./img/Veddpuram2.jpg";
import Veddpuram3 from "./img/Veddpuram3.jpg";
import Veddpuram4 from "./img/Veddpuram4.jpg";
import Veddpuram5 from "./img/Veddpuram5.jpg";
import Veddpuram6 from "./img/Veddpuram6.jpg";
import Veddpuram7 from "./img/Veddpuram7.jpg";
import Veddpuram8 from "./img/Veddpuram8.jpg";
import Veddpuram9 from "./img/Veddpuram9.jpg";
import Veddpuram10 from "./img/Veddpuram10.jpg";
import Veddpuram11 from "./img/Veddpuram11.jpg";
import Veddpuram12 from "./img/Veddpuram12.jpg";
import Veddpuram13 from "./img/Veddpuram13.jpg";
import Veddpuram14 from "./img/Veddpuram14.jpg";
import Veddpuram15 from "./img/Veddpuram15.jpg";
import Veddpuram16 from "./img/Veddpuram16.jpg";

// vaishali img
import Vaishhali1 from "./img/Vaishhali1.jpg";
import Vaishhali2 from "./img/Vaishhali2.jpg";
import Vaishhali3 from "./img/Vaishhali3.jpg";
import Vaishhali4 from "./img/Vaishhali4.jpg";
import Vaishhali5 from "./img/Vaishhali5.jpg";
import Vaishhali6 from "./img/Vaishhali6.jpg";
import Vaishhali7 from "./img/Vaishhali7.jpg";
import Vaishhali8 from "./img/Vaishhali8.jpg";




const folders = [
  {
    id: 1,
    name: "Adinath's Shorya City ",
    images: [
      { id: 1, src: Shoryaimg3, alt: 'Image 1 description' },
      { id: 2, src: Shoryaimg4, alt: 'Image 2 description' },
      { id: 3, src: Shoryaimg5, alt: 'Image 3 description' },
      { id: 4, src: Shoryaimg6, alt: 'Image 4 description' },
      { id: 5, src: Shoryaimg7, alt: 'Image 1 description' },
      { id: 6, src: Shoryaimg8, alt: 'Image 2 description' },
      { id: 7, src: Shoryaimg9, alt: 'Image 3 description' },
      { id: 8, src: Shoryaimg10, alt: 'Image 4 description' },
      { id: 9, src: Shoryaimg11, alt: 'Image 1 description' },
      { id: 10, src: Shoryaimg12, alt: 'Image 2 description' },
      { id: 11, src: Shoryaimg13, alt: 'Image 3 description' },
     
    ],
  },
  {
    id: 2,
    name: "Adinath's Vedpuram",
    images: [
      { id: 12, src: Veddpuram1, alt: 'Image 12 description' },
{ id: 13, src: Veddpuram2, alt: 'Image 13 description' },
{ id: 14, src: Veddpuram3, alt: 'Image 14 description' },
{ id: 15, src: Veddpuram4, alt: 'Image 15 description' },
{ id: 16, src: Veddpuram5, alt: 'Image 16 description' },
{ id: 17, src: Veddpuram6, alt: 'Image 17 description' },
{ id: 18, src: Veddpuram7, alt: 'Image 18 description' },
{ id: 19, src: Veddpuram8, alt: 'Image 19 description' },
{ id: 20, src: Veddpuram9, alt: 'Image 20 description' },
{ id: 21, src: Veddpuram10, alt: 'Image 21 description' },
{ id: 22, src: Veddpuram11, alt: 'Image 22 description' },
{ id: 23, src: Veddpuram12, alt: 'Image 23 description' },
{ id: 24, src: Veddpuram13, alt: 'Image 24 description' },
{ id: 25, src: Veddpuram14, alt: 'Image 25 description' },
{ id: 26, src: Veddpuram15, alt: 'Image 26 description' },
{ id: 27, src: Veddpuram16, alt: 'Image 27 description' },

    ],
  },
  {
    id: 3,
    name: "Adinath's Vaishali City",
    images: [
      { id: 28, src: Vaishhali1, alt: 'Image 28 description' },
{ id: 29, src: Vaishhali2, alt: 'Image 29 description' },
{ id: 30, src: Vaishhali3, alt: 'Image 30 description' },
{ id: 31, src: Vaishhali4, alt: 'Image 31 description' },
{ id: 32, src: Vaishhali5, alt: 'Image 32 description' },
{ id: 33, src: Vaishhali6, alt: 'Image 33 description' },
{ id: 34, src: Vaishhali7, alt: 'Image 34 description' },
{ id: 35, src: Vaishhali8, alt: 'Image 35 description' },

    ],
  },
];

const ImageGallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openFolder = (folderIndex) => {
    setSelectedFolder(folderIndex);
    setSelectedImageIndex(null); // Close image viewer if folder is opened
  };

  const openImageViewer = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % folders[selectedFolder].images.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + folders[selectedFolder].images.length) % folders[selectedFolder].images.length
    );
  };

  return (
    <div className="gallery-container">
      <div className="folders">
        {folders.map((folder, index) => (
          <div key={folder.id} className="folder" onClick={() => openFolder(index)}>📂
            <p className="folder-name">{folder.name}</p>
          </div>
        ))}
      </div>

      {selectedFolder !== null && (
        <div className="folder-content">
          <h2>{folders[selectedFolder].name}</h2>
          <div className="gallery-grid">
            {folders[selectedFolder].images.map((image, index) => (
              <div key={image.id} className="gallery-item" onClick={() => openImageViewer(index)}>
                <img src={image.src} alt={image.alt} className="gallery-thumbnail" />
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="image-viewer">
          <span className="close" onClick={closeImageViewer}>&times;</span>
          <button className="prev-btn" onClick={showPreviousImage}>&lt;</button>
          <img className="viewer-image" src={folders[selectedFolder].images[selectedImageIndex].src} alt={folders[selectedFolder].images[selectedImageIndex].alt} />
          <button className="next-btn" onClick={showNextImage}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
