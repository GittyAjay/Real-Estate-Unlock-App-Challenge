// LockButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface LockButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const LockButton: React.FC<LockButtonProps> = ({
  onPress,
  title,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: disabled ? 'gray' : '#007bff' },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      {disabled ? (
        <Ionicons name={'lock-closed'} size={20} color="#fff" />
      ) : (
        <AntDesign name={'unlock'} size={20} color="#fff" />
      )}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default LockButton;
