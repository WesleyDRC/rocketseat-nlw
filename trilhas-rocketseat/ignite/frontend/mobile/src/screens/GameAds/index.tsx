import { useEffect, useState } from "react";

import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from "@expo/vector-icons";

import { useRoute, useNavigation } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";

import { styles } from "./styles";
import { THEME } from "../../theme";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import logoImg from "../../assets/logo-nlw-esports.png";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

export function GameAds() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");
  const [loadingAds, setLoadingAds] = useState(true);

  const route = useRoute();
  const gameAds = route.params as GameParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.15.19:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => {
        setDiscordDuoSelected(data.discord);
      });
  }

  useEffect(() => {
    fetch(`http://192.168.15.19:3333/games/${gameAds.id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setDuos(data);
        setLoadingAds(false);
      });
  });

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: gameAds.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Header title={gameAds.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyContent,
          ]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              {loadingAds ? (
                <ActivityIndicator />
              ) : (
                "Não há anúncios publicados para esse jogo!"
              )}
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          onClose={() => setDiscordDuoSelected("")}
          discord={discordDuoSelected}
        />
      </SafeAreaView>
    </Background>
  );
}
