import React from 'react';
import { REVIEWS } from '../constants/reviews';
import type { Review } from '../types';
import { StarIcon } from '../constants/icons';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className="w-5 h-5 text-yellow-400"
        filled={index < rating}
      />
    ))}
  </div>
);

interface ReviewCardProps {
    review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => (
    <div className="border-b border-gray-200 py-6">
        <div className="flex items-center justify-between">
            <div>
                <p className="font-semibold text-gray-800">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <StarRating rating={review.rating} />
        </div>
        <p className="mt-4 text-gray-600">{review.text}</p>
    </div>
)


interface ReviewsProps {
  shoeId: number;
}

export default function Reviews({ shoeId }: ReviewsProps): React.ReactNode {
  const productReviews = REVIEWS.filter(review => review.shoeId === shoeId);

  if (productReviews.length === 0) {
    return (
      <div className="text-center py-8">
          <h2 className="text-3xl font-bold tracking-tighter">No Reviews Yet</h2>
          <p className="text-gray-500 mt-2">Be the first to share your thoughts on this product.</p>
      </div>
    );
  }

  const averageRating = productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length;

  return (
    <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Customer Reviews</h2>
            <div className="flex items-center gap-3">
                <StarRating rating={Math.round(averageRating)} />
                <p className="text-gray-600">
                    <span className="font-bold">{averageRating.toFixed(1)}</span>
                    <span className="text-sm"> ({productReviews.length} reviews)</span>
                </p>
            </div>
        </div>
        <div className="mt-8">
            {productReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    </div>
  );
}