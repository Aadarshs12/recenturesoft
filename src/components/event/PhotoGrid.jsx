'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const fakePhotos = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/photo${i}/800/600`,
  thumbnail: `https://picsum.photos/seed/photo${i}/400/300`,
  alt: `Photo ${i + 1}`,
}));

export default function PhotoGrid() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (index) => {
    setInitialSlide(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative h-full flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-6">
            29 July 2025 - 05 September 2025
          </h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3 auto-rows-[180px]">
            {fakePhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => openModal(index)}
                className="group relative rounded-xl overflow-hidden bg-gray-800 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={photo.thumbnail}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog  open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] w-full h-[95vh] forPhotoGrid p-0 border-none bg-black/95 [&_.DialogClose]:hidden"
        >
          <VisuallyHidden asChild>
            <DialogTitle>Photo Gallery - Image Viewer</DialogTitle>
          </VisuallyHidden>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            aria-label="Close photo viewer"
          >
            <X className="h-6 w-6" />
          </button>

          <Swiper
            modules={[Navigation, Zoom, Keyboard, Mousewheel]}
            navigation
            zoom={true}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            initialSlide={initialSlide}
            className="h-full w-full"
            loop={true}
            speed={400}
          >
            {fakePhotos.map((photo) => (
              <SwiperSlide key={photo.id} className="!flex items-center justify-center">
                <div className="swiper-zoom-container h-full w-full flex items-center justify-center p-4 sm:p-8">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={900}
                    className="max-h-[85vh] max-w-[90vw] object-contain"
                    priority={false}
                    quality={85}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </DialogContent>
      </Dialog>
    </>
  );
}