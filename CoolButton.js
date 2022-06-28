import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CoolButton({ text, onPress, textColor, bgColor }) {
  return (
    <TouchableOpacity
      style={[
        styles.shadow,
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: bgColor,
          borderRadius: 4,
          paddingHorizontal: 16,
          paddingVertical: 8,
          alignSelf: 'flex-end',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: textColor,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
