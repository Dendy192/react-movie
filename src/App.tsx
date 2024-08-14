import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <DisplayItems
        apiEndpoint="string"
        itemHeading="hello"
        tvShowsOn={true}
        showButton={true}
        movieOn={true}
        numberOfMovies={17}
      />
    </>
  );
}

export default App;
