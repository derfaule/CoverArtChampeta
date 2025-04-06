import { useState } from "react";
import data from "./data/albums.json";
import AlbumCard from "./components/AlbumCard";
import AlbumModal from "./components/AlbumModal";
import "./index.css";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 Album Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((album) => (
          <AlbumCard key={album.id} album={album} onClick={setSelected} />
        ))}
      </div>
      {selected && <AlbumModal album={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;
