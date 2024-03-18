import { ImageLoader } from "./components";

function App() {
  const src = "https://placehold.co/600x400";
  return (
    <>
      <ImageLoader loader={"Loading"} src={src} error={"Error has occurred"}>
        <img src={src} />
      </ImageLoader>
    </>
  );
}

export default App;
