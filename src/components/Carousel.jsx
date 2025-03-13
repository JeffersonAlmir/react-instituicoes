import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit"
import carousel from '../data/carousel'


const Carousel = () => {
    const dataCarousel = [...carousel];
    return(
        <MDBCarousel showControls >
           { dataCarousel.map(({ imagem, descricao},index) => {
                const id = index +1;
                return(
                    <MDBCarouselItem itemId={id} key = {id}>
                         <img src={imagem} className='d-block w-100' alt={descricao} />
                    </MDBCarouselItem>
                );
            })}
            
        </MDBCarousel>
    );
};

export default Carousel;