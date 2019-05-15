// Viewだけを管理する
import { View, Text, Button, StyleSheet } from 'react-native';
import * as React from 'react';

export interface CounterProps {
  value?: number;
  addCount?: (val: number) => void;
  reset?: () => void;
}

const Counter: React.SFC<CounterProps> = (props: CounterProps) => {
  return (
    <View>
      <View style={styles.topBlank} />
      <Text>{props.value || 0}</Text>
      <View>
        <Button
          title="increment"
          onPress={() => {
            if (props.addCount) props.addCount(1);
          }}
        />
        <Button
          title="reset"
          onPress={() => {
            if (props.reset) props.reset();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBlank: {
    marginTop: 60
  }
});

export default Counter;