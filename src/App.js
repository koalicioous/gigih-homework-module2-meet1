import data from './content/album'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Tracks from './components/Tracks'
import './App.css';
import { SearchProvider, useSearchResult } from './context/useSearchResult';

function App() {
  const { result } = useSearchResult()
  return (
    <div className="App flex flex-col min-h-screen">
        <Navbar />
        {
          result.length === 0 &&
          <Header
            imageUrl={data.album.images[0].url}
            albumName={data.album.name}
          />
        }
        <Tracks />
        <div className='text-xs bg-gray-800 py-3 text-white'>
          Generasi Gigih Frontend Track Homework by Muhammad Ulil Albab Surya Negara
        </div>
    </div>
  );
}

const AppContainer = () => {
  return (
    <SearchProvider>
      <App />
    </SearchProvider>
  )
}

export default AppContainer;
