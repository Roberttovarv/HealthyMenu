import { StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"

export const MealsOverviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Meals Overview
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        padding: 16
    }
})