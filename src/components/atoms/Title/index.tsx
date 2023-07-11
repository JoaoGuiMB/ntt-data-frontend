import { Title, TitlePropTypes } from "@ui5/webcomponents-react";

export default function TitleComponent(props: TitlePropTypes) {
  return <Title {...props}>{props.children}</Title>;
}
