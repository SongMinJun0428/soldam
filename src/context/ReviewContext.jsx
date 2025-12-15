import React, { createContext, useContext, useState, useEffect } from 'react';

const ReviewContext = createContext();

export const useReview = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    // Load reviews from localStorage
    useEffect(() => {
        const savedReviews = localStorage.getItem('soldam_reviews');
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        }
    }, []);

    // Save reviews to localStorage
    useEffect(() => {
        localStorage.setItem('soldam_reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (reviewData) => {
        const newReview = {
            id: `REV-${Date.now()}`,
            date: new Date().toISOString(),
            ...reviewData
        };
        setReviews([newReview, ...reviews]);
    };

    const getReviewsByProductId = (productId) => {
        return reviews.filter(review => review.productId === productId);
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview, getReviewsByProductId }}>
            {children}
        </ReviewContext.Provider>
    );
};
