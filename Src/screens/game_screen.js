import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function GameScreen() {
    return (
        <WebView
            style={{ marginTop: 40 }}
            source={{ uri: 'https://learnenglishkids.britishcouncil.org/category/topics/food' }}
        />
    )
}