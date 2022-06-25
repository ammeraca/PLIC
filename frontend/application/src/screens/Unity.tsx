import React from 'react';
import { View } from 'react-native';
import {container} from "../styles/bases";
import UnityView from '@azesmway/react-native-unity';
import { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IMessage {
    gameObject: string;
    methodName: string;
    message: string;
}

const UnityScreen = () => {
    const unityRef = useRef<UnityView>(null);

    useEffect(() => {
        if (unityRef?.current) {
            const message: IMessage = {
                gameObject: 'GameObject',
                methodName: 'Message',
                message: 'send a message to Unity',
            };
            unityRef.current.postMessage(message.gameObject, message.methodName, message.message);
        }
    }, []);

    /*<UnityView
                //ref={unityRef}
                
                style={{ flex: 1 }}
                onUnityMessage={(result) => {console.log('onUnityMessage', result.nativeEvent.message)}}
                ObjectFiles: 291 of which compiled: 0
            />*/
    return (
        <View style={{flex: 1}}>
            <UnityView
                //ref={unityRef}
                
                style={{ flex: 1 }}
                onUnityMessage={(result) => {console.log('onUnityMessage', result.nativeEvent.message)}}

                fullScreen={false}
            />
        </View>
    );
};

export default UnityScreen;