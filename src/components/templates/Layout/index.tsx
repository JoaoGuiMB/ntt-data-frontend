import Header from "../../atoms/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const APP_NAME = "NTTMovies";
  return (
    <>
      <Header
        logo={<img src="/nttMoviesLogo.png" alt={`${APP_NAME}'s logo`} />}
        primaryTitle={APP_NAME}
      />
      {children}
    </>
  );
}
