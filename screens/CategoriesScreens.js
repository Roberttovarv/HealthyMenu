import { FlatList } from "react-native-web"
import { CATEGORIES } from "../data/dummy-data"
import { CategoryGridTile } from "../components/CategoryGridTile"

export const CategoriesScreen = () => {

    const renderCategoryItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    }
    return(
        <>
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}                        
        />
        </>
    )
}