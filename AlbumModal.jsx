const AlbumModal = ({ album, onClose }) => {
    if (!album) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">&times;</button>
          <img src={album.cover} alt={album.title} className="w-full h-64 object-cover rounded" />
          <h2 className="text-xl font-bold mt-4">{album.title}</h2>
          <p className="text-gray-600">{album.artist} — {album.year} — {album.label}</p>
          <p className="mt-3">{album.description}</p>
          <div className="mt-4 flex gap-4">
            {Object.entries(album.links).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AlbumModal;
  