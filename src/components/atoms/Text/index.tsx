import { Text, TextPropTypes } from "@ui5/webcomponents-react";

export default function TextComponent(props: TextPropTypes) {
  return <Text {...props}>{props.children}</Text>;
}
