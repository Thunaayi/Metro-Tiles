# Metro Tile Grid Library

A lightweight React component library for building Windows 8 style Metro layouts with ease.

## Installation

```bash
npm install metro-tiles
```

**Note:** Ensure you have `react` and `react-dom` installed as they are peer dependencies.

## Usage

First, import the styles in your main entry file (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'metro-tiles/style.css';
```

Then use the components in your application:

```tsx
import { MetroGrid, Tile } from 'metro-tiles';

function MyDashboard() {
  return (
    <MetroGrid direction="horizontal">
      <Tile 
        title="Mail" 
        size="medium" 
        color="#0020a0" 
        icon={<MyIcon />} 
      />
      <Tile 
        title="Photos" 
        size="large" 
        color="#15992a" 
      />
      <Tile 
        title="Calendar" 
        size="small" 
        color="#d24726" 
      />
    </MetroGrid>
  );
}
```

## API

### MetroGrid Props
- `direction` ("horizontal" | "vertical"): The scroll direction of the grid.
- `children`: Tile components.
- `className`: Optional extra classes.

### Tile Props
- `title` (string): The label displayed at the bottom of the tile.
- `size` ("default" | "large" | "wide"): The size of the tile according to the Win8 spec.
- `color` (string): CSS background color.

## License
MIT
