const AlbumCard = ({ album, onClick }) => (
  <div onClick={() => onClick(album)} className="cursor-pointer bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
    <img src={album.cover} alt={album.title} className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{album.title}</h2>
      <p className="text-sm text-gray-600">{album.artist} ({album.year})</p>
    </div>
  </div>
);

export default AlbumCard;
  