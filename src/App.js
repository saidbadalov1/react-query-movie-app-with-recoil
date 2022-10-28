import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Movies from './components/Movies';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import MovieDetails from './components/MovieDetails';

function App() {
  const client = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to='/' style={{ color: 'white' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/movies' style={{ color: 'white' }}>
                    Movies
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='movies/:movieId' element={<MovieDetails />} />
            <Route path=':movieId' element={<MovieDetails />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
