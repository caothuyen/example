import { memo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-native-fontawesome";
import Input from "src/components/Form/Input";
import FieldWrapper from "./FieldWrapper";
import { colors } from "src/global/appStyles";

function FieldPassword({ control, onSubmit, errors, isLoading }) {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => setShowPassword(!showPassword);

  const RenderShowPassword = memo(() => (
    <TouchableOpacity onPress={onShowPassword} activeOpacity={0.7}>
      <FaIcon icon={showPassword ? "fa-eye" : "fa-eye-slash"} size={16} color={colors.dark_gray} />
    </TouchableOpacity>
  ));

  return (
    <FieldWrapper label="Mật khẩu" name="password" control={control}>
      <Input
        iconLeft="fa-key"
        iconRight={<RenderShowPassword />}
        secureTextEntry={!showPassword}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
        error={errors?.password}
        disabled={isLoading}
      />
    </FieldWrapper>
  );
}

export default memo(FieldPassword);
