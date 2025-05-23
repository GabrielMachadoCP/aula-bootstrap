import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className='d-block w-100'
            src='/img1.jpg'
            alt='imagem1'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            src='/img2.jpg'
            alt='imagem2'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            src='/img3.jpg'
            alt='imagem3'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;