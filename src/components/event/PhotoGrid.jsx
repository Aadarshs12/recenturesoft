import Image from "next/image";

const fakePhotos = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/photo${i}/400/300`,
  alt: `Photo ${i + 1}`,
}));

export default function PhotoGrid() {
  return (
    <div className="relative flex-1 overflow-auto">
      {/* Floating search overlay */}

      {/* Content */}
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-6">
          29 July 2025 - 05 September 2025
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3 auto-rows-[180px]">
          {fakePhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-xl overflow-hidden bg-gray-800 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.03]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}