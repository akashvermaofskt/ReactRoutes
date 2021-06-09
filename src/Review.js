
import { Button, Row, Col } from 'reactstrap';

const Review = (props) => {
    const review = props.review;
    const reviewNo = props.reviewNo;
  return (
    <Row className="m-3 p-2"> 
        <Col>Review no. {reviewNo} : {review.review} </Col>
        <Col><Button color="primary" size="sm" > Show More </Button> </Col>
    </Row>
  );
}

export default Review;
