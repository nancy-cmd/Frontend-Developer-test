import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Router, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

function App() {
  async function findArt(keyword) {
    const url = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number`;
    const results = await fetch(url).then(res => res.json());

  }
  return (
    <div className="App">
      <nav>
        
        <ul>
            <li>Events</li>
            <li>Museum</li>
            <li>Arts</li>
            <li>Gallaries</li>
            <li><button class="btn">Login</button></li>
            <li><button class="explore">Explore arts</button></li>
        </ul>
        
        
    </nav>
    <main>
        <section class="sec-1">
            <div class="discover">
                <h1>Discover amazing art around the <span>world</span></h1>
            <p>Browse a curated selection of art around the world, including museum exhibitions, gallery openings, upcoming and many more</p>
            <button class="explore">Explore arts</button>
            </div>
            
        </section>
         
        <section class="sec-2">
            <div id="search" class="search">
              
               
                
            </div>
            <div class="collection-info">
                <h2>Art in the collection</h2>
           
                <p>Browse a curated selection of art around the world, including museum exhibitions, gallery openings, upcoming and many more</p>
            </div>
        
            
        
            <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <div class="text-center" col-lg-6>
                        <img src="./image/image-1.png" class="img-fluid" 
                       alt="art-image"/>
                       <h5>Plastic Hears Sculpture</h5>
                       <p>11-12 November, 2021 <br/> Galeri Salihara, Indonesia</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" col-lg-6>
                        <img src="./image/image-2.png" class="img-fluid" 
                       alt="art-image"/>
                       <h5>Plastic Hears Sculpture</h5>
                       <p>11-12 November, 2021 <br/> Galeri Salihara, Indonesia</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" col-lg-6>
                        <img src="./image/image-3.png" class="img-fluid" 
                       alt="art-image"/>
                       <h5>Plastic Hears Sculpture</h5>
                       <p>11-12 November, 2021 <br/> Galeri Salihara, Indonesia</p>
                    </div>
                </div>
              </div>
              
              <div class="row align-items-center">
                <div class="col">
                    <div class="text-center" col-lg-6>
                        <img src="./image/image-4.png" class="img-fluid" 
                       alt="art-image"/>
                       <h5>Plastic Hears Sculpture</h5>
                       <p>11-12 November, 2021 <br/> Galeri Salihara, Indonesia</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" col-lg-6>
                        <img src="./image/image-5.png" class="img-fluid" 
                       alt="art-image"/>
                       <h5>Plastic Hears Sculpture</h5>
                       <p>11-12 November, 2021 <br/> Galeri Salihara, Indonesia</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" col-lg-6>
                        <img src="./image/image-6.png" class="img-fluid" 
                       alt="art-image"/>
                       <h5>Plastic Hears Sculpture</h5>
                       <p>11-12 November, 2021 <br/> Galeri Salihara, Indonesia</p>
                    </div>
                </div>
              </div>


            </div>

            <button class="explore" id="more-btn">Explore more</button>
        </section>
    </main>
    </div>
  );
}

export default App;
