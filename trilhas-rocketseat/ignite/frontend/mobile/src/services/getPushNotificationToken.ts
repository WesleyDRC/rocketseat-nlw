import * as Notifications from "expo-notifications";

export async function getPushNotificatonToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }
  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log("notificação", pushToken.data);
    return pushToken.data;
  }
}
