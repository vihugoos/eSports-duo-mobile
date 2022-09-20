import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';

import { Background } from '../../components/Background';
import { GameCard, GameCardProps} from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home() {

  const [listGames, setListGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  const apiUrl = Constants?.expoConfig?.extra?.apiUrl;

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch(`${apiUrl}/games`)
      .then(response => response.json())
      .then(data => setListGames(data))
  }, []);

  return (
    <Background>
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
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />

      </SafeAreaView>
    </Background>
  );
}
