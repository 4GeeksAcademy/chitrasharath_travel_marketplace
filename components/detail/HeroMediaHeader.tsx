import { CircleIconButton } from "@/components/shared/CircleIconButton";
import { BackIcon, HeartIcon, ShareIcon } from "@/components/shared/Icons";
import type { ListingPhoto } from "@/types/listing";
import Image from "next/image";
import Link from "next/link";

interface HeroMediaHeaderProps {
  photos: ListingPhoto[];
  currentPhotoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelectPhoto: (index: number) => void;
  backHref?: string;
}

export const HeroMediaHeader = ({ photos, currentPhotoIndex, onPrevious, onNext, onSelectPhoto, backHref = "/catalog" }: HeroMediaHeaderProps) => (
  <header className="relative">
    <Image src={photos[currentPhotoIndex].url} alt={photos[currentPhotoIndex].alt} width={1200} height={700} className="h-72 w-full rounded-[22px] object-cover md:h-96" unoptimized />
    <div className="absolute top-3 left-3 flex gap-2">
      <Link
        href={backHref}
        aria-label="Back"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--text-primary)] shadow-[var(--shadow-chip)] transition hover:-translate-y-0.5"
      >
        <BackIcon className="h-4 w-4" />
      </Link>
      <CircleIconButton label="Share"><ShareIcon className="h-4 w-4" /></CircleIconButton>
      <CircleIconButton label="Favorite"><HeartIcon className="h-4 w-4" /></CircleIconButton>
    </div>
    <div className="absolute right-3 bottom-3 flex gap-2">
      <button type="button" onClick={onPrevious} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">Prev</button>
      <button type="button" onClick={onNext} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">Next</button>
    </div>
    {/* Thumbnails Gallery */}
    <div className="mt-2 flex justify-center gap-2">
      {photos.map((photo, idx) => (
        <button
          key={photo.id}
          type="button"
          aria-label={photo.caption || photo.alt}
          className={`border-2 ${idx === currentPhotoIndex ? "border-[var(--accent-primary)]" : "border-transparent"} rounded-lg overflow-hidden focus:outline-none`}
          style={{ width: 64, height: 48 }}
          onClick={() => onSelectPhoto(idx)}
        >
          <Image src={photo.url} alt={photo.alt} width={64} height={48} className="object-cover w-full h-full" unoptimized />
        </button>
      ))}
    </div>
  </header>
);
