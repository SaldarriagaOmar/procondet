
import "./Contact.css"

export default function Contact() {
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
        <div className='bodyText'>
            <h1>Contacto</h1>
            <h3>+57 333 xxx xxxx</h3>
            <h3>@ProcondetSAS</h3>
        </div>
        <div className="bodyForm">
        <h2>Escríbenos</h2>
        <input type="email" name="correo" id="email" placeholder="Correo electrónico" />
        <br />
        <input type="text" name="Párrafo" id="text" placeholder="¿En qué podemos ayudarte?"/>
        </div>
      </div>
        </>
    )
}