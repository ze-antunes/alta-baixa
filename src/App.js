import Swiper from './components/Swiper';
import video from './assests/videos/grade_da_ponte.mp4'

function App() {
  return (
    <div className="App">
      <section>
        <video src={video} autoPlay loop muted />
      </section>
      <section>
        <h1>slide</h1>
      </section>
      <section>
        <h1>slide</h1>
      </section>
      <section>
        <h1>slide</h1>
      </section>
      <section>
        <h1>slide</h1>
      </section>
      <section>
        <h1>slide</h1>
      </section>
      <section className='test'>
        <Swiper />
      </section>
    </div>
  );
}

export default App;
