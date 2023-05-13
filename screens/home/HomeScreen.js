import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon
} from "react-native-heroicons/outline";
import {RapCategories, Categories} from "./components/categories/Categories";
import {FeaturedRails} from "./components/FeaturedRails";
import {Rubros} from "./components/rubros/Rubros";


function Header() {
    return (
        <View className={"flex flex-row items-center mx-0 border-0 gap-1 pb-3 px-0"}>
            <View className={"border-2 rounded-full border-gray-800"}>
                <Image source={{"uri": "https://ik.imagekit.io/1bhupavln/stores/logos/150x150/coto.png"}}
                       className={"w-7 h-7 p-4 rounded-full border-0"}
                />
            </View>
            <View className={"flex-1 border-0"}>
                <Text className={"absolute top-0 font-bold text-xs text-gray-400 "}>Independencia 2581</Text>
                <View className={"flex pt-2 flex-row items-center justify-right-arround gap-1"}>
                    <Text className={"text-xl text-gray-800 font-bold tracking-tighter"}>Coto</Text>
                    <ChevronDownIcon className={""} color={"gray-400"} fill={"black"} size={20}/>
                </View>
            </View>
            <UserIcon size={35} fill={"#00CCBB"} color={"black"}/>
            <ShoppingCartIcon size={35} fill={"yellow"} color={"black"}/>
        </View>
    );
}

function Search() {
    return (
        <View className={"flex flex-row items-center space-x-2 pb-2 mx-0"} >
            <View className={"flex flex-row flex-1 space-x-2 bg-gray-200 p-3 "}>
                <MagnifyingGlassIcon size={20} color={"gray"}/>
                <TextInput placeholder={"Buscar productos en Coto"}/>
            </View>
            <AdjustmentsVerticalIcon  color={"black"}/>
        </View>
    );
}

export function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    })

    return (
        <SafeAreaView className={"mt-5 p-5 bg-white flex flex-column pb-[500px]"}>

            <Header/>
            <Search/>

            {/* Body */}
            <ScrollView className={"mt-2 bg-white-100 h-[600px]"} contentContainerStyle={{  }} >

                {/* Categorias */}
                <Categories className={"mt-8"}/>


                {/* Rubros */}
                <Rubros className={"mt-8"}/>

                <View clsasName={"flex-1 bg-yellow-200 p-8 min-h-[200px] my-32 py-32 border-0"}><Text/></View>

                <RapCategories/>

                {/* Featured Rows */}
                <FeaturedRails/>

            </ScrollView>
            <StatusBar style="light"/>
        </SafeAreaView>
    )
}
