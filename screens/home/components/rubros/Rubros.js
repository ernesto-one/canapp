import { ScrollView, TouchableOpacity, View, Image, Text } from "react-native";

let rubros = [
    { name: "Almacenes", img: require('../../../../assets/cdn/images/rubros/logos/grocery.png'), featured: true},
    { name: "Mayoristas", img: require('../../../../assets/cdn/images/rubros/logos/wholesale.png')},
    { name: "Maxikioscos", img: require('../../../../assets/cdn/images/rubros/logos/convenience.png'), featured: false},
    { name: "Mascotas", img: require('../../../../assets/cdn/images/rubros/logos/pets.png'), featured: false},
    { name: "Licorerias", img: require('../../../../assets/cdn/images/rubros/logos/alcohol.png')},
    { name: "Belleza", img: require('../../../../assets/cdn/images/rubros/logos/bellesa.png')},
    { name: "Electro", img: require('../../../../assets/cdn/images/rubros/logos/electro.png')},
    { name: "Deportes", img: require('../../../../assets/cdn/images/rubros/logos/sports.png')},
]

function RubroCard({name, img, featured = false}) {
    return (
        <TouchableOpacity className={"mr-2 align-center flex-column items-center"}>
            <View className={`h-22 w-22  ${featured ? "border-2 border-gray-700" : "border-2 border-white"} rounded-xl`}>
                <Image source={img} className={" h-20 w-20 rounded-xl py-0 mb-0 "}/>
                <View className={"absolute bottom-0  h-full w-full bg-gray-900 opacity-10 rounded-xl"}/>
            </View>
            <Text className={"text-gray-800 opacity-80 mt-1 font-semibold"}>{name}</Text>
        </TouchableOpacity>
    );
}

export function Rubros() {
    return (
        <ScrollView className="mt-8 bg-white"
                    contentContainerStyle={{
                        paddingHorizontal: 0,
                        paddingTop: 0,
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} >

            { rubros.map((rubro, index) => <RubroCard key={index} name={rubro.name} img={rubro.img} featured={rubro.featured}/>) }
        </ScrollView>
    );
}
