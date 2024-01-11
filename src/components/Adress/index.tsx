import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import * as Location from "expo-location";

export default function Adress() {
  const [location, setLocation] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(JSON.stringify(location));
      console.log(location);

      let regionlocation = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });

      for (let item of regionlocation) {
        let address = `${item.street}, ${item.streetNumber}`;

        setLocation(address);
      }
    })();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location;
    console.log(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delivery Adress</Text>
      <Text style={styles.adress}>{text}</Text>
    </View>
  );
}
