import { Image, View } from "react-native";

type RideMapProps = {
  destination_longitude: number;
  destination_latitude: number;
};

export default function RideMap({
  destination_longitude,
  destination_latitude,
}: RideMapProps) {
  return (
    <View className="flex flex-row items-center justify-between">
      <Image
        source={{
          uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
        }}
        className="w-[80px] h-[90px] rounded-lg"
      ></Image>
    </View>
  );
}
