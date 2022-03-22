import data from './content/album'
import Header from './components/Header';
import Tracks from './components/Tracks';
import './App.css';

function App() {
  console.log(data)
  return (
    <div className="App flex flex-col min-h-screen">
      <Header
        imageUrl={data.album.images[0].url}
        albumName={data.album.name}
      />
      <Tracks />
      <div className='text-xs bg-gray-800 py-3 text-white'>
        Generasi Gigih Frontend Track Homework by Muhammad Ulil Albab Surya Negara
      </div>
    </div>
  );
}

export default App;
