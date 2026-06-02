'use client';

import { useState, useEffect } from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'shelby j',
    initials: 'SJ',
    avatarColor: '#4285F4',
    rating: 5,
    text: "Mimi was lovely! Service was quick and painless (I have been to multiple salons that have cut me lol). I got a new set of short bio gel nails. Staff offered refreshments multiple times, which was so thoughtful. Modest prices, exceptional service, and real comfy chairs (it’s really cute inside too!). Definitely returning to this gem:)",
  },
  {
    id: 2,
    name: 'Ash C',
    initials: 'AC',
    avatarColor: '#EA4335',
    rating: 5,
    text: "Quinn gave me the most gorgeous set of bio gel nails I've ever had! Quinn worked quickly and efficiently, yet was very careful and precise with her applications. She was also so kind and patient with me, and made sure I left happy.",
  },
  {
    id: 3,
    name: 'Darlene Morton',
    initials: 'DM',
    avatarColor: '#34A853',
    rating: 5,
    text: "The BEST nail salon, ever! I was immediately welcomed, questions answered — as it has been a few years, since my last salon visit. The owner (Tommy) introduced himself, and ensured I was comfortable. The nail stylist was very sweet, making great suggestions based upon what I was looking for. I did not, at any time, feel rushed but welcomed. The stylist (Mimi) took her time and went above and beyond. I cannot be happier or more impressed with the service, the set up and cleanliness of this salon.",
  },
];

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  return (
    <div
      className={`flex ${size === 'lg' ? 'text-2xl' : 'text-lg'}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: star <= rating ? '#FBBC04' : '#D1D5DB' }}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewModal({
  review,
  onClose,
}: {
  review: (typeof REVIEWS)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 select-none"
            style={{ backgroundColor: review.avatarColor }}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-medium text-gray-900 text-base">{review.name}</p>
            <StarRating rating={review.rating} size="sm" />
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
      </div>
    </div>
  );
}

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [modalReview, setModalReview] = useState<(typeof REVIEWS)[0] | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = REVIEWS.length - visibleCount;

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, Math.max(0, maxIndex)));
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const cardWidthPct = 100 / visibleCount;

  return (
    <>
      <div className="relative px-10">
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 text-2xl hover:bg-gray-50 transition disabled:opacity-30 disabled:cursor-default leading-none"
          aria-label="Previous reviews"
        >
          ‹
        </button>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidthPct}%)` }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                style={{ width: `${cardWidthPct}%`, flexShrink: 0 }}
                className="px-2 py-1"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 select-none"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.initials}
                    </div>
                    <p className="font-medium text-gray-900 text-sm truncate">{review.name}</p>
                  </div>

                  <StarRating rating={review.rating} />

                  <p
                    className="text-gray-600 text-sm mt-2 leading-relaxed flex-1"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {review.text}
                  </p>

                  <button
                    onClick={() => setModalReview(review)}
                    className="text-[#1A73E8] text-sm font-medium mt-3 text-left hover:underline self-start"
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 text-2xl hover:bg-gray-50 transition disabled:opacity-30 disabled:cursor-default leading-none"
          aria-label="Next reviews"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ backgroundColor: i === currentIndex ? '#1A73E8' : '#D1D5DB' }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {modalReview && (
        <ReviewModal review={modalReview} onClose={() => setModalReview(null)} />
      )}
    </>
  );
}
