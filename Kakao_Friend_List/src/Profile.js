import { Image, View, Text } from 'react-native';
import Margin from './Margin';

export default ({ uri, name, introduction, isMyProfile }) => {
    const size = isMyProfile ? 50 : 40;
    const fontSize = isMyProfile ? 16 : 15;
    const introductionFontSize = isMyProfile ? 12 : 11;
    return (
        <View style={{ flexDirection: "row" }}>
            <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size * 0.35 }} />

            <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <Text style={{ fontFamily: "SpoqaHanSansNeo-Bold", fontSize: fontSize }}>{name}</Text>
                {!!introduction && (
                    <View>
                        <Margin height={6} />
                        <Text style={{ fontFamily: "SpoqaHanSansNeo-Regular", fontSize: introductionFontSize, color: "grey" }}>{introduction}</Text>
                    </View>
                )}
            </View>
        </View >
    )
}