import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface CustomTextProps extends TextProps {
  // Add any additional props you want to support
  bold?: boolean;
  italic?: boolean;
  fontFamily?: string;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  bold,
  italic,
  style,
  fontFamily = 'Karla-ExtraBold',
  ...rest
}) => {
  // Define styles based on props
  const fontStyle: TextStyle = {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    fontFamily: fontFamily,
  };

  return (
    <Text style={[fontStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
