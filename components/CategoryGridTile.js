import { Pressable, Text, View } from "react-native"

export const CategoryGridTile = ({title, color}) =>{
    <View>
        <Pressable>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}