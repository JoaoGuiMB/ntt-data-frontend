import { ShellBar } from "@ui5/webcomponents-react";

export default function Header() {
  const APP_NAME = "NTTMovies";
  return (
    <ShellBar
      logo={<img src="/nttMoviesLogo.png" alt={`${APP_NAME}'s logo`} />}
      primaryTitle={APP_NAME}
    />
  );
}
