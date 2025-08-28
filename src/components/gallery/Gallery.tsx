"use client"
import React, { useState } from 'react'

// Define type
type GalleryItem = {
  type: 'image' | 'video' | 'clinic' | 'link';
  src: string;
  alt: string;
  poster?: string | undefined;
  action?: string | undefined;
};

const galleryItems: GalleryItem[] = [
  // Images
  { type: 'image', src: '/assets/images/gallery/01.webp', alt: 'Gallery Image 1' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/21.webp', alt: 'Gallery Image 21'  , poster:undefined, action:undefined},
  { type: 'image', src: '/assets/images/gallery/06.webp', alt: 'Gallery Image 6' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/07.webp', alt: 'Gallery Image 7' , poster:undefined, action:undefined },
  { type: 'clinic', src: '/assets/images/gallery/33.webp', alt: 'Gallery Image 33' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/08.webp', alt: 'Gallery Image 8' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/09.webp', alt: 'Gallery Image 9' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/10.webp', alt: 'Gallery Image 10' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/11.webp', alt: 'Gallery Image 11' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/12.webp', alt: 'Gallery Image 12' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/gl-3-s.webp', alt: 'Gallery Image 16' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/gl-2-b.webp', alt: 'Gallery Image 17' , poster:undefined, action:undefined },
  { type: 'image', src: '/assets/images/gallery/gl-1-b.webp', alt: 'Gallery Image 17' , poster:undefined, action:undefined },

  

  // Video
  { type: 'video', src: 'https://res.cloudinary.com/dazpnrnnv/video/upload/v1756297284/website_video_e7wtwf.mp4', alt: 'Video', poster:'/assets/images/gallery/video1_thumbnail.png', action:undefined },
  { type: 'video', src: '/assets/images/gallery/35.MP4', alt: 'Video',  poster:'/assets/images/gallery/video4_thumbnail.jpg', action:undefined },
  { type: 'video', src: '/assets/images/gallery/36.MP4', alt: 'Video', poster:'/assets/images/gallery/video5_thumbnail.jpg', action:undefined },
  { type: 'video', src: 'https://www.youtube.com/embed/My440XFFrA8?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video2_thumbnail.jpg', action:'link',  },
  { type: 'video', src: 'https://www.youtube.com/embed/-b2phUBJOZQ?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video3_thumbnail.jpg', action:'link' },
  { type: 'video', src: 'https://www.youtube.com/embed/SFraNgfNx80?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video4_thumbnail.jpg', action:'link' },
  { type: 'video', src: 'https://www.youtube.com/embed/GmivV4KyVC0?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video5_thumbnail.jpg', action:'link' },
  { type: 'video', src: 'https://www.youtube.com/embed/6BsZ-bUTYN4?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video1_thumbnail.png', action:'link' },
  { type: 'video', src: 'https://www.youtube.com/embed/5uzy-PXMekY?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video2_thumbnail.jpg', action:'link' },
  { type: 'video', src: 'https://www.youtube.com/embed/K2vpeVJ7A3Q?autoplay=1', alt: 'Video', poster:'/assets/images/gallery/video3_thumbnail.jpg', action:'link' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'clinic'>('photos');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  let filteredItems = galleryItems;
  if (activeTab === 'photos') {
    filteredItems = galleryItems.filter(item => item.type === 'image');
  } else if (activeTab === 'videos') {
    filteredItems = galleryItems.filter(item => item.type === 'video');
  } else if (activeTab === 'clinic') {
    filteredItems = galleryItems.filter(item => item.type === 'clinic');
  }

  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <h2 className="title pt-0 text-center">Our Gallery</h2>
        
          {/* Tabs */}
          <div className="gallery-tabs">
            <span className={`gallery-tab${activeTab === 'photos' ? ' active' : ''}`} onClick={() => setActiveTab('photos')}>Photos</span>
            <span className="gallery-dot">&bull;</span>
            <span className={`gallery-tab${activeTab === 'videos' ? ' active' : ''}`} onClick={() => setActiveTab('videos')}>Videos</span>
            <span className="gallery-dot">&bull;</span>
            <span className={`gallery-tab${activeTab === 'clinic' ? ' active' : ''}`} onClick={() => setActiveTab('clinic')}>Clinic</span>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div className="gallery-item" key={idx}>
                {item.type === 'image' || item.type === 'clinic' ? (
                  <img src={item.src} alt={item.alt} className="gallery-media" />
                ) : (
                  <video className="gallery-media" muted loop preload='none' poster={item.poster || undefined}>
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                {/* Overlay with + icon */}
                {item.action === 'link' ? (
                  <a className="overlay" href={item.src} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                    <span className="plus-icon">+</span>
                  </a>
                ) : (
                  <div className="overlay" onClick={() => setLightboxItem(item)}>
                    <span className="plus-icon">+</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="lightbox" onClick={() => setLightboxItem(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            {lightboxItem.type === 'video' ? (
              <video src={lightboxItem.src} controls autoPlay style={{maxHeight: '90vh'}} />
            ) : (
              <img src={lightboxItem.src} alt={lightboxItem.alt} />
            )}
          </div>
        </div>
      )}

    </>
  )
}