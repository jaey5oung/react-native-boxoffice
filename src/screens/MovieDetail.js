import React from 'react';

import Row from '../components/Row';
import Paragraph from '../components/ui/Paragraph';

export default function MovieDetail({route}) {
  // const [detail, setDetail] = useState();

  return (
    <>
      <Row>
        <Paragraph>영화 코드 : {route.params.movieCd}</Paragraph>
      </Row>
      <Row>{/* <Paragraph>상영시간 : {route.params.}</Paragraph> */}</Row>
      <Row>
        <Paragraph>개봉일 : yyyymmdd</Paragraph>
      </Row>
    </>
  );
}
