import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const halfStar = index + 0.5;
        const isHalfStar = halfStar === rating;
        const isFullStar = index < rating;
        if (isFullStar || isHalfStar) {
            return <FaStar key={index} className='star' />;
        }

        return <FaRegStar key={index} className='star' />;
    });
    return <div className='stars'>{stars}</div>;
};
