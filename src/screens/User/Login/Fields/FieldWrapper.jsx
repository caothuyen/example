import { memo, cloneElement, isValidElement } from "react";
import { View, Text } from "react-native";
import { Controller } from "react-hook-form";
import styles from "../style";

function FieldWrapper({ children, name, label, control }) {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, value, ...restField } }) =>
          isValidElement(children) ? cloneElement(children, { onChangeText: onChange, value, ...restField }) : children
        }
      />
    </View>
  );
}

export default memo(FieldWrapper);
