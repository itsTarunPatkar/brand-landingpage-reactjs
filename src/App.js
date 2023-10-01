import Navi from './Components/Navbar'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import FAQ from './Components/FAQ'
import Aos from 'aos';


function App() {
  Aos.init();

  return (
    <>
      <Navi/>
       <Home/>
      <Aboutus/>
      <Services/>
      <FAQ/>
      <ContactUs/>
    </>
  );
}

export default App;
