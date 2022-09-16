import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { GameCard, GameCardProps} from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home() {

  const [listGames, setListGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.11:3333/games")
      .then(response => response.json())
      .then(data => setListGames(data))
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title="Find your duo"
        subtitle="Find the game you want to play..."
      />

      <FlatList
        data={listGames}
        keyExtractor={item => item.id}
        renderItem={( { item } ) => (
          <GameCard 
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

    </SafeAreaView>
  );
}
