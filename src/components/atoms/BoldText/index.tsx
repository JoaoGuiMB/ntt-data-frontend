import { Text } from "@ui5/webcomponents-react";
import "./styles.scss";

interface BoldTextProps {
  text: string;
}

export default function BoldText({ text }: BoldTextProps) {
  return (
    <Text className="boldText">
      <b>{text}</b>
    </Text>
  );
}
