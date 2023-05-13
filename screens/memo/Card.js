import {Pressable, Text} from "react-native";
import React from "react";

export function Card({children, onPress, isFlipped}) {
    return (
        <Pressable className={"p-2 bg-green-400 flex flex-1 items-center justify-center"} style={`
                 width: 20%, height: 20%; 
                 margin: 10; 
                 borderRadius: "25%'; borderColor: "#334155";
                 alignItems: "center"; justifyContent: "center";
                 backgroundColor: "#1e293b";
        `}>
            <Text className={`
                    py-2 
                    text-6xl 
                    border-0 bg-yellow-50 rounded-full 
                    text-center align-bottom
            `}>
                {children}
            </Text>
        </Pressable>
    )
}
