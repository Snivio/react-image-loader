# React Image Loader

This Component Makes lazy loading images a breeze with both loading element and error element
by taking care of loading and error handling within the element

## Usage of Component

- Props

| Props    | Description         |
| -------- | ------------------- |
| loader   | Loading element     |
| error    | error element       |
| children | react child element |

```tsx
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
```
