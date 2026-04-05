import Tile from "./components/Tile/Tile";
import MetroGrid from "./components/Grid/MetroGrid";
import "./components/Tile/Tile.css";

export default function App() {
  return (
    <>
      <MetroGrid direction="vertical">

        <Tile>My tile</Tile>
        <Tile>My tile</Tile>
        <Tile type="wide">Weather</Tile>
        <Tile type="large">Large tile</Tile>

      </MetroGrid >

      <MetroGrid direction="vertical">
        <Tile color="white">My tile</Tile>
        <Tile color="blue">My tile</Tile>
        <Tile type="wide" color="green">Weather</Tile>
        <Tile type="large" color="red">Large tile</Tile>
        <Tile color="yellow">My tile</Tile>
        <Tile color="purple">My tile</Tile>
        <Tile type="wide">Weather</Tile>
        <Tile type="large">Large tile</Tile>
        <Tile>My tile</Tile>
        <Tile>My tile</Tile>
        <Tile type="wide">Weather</Tile>
        <Tile type="large">Large tile</Tile>
      </MetroGrid>

    </>
  );
}