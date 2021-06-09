
const PRODUCT_INFO = {
    1 : {
        "reviews":[
            {"author": "ABCDe", "review":"GOOD!", "reviewers_viewer_no": 3},
            {"author": "DEF", "review":"OK!"},
            {"author": "XYZ", "review":"BAD!"},
            {"author": "ABCDe", "review":"GOOD!"},
            {"author": "DEF", "review":"OK!"},
            {"author": "XYZ", "review":"BAD!"},
            {"author": "ABCDe", "review":"GOOD!"},
            {"author": "DEF", "review":"OK!"},
            {"author": "XYZ", "review":"BAD!", dev },
        ]
    },
    2 : {
        "reviews":[
            {"author": "ABCDe", "review":"BAD!"}
        ]
    },
    3 : {
        "reviews":[
            {"author": "ABCDe", "review":"OK!"}
        ]
    },
    4 : {
        "reviews":[
            {"author": "ABCDe", "review":"GOOD!"}
        ]
    },
}

FRIENDS = {
    1 : [2,3,4],
    2 : [1,6],
    3 : [1],
    4 : [1],
    5 : [],
    6 : [],
}

const Review = (props) => {
    const product_id = props.match.params.product_id;
    const viewer_id = props.match.params.viewer_id;
    
  return (
    <div>
        product_id = {product_id} <br/>
        viewer_id = {viewer_id}
        Reviews : {
            PRODUCT_INFO[product_id].reviews.map(
                (review, index) => {
                    return (
                    <div> 
                        Review no. {index+1} : {review.review} Author {review.author ? FRIENDS[viewer_id].includes(review.revi)} 
                    </div>
                    )
                }
            )
        }
    </div>
  );
}

export default Review;
