import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const onLogin = () =>{
    navigate('/arms', {
      replace: true
    })
  }

  return (
    <>
    <div className="bg-black">
        
        <div className="text-center p-3">
          <button onClick={ onLogin } className="btn btn-md btn-light btn-outline-dark ">
            Login
          </button>
        </div>
    </div>

    <div className="container-xl">
        <div className="row mt-5">

        <div className="col-md-1"></div> {/* col-md-1 */}

          <div className="col-md-5">
            <img src="../src/assets/globals/espalda.webp" alt="login page image" className="rounded-3 img-fluid p-2 bg-dark" />
          </div> {/* col-md-5 */}

          <div className="col-md-2 g-3"></div> {/* col-md-4 */}

          <div className="col-md-4">
            <li>c: con</li>
            <li>t: toma</li>
            <li>br: barra</li>
            <li>V: vuelos</li>
            <li>fr: frontal</li>
            <li>pr: prono</li>
            <li>bb: brazos</li>
            <li>pp: piernas</li>
            <li>uni: unilateral</li>
            <li>alt: alternados</li>
            <li>mc: mancuerna</li>
            <li>hzntl: horizontal</li>
            <li>t-ce: toma cerrada</li>
          </div> {/* col-md-4 */}

        </div> {/* row */}
    </div> {/* container-xl */}
    </>
  )
}
