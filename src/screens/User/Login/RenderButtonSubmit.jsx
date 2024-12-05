import { memo, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useWatch } from "react-hook-form";
import AnimPress from "src/components/common/AnimPress";
import Loading from "src/components/Loading";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "src/global/appStyles";
import styles from "./style";

function RenderButtonSubmit({ onSubmit, control, isLoading, messageError }) {
  const [reload, setReload] = useState(false);
  const values = useWatch({ control, name: ["username", "password"] });

  useEffect(() => {
    if (messageError.current) {
      messageError.current = "";
      setReload((prev) => !prev);
    }
  }, [messageError, values]);

  return (
    <>
      <AnimPress onPress={!isLoading && onSubmit}>
        <View style={[styles.buttonSubmit, isLoading && styles.buttonSubmitDisabled]}>
          {isLoading && <Loading size={30} color="#fff" />}
          <Text style={styles.buttonSubmitText}>Đăng nhập</Text>
        </View>
      </AnimPress>
      {messageError.current && !isLoading && (
        <View style={styles.messageErrorContainer}>
          <FaIcon icon="fa-circle-exclamation" size={16} color={colors.error} />
          <Text style={styles.messageError}>Tên đăng nhập hoặc mật khẩu không đúng!</Text>
        </View>
      )}
    </>
  );
}

export default memo(RenderButtonSubmit);
