import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
    const navigation = useNavigation()
    const onDone = () => {
      navigation.navigate("Login")
    };
    const onSkip = () => {
      navigation.navigate("Login")
    };
    const RenderItem = ({item}) => {
        return (
              <View style={{flex: 1, backgroundColor: item.backgroundColor,alignItems: 'center',justifyContent: 'center'}}>
                <Image style={styles.introImageStyle} source={item.image} />
                <View style={{padding: 5, alignItems: 'center'}}>
                  <Text style={{color: '#3284FF', fontSize: 25, fontWeight: '900', alignSelf: 'center', textAlign: 'center'}}>{item.title}</Text>
                  <Text style={{color: '#3284FF', fontSize: 16, fontWeight: '400', alignSelf: 'center', marginTop: 10, textAlign: 'center'}}>{item.text}</Text>
                </View>
              </View>
        );
      };
    
    
      const RenderSkipButton = () => {
        return (
            <View style={{paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
              <Text style={{color: '#ffffff', fontSize: 18}}>Skip</Text>
            </View>
        );
      };
    
      const RenderNextButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
                <Text style={{color: '#ffffff', fontSize: 18}}>Next</Text>
                <Icon name="arrow-right-alt" style={{color: '#ffffff', fontSize: 18}}/>
              </View>
        );
      };
    
      const RenderDoneButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
                <Text style={{color: '#ffffff', fontSize: 18}}>Done</Text>
                <Icon name="done" style={{color: '#ffffff', fontSize: 18}}/>
              </View>
        );
      };
    return (
        <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                renderNextButton={RenderNextButton}
                renderSkipButton={RenderSkipButton}
                renderDoneButton={RenderDoneButton}
                dotStyle={{backgroundColor: 'lightblue'}}
                activeDotStyle={{backgroundColor: '#3284FF'}}
              />
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
      introImageStyle: {
        maxWidth: 300,
        maxHeight: 300, 
        resizeMode: 'contain'
      },
      introTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 30,
      }
})

const slides = [
    {
      key: '1',
      text: '',
      title: '',
      image: require('../assets/webscomelogo.png'),
      backgroundColor: '#ffffff',
    },
    // {
    //   key: '2',
    //   text: 'Development of Your On-demand Multi Services Application',
    //   title: '',
    //   image: require('../assets/webscomelogo.png'),
    //   backgroundColor: '#ffffff',
    // },
    // {
    //   key: '3',
    //   text: 'Development of Your On-demand Multi Services Application',
    //   title: '',
    //   image: require('../assets/webscomelogo.png'),
    //   backgroundColor: '#ffffff',
    // },
]
