import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import BoxOfficeItem from '../components/BoxOfficeItem';
import Row from '../components/Row';
import Paragraph from '../components/ui/Paragraph';
import axios from 'axios';

export default function BoxOffice() {
  const [ranks, setRanks] = useState([]);
  useEffect(() => {
    const url =
      'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    axios
      .get(url, {
        params: {
          key: '2363f339334c482a526d952cdba548b3',
          targetDt: '20220530',
        },
      })
      .then(response => {
        setRanks(response.data?.boxOfficeResult?.dailyBoxOfficeList || []);
      });
  }, []);

  return (
    <>
      {ranks.map(item => (
        <BoxOfficeItem key={item.rnum} data={item} />
      ))}
    </>
  );
}
