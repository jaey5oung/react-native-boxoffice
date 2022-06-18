import React from 'react';
import {ActivityIndicator} from 'react-native';
import BoxOfficeItem from '../components/BoxOfficeItem';

import Paragraph from '../components/ui/Paragraph';

import useFetch from '../net/useFetch';

export default function BoxOffice() {
  const url =
    'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

  const {data, error} = useFetch(url, {
    key: '2363f339334c482a526d952cdba548b3',
    targetDt: '20220530',
  });

  if (error) return <Paragraph>{JSON.stringify(error)}</Paragraph>;
  if (!data) return <ActivityIndicator />;

  const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || [];

  return (
    <>
      {ranks.map(item => (
        <BoxOfficeItem key={item.rnum} data={item} />
      ))}
    </>
  );
}
