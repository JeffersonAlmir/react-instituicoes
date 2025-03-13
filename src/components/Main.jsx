import { Container } from 'react-bootstrap';
import Carousel from './Carousel';
import PropriedadesCard from './PropriedadesCard';



const Main = () => {
  return (
    <main>
      
      <Container  className="mt-3">

        <Carousel />
      </Container>
      <Container fluid className="mt-5 pt-5">
        <PropriedadesCard />
      </Container>

    </main>
  );
};

export default Main;
