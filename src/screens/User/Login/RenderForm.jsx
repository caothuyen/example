import { memo, useRef, useCallback, useState } from "react";
import { View, TextInput } from "react-native";
import { useForm } from "react-hook-form";
import { Login } from "src/store/account/actions";
import FieldUsername from "./Fields/FieldUsername";
import FieldPassword from "./Fields/FieldPassword";
import RenderButtonSubmit from "./RenderButtonSubmit";
import styles from "./style";

function RenderForm() {
  const { handleSubmit, control, setFocus, formState } = useForm({ defaultValues: { username: "", password: "" } });
  const { errors } = formState;

  const [isLoading, setIsLoading] = useState(false);
  const messageError = useRef("");

  // On submit
  const onSubmit = useCallback(async (data) => {
    setIsLoading(true);
    const res = await Login(data?.username, data?.password);
    if (!res.success) {
      messageError.current = res?.error?.message;
      setIsLoading(false);
    }
  }, []);

  // On submit next
  const onSubmitNext = useCallback(() => setFocus("password"), [setFocus]);

  // Props field
  const propsField = { control, errors, isLoading, messageError };

  return (
    <View style={styles.formContainer}>
      <FieldUsername {...propsField} onSubmit={handleSubmit(onSubmitNext)} />
      <FieldPassword {...propsField} onSubmit={handleSubmit(onSubmit)} />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <TextInput style={{ height: 48, borderWidth: 1, borderColor: "red" }} placeholder="press input" />
      <RenderButtonSubmit {...propsField} onSubmit={handleSubmit(onSubmit)} />
    </View>
  );
}
export default memo(RenderForm);
