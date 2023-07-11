import Header from "./components/atoms/Header";

function App() {
  const APP_NAME = "NTTMovies";

  return (
    <>
      <Header
        props={{
          logo: <img src="/nttMoviesLogo.png" alt={`${APP_NAME}'s logo`} />,
          primaryTitle: APP_NAME,
        }}
      />
    </>
  );
}

export default App;
