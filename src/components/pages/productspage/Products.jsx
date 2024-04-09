import "./Products.css"
export default function Products(){
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
          <div className='whatProcondet'>
            <h1>PRODUCTOS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, et distinctio aspernatur quos natus esse! Quas aliquam minus iste vitae a quos quia. In impedit deserunt doloribus voluptas harum totam!</p>
          </div>
        </div>
      </div>
        </>
    )
}