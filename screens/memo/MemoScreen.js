import {Pressable, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Card} from "./Card";

function shufle(items) {
    for (let i = items.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

const cards = [ "👻", "🍑", "🐷", "🔑", "🥑", "🥕" ];


function EmojiCard({emoji, index,  flipped, onFlip}) {
    return (
        <Pressable onPress={onFlip} key={index} className={`
                    border-4 border-green-800 rounded-2xl 
                    text-center align-middle 
                    p-2 
                    flex items-center justify-center
                    `}>
            {flipped ? (
                    <Text className={"text-6xl rounded-full bg-green-200 mt-1 pt-4"}>{emoji}</Text>
                ) : (
                <Text className={"text-6xl text-yellow-200 font-black text-center mt-1 pt-4"}>?</Text>
            )}
        </Pressable>
    );
}

export function MemoScreen() {
    const initialState = {
        board: shufle([...cards, ...cards]),
        selectedCards: [],
        matchedCards: [],
        score: 0,
    }
    const [state, setState] = useState(initialState);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        if (state.selectedCards.length < 2) return;
        handleCardSelection();
    }, [state.selectedCards]);

    const handleCardSelection = () => {
        if (state.board[state.selectedCards[0]] === state.board[state.selectedCards[1]]) {
            setState({
                ...state,
                matchedCards: [...state.matchedCards, ...state.selectedCards],
                selectedCards: [],
                score: state.score + 1,
            });
        } else {
            const timeout = setTimeout(() => {
                setState({
                    ...state,
                    selectedCards: [],
                });
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }

    const handleTapCard = (index) => {
        if (state.selectedCards.length >= 2 || state.selectedCards.includes(index)) return;
        setState({
            ...state,
            selectedCards: [...state.selectedCards, index],
            score: state.score + 1,
        });
    }

    const didPlayerWin = state.matchedCards.length === state.board.length;


    const handleRestart = () => {
        setState(initialState);
        setGameEnded(false);
    }

    //const [board, setBoard] = useState(() => shufle([...cards, ...cards]));
    //const [selectedCards, setSelectedCards] = useState([]);
    //const [matchedCards, setMatchedCards] = useState([]);
    //const [score, setScore] = useState(0);

    //useEffect(() => {
    //
    //    if (selectedCards.length < 2) return;

    //    if (board[selectedCards[0]] === board[selectedCards[1]]) {
    //        setMatchedCards((matchedCards) => [...matchedCards, ...selectedCards]);
    //        setSelectedCards([]);
    //    } else {
    //        const timeout = setTimeout(() => setSelectedCards([]), 1000);
    //        return () => clearTimeout(timeout);
    //    }
    //}, [selectedCards]);

    //const handleTapCard = (index) => {
    //    console.log(` handle tap card of ${index}`);
    //    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;

    //    setSelectedCards([...selectedCards, index]);

    //    setScore(score + 1);
    //}

    //const didPlayerWin = matchedCards.length === board.length;

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    })

    return (
        <SafeAreaView className={"mt-8 flex-1 flex bg-green-400 items-center justify-items-start"}>
            { didPlayerWin ? (
                <Text onPress={handleRestart}     className={`text-center  absolute h-fit w-fit top-2/3 border-2 bg-yellow-200 pb-4 pt-6 px-4 rounded-full border-b-8 border-r-8 border-yellow-600 z-50 "}>
                    text-8xl z-50`}>🥳🎉</Text>
                ) : null
            }
            <View className={` header 
                    flex-1/4 flex-row items-center justify-center 
                    bg-pink-400 
                    border-b-8 border-pink-500
                    w-full
            `}>
                <Text className={"text-3xl font-bold text-gray-800 my-8"}>Memo</Text>
                <Text className={"ml-2 text-3xl font-bold text-green-500 my-8"}>🐷 {state.score}</Text>
            </View>
            <View className={`board  
                        flex-1/2 flex-row gap-0 flex-wrap content-around justify-center 
                        my-8
                        bg-green-500
            `}>
                {/* board.map((emoji, index) => { return ( <Card key={index}>{emoji}</Card> ); }) */}
                {state.board.map((emoji, index) => {
                        const isTurnedOver = state.selectedCards.includes(index) || state.matchedCards.includes(index);
                        return (
                            <View key={index} className={"w-1/4"}>
                                <EmojiCard key={index} emoji={emoji} flipped={isTurnedOver} onFlip={() => handleTapCard(index)}/>
                            </View>
                        );
                    }
                )}
            </View>
            <View className={"flex-1"}><Text/></View>
            <Pressable onPress={handleRestart} className={`mb-8 absolute bottom-0 
                border-4 border-green-600 border-b-8 border-r-8
                bg-green-300 flex flex-1 items-center justify-center
                px-16 py-2 `}>
                <Text className={` text-2xl font-bold text-green-800`}>Jugar</Text>
            </Pressable>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
