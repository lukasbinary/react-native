import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286F4"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Rain: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Snow: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long MIST",
        subtitle: "just don't go outside"
    },
    Smoke: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Fog: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Sand: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Ash: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Squall: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Tornado: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    },
    Clouds: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "In case this is too long",
        subtitle: "and this one as well then?"
    }
}

const defaultWeatherOption = {
    iconName: "weather-sunset",
    gradient: ["#4DA0B0", "#D39D38"]
}

export default function Weather({ temp, condition }) {
    const weather = weatherOptions[condition] || defaultWeatherOption;
    return (
        <LinearGradient style={styles.container} colors={weather.gradient}>
            {/* <StatusBar barStyle="light-content" /> */}
            <StatusBar style="auto" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weather.iconName} size={90} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weather.title}</Text>
                <Text style={styles.subtitle}>{weather.subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Clear', 'Ash', 'Squall', 'Tornado', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
