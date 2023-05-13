import {ScrollView, Text, View, Image, TouchableOpacity} from "react-native";
import {CategoryLogos} from "../../../../assets/storeLogos";

let categorias = [
   { name: "Frutas y verduras", img: require('../../../../assets/cdn/images/categories/logos/frutas_y_verduras.png')},
    { name: "Bebidas sin alcohol", img: require('../../../../assets/cdn/images/categories/logos/bebidas.png')},
   { name: "Lacteos y huevos", img: require('../../../../assets/cdn/images/categories/logos/lacteos.png')},
   { name: "Almacen", img: require('../../../../assets/cdn/images/categories/logos/despensa.png')},
   { name: "Carniceria", img: require('../../../../assets/cdn/images/categories/logos/carnes.png')},
    { name: "Limpieza del hogar", img: require('../../../../assets/cdn/images/categories/logos/limpieza.png')},
    { name: "Snacks y golosinas", img: require('../../../../assets/cdn/images/categories/logos/snacks_y_golosinas.png')},
   { name: "Quesos y fiambres", img: require('../../../../assets/cdn/images/categories/logos/quesos_y_fiambres.png')},
   { name: "Panaderia",  img: require('../../../../assets/cdn/images/categories/logos/panaderia.png')},
    { name: "Bebidas con alcohol", img: require('../../../../assets/cdn/images/categories/logos/licores_y_aperitivos.png')},
   { name: "Perfumeria", img: require('../../../../assets/cdn/images/categories/logos/perfumeria.png')},
   { name: "Mascotas",  img: require('../../../../assets/cdn/images/categories/logos/mascotas.png')},
   //{ "name": "Bebes", img: require('../../../../assets/cdn/images/categories/logos/bebes.png')},
   { name: "Congelados",  img: require('../../../../assets/cdn/images/categories/logos/congelados.png')},
    { name: "Hogar y decoracion", img: require('../../../../assets/cdn/images/categories/logos/hogar_y_decoracion.png')},
    { name: "Veiculos y Ferreteria", img: require('../../../../assets/cdn/images/categories/logos/vehiculos_y_ferreteria.png')},
]

let rapCategorias = [
    { name: "Frutas y verduras", img: require('../../../../assets/cdn/images/categories/logos/rap/frutas_y_verduras.png')},
    { name: "Carnes y Pescados", img: require('../../../../assets/cdn/images/categories/logos/rap/carnes_y_pescados.png')},
    { name: "Panaderia", img: require('../../../../assets/cdn/images/categories/logos/rap/panaderia.png')},
    { name: "Queos y Fiambres", img: require('../../../../assets/cdn/images/categories/logos/rap/quesos-y-fiambres.png')},
    { name: "Mascotas", img: require('../../../../assets/cdn/images/categories/logos/rap/mascotas.png')},
    { name: "Hot", img: require('../../../../assets/cdn/images/categories/logos/rap/hot.png')},
]


function CategoryOutlineCard({name, img, featured = false}) {
    return (
        <TouchableOpacity className={"mr-2 align-center flex-column items-center "}>
            <View className={`h-22 w-22`}>
                <Image source={img} className={" h-20 w-20 rounded-xl py-0 mb-0"}/>
            </View>
            <Text className={"px-0 text-gray-800 opacity-80 h-12 mt-0 tracking-tighter font-semibold w-[95%] text-center"}>{name}</Text>
        </TouchableOpacity>
    );
}

function CategoryCard({name, img}) {
    return (
<TouchableOpacity className={"mr-2"}>
    <Image source={img} className={" h-20 w-20 rounded-lg py-0 my-1"}/>
    <View className={"absolute bottom-0  h-full w-full bg-gray-900 opacity-10 border-2 border-gray-900 rounded"}/>
    <Text className={"absolute bottom-1 left-1 text-white font-bold tracking-tighter "}>{name}</Text>
</TouchableOpacity>
    );
}

export function Categories({outline=false}) {
    {/* <ScrollView className="flex flex-row gap-1 bg-yellow-200" contentContainerStyle={{ flex: 1, flexDirection: 'row' }}> */}
    return (
        <ScrollView className="mt-8 bg-white"
            contentContainerStyle={{
                paddingHorizontal: 0,
                paddingTop: 0,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false} >
                { categorias.map((categoria, index) => {
                    if(outline) {
                        return (<CategoryOutlineCard key={index} name={categoria.name} img={categoria.img}/> );
                    } else {
                        return (<CategoryCard key={index} name={categoria.name} img={categoria.img}/> );
                    }
                }) }
        </ScrollView>
    );
}



export function RapCategories({outline= true}) {
    {/* <ScrollView className="flex flex-row gap-1 bg-yellow-200" contentContainerStyle={{ flex: 1, flexDirection: 'row' }}> */}
    return (
        <ScrollView className="mt-8 bg-white"
                    contentContainerStyle={{
                        gap: -16,
                        paddingHorizontal: 0,
                        paddingTop: 0,
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} >
            { rapCategorias.map((categoria, index) => {
                if(outline) {
                    return (<CategoryOutlineCard key={index} name={categoria.name} img={categoria.img}/> );
                } else {
                    return (<CategoryCard key={index} name={categoria.name} img={categoria.img}/> );
                }
            }) }
        </ScrollView>
    );
}
