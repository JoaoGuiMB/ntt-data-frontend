import { ShellBar, ShellBarPropTypes } from "@ui5/webcomponents-react";

interface HeaderProps {
  props: ShellBarPropTypes;
}

export default function Header({ props }: HeaderProps) {
  return <ShellBar {...props} />;
}
