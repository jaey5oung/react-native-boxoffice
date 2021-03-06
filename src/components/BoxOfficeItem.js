import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import Row from './Row';
import Paragraph from './ui/Paragraph';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 12px;
`;

export default function BoxOfficeItem({data}) {
  const navigation = useNavigation();
  let intenIcon = 'โบ';
  const parsedRankInten = parseInt(data.rankInten, 10);
  if (parsedRankInten < 0) {
    intenIcon = '๐ฝ';
  } else if (parsedRankInten > 0) {
    intenIcon = '๐ผ';
  }
  const navigateMovieDetail = useCallback(() => {
    navigation.navigate('์์ธ์ ๋ณด', {movieCd: data.movieCd});
  }, [navigation, data]);
  return (
    <Pressable onPress={navigateMovieDetail}>
      <Container>
        <Row>
          <Paragraph>{data.rank}</Paragraph>
          <Paragraph>
            {intenIcon} {data.rankInten}
          </Paragraph>
          <Paragraph>{data.movieNm}</Paragraph>
          <Paragraph>{data.rankOldAndNew === 'NEW' ? '๐' : ''}</Paragraph>
        </Row>
      </Container>
    </Pressable>
  );
}
// tasioํ๋ก์ ํธ์ ๋์ํ ์์๋ ์์ค์ฐพ๊ธฐ
