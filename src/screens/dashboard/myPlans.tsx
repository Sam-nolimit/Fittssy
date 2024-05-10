/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import BottomComponent from '../../components/bottom';
import Card from '../../components/card';
// import {AuthContext} from '../../context/authContext';

const FirstRoute = () => (
  <View style={{flex: 1}}>
    <BottomComponent title="Create Personal Workout Plan" />
    <ScrollView>
      <Card
        headTitle="Current"
        middleTitle="Bulking: 3 Days"
        titleMain="Intermediate 3 Day Plan"
      />
      <Card
        headTitle="Switch"
        middleTitle="Bulking: 3 Days"
        titleMain="Intermediate 3 Day Plan"
      />
      <Card
        headTitle="Switch"
        middleTitle="Bulking: 4 Days"
        titleMain="5day PPL Plan"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <View
          style={{
            height: 98,
            width: 98,
            borderWidth: 2,
            borderColor: '#171717',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <TouchableOpacity
            style={{
              height: 93,
              width: 148,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/icons/plus.png')}
              style={{height: 46, width: 46}}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', paddingVertical: 20}}> Create New</Text>
        </View>
        <View
          style={{
            height: 98,
            width: 98,
            borderWidth: 2,
            borderColor: '#171717',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <TouchableOpacity
            style={{
              height: 93,
              width: 148,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/icons/copy.png')}
              style={{height: 46, width: 46}}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', paddingVertical: 20}}>
            Copy Previous
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

const SecondRoute = () => {
  // const {logOut} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Card
          headTitle="Current"
          middleTitle="Bulking: 3 Days"
          titleMain="Intermediate 3 Day Plan"
        />
        <Card
          headTitle="Switch"
          middleTitle="Bulking: 3 Days"
          titleMain="Intermediate 3 Day Plan"
        />
        <Card
          headTitle="Switch"
          middleTitle="Bulking: 4 Days"
          titleMain="5day PPL Plan"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View
            style={{
              height: 98,
              width: 98,
              borderWidth: 2,
              borderColor: '#171717',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <TouchableOpacity
              style={{
                height: 93,
                width: 148,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/plus.png')}
                style={{height: 46, width: 46}}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', paddingVertical: 20}}>
              {' '}
              Create New
            </Text>
          </View>
          <View
            style={{
              height: 98,
              width: 98,
              borderWidth: 2,
              borderColor: '#171717',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <TouchableOpacity
              onPress={() => {
                // logOut();
              }}
              style={{
                height: 93,
                width: 148,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/copy.png')}
                style={{height: 46, width: 46}}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', paddingVertical: 20}}>
              Copy Previous
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const MyPlans = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Current'},
    {key: 'second', title: 'All'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#28CC9E'}}
      style={{
        backgroundColor: '#060202',
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        fontFamily: 'Karla-Bold',
      }}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Text
        style={{
          color: '#28CC9E',
          fontSize: 25,
          fontFamily: 'Karla-Regular',
          textAlign: 'center',
        }}>
        My Plans
      </Text>
      <View style={styles.underline} />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default MyPlans;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  underline: {
    height: 3,
    backgroundColor: '#28CC9E',
    marginTop: 10,
    marginHorizontal: 5,
  },
});
