import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MASTERCARD = 'MasterCard';
const VISA = require('../assets/media/Home/Visa.png');
const VERVE = 'Verve';

function detectCardIssuer(pan: string): string {
  const cleanedPan = pan.split(' ').join('');
  if (cleanedPan.match(/^4[0-9]{6,}$/)) {
    return VISA;
  }
  if (
    cleanedPan.match(
      /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/,
    )
  ) {
    return MASTERCARD;
  }
  return VERVE;
}

function formatCardPan(pan: string): string {
  const cleanedPan = pan.split(' ').join('').split('');
  return cleanedPan
    .map((value, index) => {
      if ((index + 1) % 4 === 0 && index > 0) {
        return `${value} `;
      }
      return value;
    })
    .join('');
}

const AtmCard = () => {
  return (
    <ImageBackground
      source={require('../assets/media/Home/card.png')}
      style={styles.cardContainer}>
      <Image source={VISA} style={styles.cardLogo} />
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.cardHolderName}>Sarah Wegan</Text>
        <Text style={styles.cardNumber}>
          {formatCardPan('5124325665892048')}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default AtmCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    height: 220,
    alignSelf: 'center',
    width: 380,
    padding: 16,
    borderRadius: 60,
  },
  cardLogo: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  cardDetailsContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  cardHolderName: {
    fontFamily: 'Karla-Regular',
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
  },
  cardNumber: {
    fontSize: 20,
    letterSpacing: 1.3,
    marginBottom: 12,
    fontWeight: '800',
    color: 'white',
    fontFamily: 'Karla-Extrabold',
  },
});
