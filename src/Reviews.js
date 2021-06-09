import Review from './Review';
import { Container , Row} from 'reactstrap';

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
            {"author": "XYZ", "review":"BAD!" },
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

const FRIENDS = {
    1 : [2,3,4],
    2 : [1,6],
    3 : [1],
    4 : [1],
    5 : [],
    6 : [],
}

const Reviews = (props) => {
    const product_id = props.match.params.product_id;
    const viewer_id = props.match.params.viewer_id;
    
  return (
    <div>
        product_id = {product_id} <br/>
        viewer_id = {viewer_id}
        Reviews : 
        <Container className="themed-container" fluid="md">
            {
                PRODUCT_INFO[product_id].reviews.map(
                    (review, index) => {
                        return (
                        < Review review = {review} reviewNo={index+1} />
                        )
                    }
                )
            }
        </Container>
    </div>
  );
}

export default Reviews;
