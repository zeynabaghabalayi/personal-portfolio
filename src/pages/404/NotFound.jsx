import React from 'react';
import { Container } from 'react-bootstrap';
import { FiHome } from 'react-icons/fi'
import notFound from '../../assets/chill-illustrationz.png'
import AbpButton from '../../components/common/AbpButton';

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
 
        <h2>Hmm...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <img src={notFound} alt="notfound" />
        </div>
        <AbpButton path="/" variant="dark">
          <FiHome />
        </AbpButton>
      </Container>
    </div>
  )
}

export default NotFound