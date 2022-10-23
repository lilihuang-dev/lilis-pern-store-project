const db = require("../db/dbConfig.js");

// create Order table
// before the user get access to write the reviews, user needs to sign up and login, and checkout.

const getAllReviews = async (clock_id) => {
    try {
        const allReviews = await db.any(
            "SELECT * FROM reviews WHERE cid=$!", clock_id
        )
        return allReviews;
    } catch (error) {
        return error;
    }
}

const getReview = async (review_id) => {
    try {
        const review = await db.one(
            "SELECT * FROM reviews WHERE rid=$1", review_id
        )
        return review;
    } catch (error) {
        return error;
    }
}

const newReview = async (review) => {
    try {
        const newReview = await db.one(
            "INSERT INTO reviews (review, review_date, rating, clock_id) VALUES($1, $2, $3, $4) RETURNING *",
            [review.review,
            review_date, 
            review.rating,
            review.clock_id]
        )
        return newReview;
    } catch (error) {
        return error;
    }
};

const deleteReview = async (review_id) => {
    try {
        const deletedReview = await db.one(
            "DELETE FROM reviews WHERE rid=$1 RETURNING *",
            review_id
        )
        return deletedReview;
    } catch (error) {
        return error;
    }
}

// // disable the feature for now
// const updateReview = async (review_id, review) => {
//     try {
//         const updatedReview = await db.one(
//             "UPDATE reviews SET review=$1, review_date=$2, rating=$3, clock_id=$4 where rid=$5 RETURNING *",
//             [review.review,
//             review.review_date, 
//             review.rating,
//             review.clock_id,
//             rid,
//             ]
//         )
//         return updatedReview;
//     } catch (error) {
//         return error;
//     }
// }


module.exports = {
    getAllReviews,
    getReview,
    newReview,
    deleteReview
}