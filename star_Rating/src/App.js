import StarRating from './components';
import ImageSlider from './components/imageSlider';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <StarRating /> */}
      
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={5} page={1} />

    </div>
  );
}

export default App;
