import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <>
      <div className='headName'>
        <img src="https://raw.githubusercontent.com/SaldarriagaOmar/procondet/b4e57a62c9264b63d25a342878fa520bd5721a02/src/assets/imgs/Logotipo%20Procondet.png" alt="PROCONDET LOGO" />
      </div>
      <div>
        <div className='navMen'>
          <button>Inicio</button>
          <button>Servicios</button>
          <button>Productos</button>
          <button>Contacto</button>
        </div>
      </div>
      <div className='body'>
        <div className='bodyIntro'>

          <div className='bodyImage'>
            <img src="https://raw.githubusercontent.com/SaldarriagaOmar/procondet/main/src/assets/imgs/PCNDT.jpeg" alt="" />
          </div>
          <div className='bodyText'>
            <div className='whatProcondet'>
              <h1>Somos Procondet SAS</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias temporibus enim voluptates recusandae deserunt nostrum accusantium eaque nemo numquam maiores laborum, provident, natus nam esse, doloremque aliquid est in aspernatur?</p>
            </div>
            <div className='whyProcondet'>
              <h1>¿Por qué elegir Procondet SAS?</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eius, molestiae nulla excepturi, accusamus ipsa aspernatur nihil dignissimos veritatis consequatur cumque a odio necessitatibus hic voluptatibus deleniti asperiores optio consequuntur?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='services'>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/default-icon.png" alt="" />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/default-icon.png" alt="" />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/default-icon.png" alt="" />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/default-icon.png" alt="" />
      </div>
    </>
  )
}
