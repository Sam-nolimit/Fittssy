import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar, Agenda} from 'react-native-calendars';

const Progress = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Text style={styles.title}>History</Text>
      <View style={styles.underline} />
      <Calendar
        onDayPress={day => setSelected(day.dateString)}
        style={styles.calendar}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true},
        }}
        theme={calendarTheme}
      />
      {/* <Agenda
        style={styles.agenda}
        theme={agendaTheme}
        items={{
          '2024-03-26': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-03-27': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-03-28': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-03-29': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-03-30': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-03-31': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-04-1': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-04-2': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-04-3': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-04-4': [{name: 'Meeting with Client', time: '10:00 AM'}],
          '2024-04-5': [{name: 'Gym Session', time: '05:00 PM'}],
        }}
      /> */}
    </View>
  );
};

const calendarTheme = {
  backgroundColor: '#000000',
  calendarBackground: '#000000',
  textSectionTitleColor: '#ffffff',
  selectedDayBackgroundColor: '#28CC9E',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#ffffff',
  dayTextColor: '#2d4150',
  textDisabledColor: '#cbd2d8',
  dotColor: '#28CC9E',
  selectedDotColor: '#ffffff',
  arrowColor: 'white',
  monthTextColor: 'white',
  textMonthFontFamily: 'Karla-Bold',
  textMonthFontWeight: 'bold',
  textMonthFontSize: 20,
};

const agendaTheme = {
  backgroundColor: '#000000',
  agendaKnobColor: '#28CC9E',
  cardContainerStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#28CC9E',
    borderWidth: 1,
  },
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    color: '#28CC9E',
    fontSize: 25,
    fontFamily: 'Karla-Regular',
    textAlign: 'center',
  },
  underline: {
    height: 3,
    backgroundColor: '#28CC9E',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  calendar: {
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  agenda: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default Progress;
