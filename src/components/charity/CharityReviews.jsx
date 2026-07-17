import {
    FiStar,
    FiUser,
    FiMessageCircle,
    FiCheckCircle,
} from "react-icons/fi";

const CharityReviews = ({
    reviews = [],
}) => {

    const averageRating =
        reviews.length > 0
            ? (
                  reviews.reduce(
                      (sum, review) =>
                          sum + review.rating,
                      0
                  ) / reviews.length
              ).toFixed(1)
            : "0.0";

    const getRatingCount = (rating) =>

        reviews.filter(
            (review) =>
                review.rating === rating
        ).length;

    return (

        <section className="mt-10">

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-gray-800">

                        Donor Reviews

                    </h2>

                    <p className="mt-2 text-gray-500">

                        See what donors say about this charity.

                    </p>

                </div>

                <div
                    className="
                        h-14
                        w-14
                        rounded-2xl
                        bg-yellow-100
                        text-yellow-600
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiStar size={28} />

                </div>

            </div>

            {/* Rating Summary */}

            <div className="grid lg:grid-cols-3 gap-8 mb-8">

                {/* Average */}

                <div
                    className="
                        rounded-3xl
                        bg-white
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        text-center
                    "
                >

                    <h2 className="text-6xl font-black text-gray-800">

                        {averageRating}

                    </h2>

                    <div className="flex justify-center gap-1 mt-4">

                        {[1,2,3,4,5].map((item)=>(

                            <FiStar
                                key={item}
                                size={20}
                                className="fill-yellow-400 text-yellow-400"
                            />

                        ))}

                    </div>

                    <p className="mt-4 text-gray-500">

                        Based on {reviews.length} reviews

                    </p>

                </div>

                {/* Distribution */}

                <div className="lg:col-span-2 rounded-3xl bg-white border border-gray-100 shadow-lg p-8">

                    {[5,4,3,2,1].map((rating)=>{

                        const count =
                            getRatingCount(rating);

                        const percentage =
                            reviews.length
                                ? (count /
                                      reviews.length) *
                                  100
                                : 0;

                        return(

                            <div
                                key={rating}
                                className="flex items-center gap-4 mb-4"
                            >

                                <div className="flex items-center gap-1 w-14">

                                    <span className="font-semibold">

                                        {rating}

                                    </span>

                                    <FiStar
                                        className="text-yellow-500 fill-yellow-500"
                                    />

                                </div>

                                <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">

                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                                        style={{
                                            width:`${percentage}%`
                                        }}
                                    />

                                </div>

                                <span className="w-10 text-sm text-gray-500">

                                    {count}

                                </span>

                            </div>

                        );

                    })}

                </div>

            </div>

            {/* Review List */}

            <div className="space-y-6">

                {reviews.length === 0 ? (

                    <div
                        className="
                            rounded-3xl
                            border
                            border-dashed
                            border-gray-300
                            bg-white
                            py-20
                            text-center
                        "
                    >

                        <div
                            className="
                                mx-auto
                                h-20
                                w-20
                                rounded-full
                                bg-yellow-100
                                flex
                                items-center
                                justify-center
                                text-yellow-500
                            "
                        >

                            <FiMessageCircle size={34}/>

                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-gray-800">

                            No Reviews Yet

                        </h3>

                        <p className="mt-2 text-gray-500">

                            Be the first donor to leave a review.

                        </p>

                    </div>

                ) : (

                    reviews.map((review)=>(

                        <div
                            key={review.id}
                            className="
                                rounded-3xl
                                border
                                border-gray-100
                                bg-white
                                p-6
                                shadow-lg
                                hover:shadow-xl
                                transition
                            "
                        >

                            <div className="flex justify-between">

                                <div className="flex gap-4">

                                    <div
                                        className="
                                            h-14
                                            w-14
                                            rounded-full
                                            bg-gradient-to-r
                                            from-green-500
                                            to-emerald-600
                                            text-white
                                            flex
                                            items-center
                                            justify-center
                                            font-bold
                                        "
                                    >

                                        {review.user?.name
                                            ?.charAt(0)
                                            ?.toUpperCase() ||
                                            <FiUser/>}

                                    </div>

                                    <div>

                                        <div className="flex items-center gap-2">

                                            <h3 className="font-bold text-lg">

                                                {review.user?.name}

                                            </h3>

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1
                                                    rounded-full
                                                    bg-green-100
                                                    px-2
                                                    py-1
                                                    text-xs
                                                    font-semibold
                                                    text-green-700
                                                "
                                            >

                                                <FiCheckCircle size={12}/>

                                                Verified Donor

                                            </span>

                                        </div>

                                        <div className="flex gap-1 mt-2">

                                            {[1,2,3,4,5].map((star)=>(

                                                <FiStar
                                                    key={star}
                                                    size={18}
                                                    className={
                                                        star<=review.rating
                                                        ?"fill-yellow-400 text-yellow-400"
                                                        :"text-gray-300"
                                                    }
                                                />

                                            ))}

                                        </div>

                                    </div>

                                </div>

                                <span className="text-sm text-gray-500">

                                    {new Date(
                                        review.createdAt
                                    ).toLocaleDateString("en-IN")}

                                </span>

                            </div>

                            <p className="mt-5 leading-7 text-gray-600">

                                {review.comment}

                            </p>

                        </div>

                    ))

                )}

            </div>

        </section>

    );

};

export default CharityReviews;