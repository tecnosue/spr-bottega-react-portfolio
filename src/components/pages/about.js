import React from 'react';
import aboutImg from '../../../static/assets/images/about/about-chica.jpg'

export default function About() {
  return (
    <div className='about-wrapper'>
      <div 
          className="left-column"
          style={{
            backgroundImage: `url(${aboutImg})`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
      />
      <div className="right-column">
        <h2>Hola! Te dejo por aquí mi</h2>
        <div className="cv">
          <a href='https://mnf.red/tecnosue/timeline' className="site-link" target="_blank">
            <h1>CV</h1>
          </a>
        </div>
        <h1>Desarrolladora Full Stack</h1>
        <p>Apasionada de la tecnología, autodidacta, curiosa y tenaz, me implico al máximo en cada proyecto. Durante años he dedicado mi tiempo libre a formarme con software de diseño gráfico, ofimática, sistemas operativos y redes. En 2021 tuve la oportunidad de certificarme con Devcamp by Bottega en Fundamentos de programación donde aprendí HTML5, CSS3 y JavaScript. Me gustó tanto que mi objetivo profesional dió un giro de 180º y me certifiqué como Full Stack Developer en Bottega university.
        </p>
      </div>   
        
    </div>
  );
}
