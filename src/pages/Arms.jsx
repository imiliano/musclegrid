import { LinkModal } from "../components/LinkModal";
import { Modal } from "../components/Modal";

export const Arms = () => {
  const folder = 'arms';

  return (
    <>
    <section className="text-center fw-bold fs-2 my-2">
        <h4> Biceps + Triceps </h4>
        <hr />
    </section>{/* title */}

    <div className="container-xl mb-2">
    <div className="row">
    <LinkModal target={'biceps-cruz'} name={'Biceps Cruz'} />
    <LinkModal target={'concentrados'} name={'Concentrados'} />
    <LinkModal target={'curl-antebrazos-prono'} name={'Antebrazos 1'} />
    <LinkModal target={'curl-antebrazos-supino'} name={'Antebrazos 2'} />
    <LinkModal target={'curl-biceps-supino'} name={'Curl Supino'} />
    <LinkModal target={'curl-con-barra-prono'} name={'Curl Prono'} />
    <LinkModal target={'curl-con-barra-supino'} name={'Curl Supino 2'} />
    <LinkModal target={'curl-con-polea'} name={'Curl Polea'} />
    <LinkModal target={'curl-hammer'} name={'Curl Hammer'} />
    <LinkModal target={'scott'} name={'Scott 1'} />
    <LinkModal target={'scott2'} name={'Scott 2'} />
    <LinkModal target={'triceps-polea-alta'} name={'Triceps Polea'} />
    <LinkModal target={'triceps-polea-alta-2'} name={'Triceps Polea 2'} />
    <LinkModal target={'patadas-de-burro'} name={'Patadas burro'} />
    <LinkModal target={'frances-bco-plano-mancuerna'} name={'Francés 1'} />
    <LinkModal target={'frances-banco-plano'} name={'Francés 2'}/>
    <LinkModal target={'extension-vertical'} name={'Extensión 1'} />
    <LinkModal target={'extension-sentado-1-mancuerna'}name={'Extensión 2'} />
    <LinkModal target={'extension-c-barra'} name={'Extensión 3'} />
    <LinkModal target={'extension-alternada-1'} name={'Extensión 4'} />
    <LinkModal target={'dipping-e-bancos'} name={'Dipping'} />
    </div>{/* row */}
</div>{/* container-xl */}


<div className="container-xl"> {/* modal */}
    <Modal imgSrc={'brazos-en-cruz-polea'} id={'biceps-cruz'} folder={folder}/>
    <Modal imgSrc={'concentrados'} id={'concentrados'} folder={ folder }/>
    <Modal imgSrc={'curl-antebrazos-supino'} id={'curl-antebrazos-supino'} folder={ folder }/>
    <Modal imgSrc={'curl-antebrazos-prono'} id={'curl-antebrazos-prono'} folder={ folder }/>
    <Modal imgSrc={'curl-biceps-supino'} id={'curl-biceps-supino'} folder={ folder }/>
    <Modal imgSrc={'curl-con-barra-prono'} id={'curl-con-barra-prono'} folder={ folder }/>
    <Modal imgSrc={'curl-con-barra-supino'} id={'curl-con-barra-supino'} folder={ folder }/>
    <Modal imgSrc={'curl-con-polea'} id={'curl-con-polea'} folder={ folder }/>
    <Modal imgSrc={'curl-hammer'} id={'curl-hammer'} folder={ folder }/>
    <Modal imgSrc={'scott'} id={'scott'} folder={ folder }/>
    <Modal imgSrc={'scott2'} id={'scott2'} folder={ folder }/>
    <Modal imgSrc={'triceps-polea-alta'} id={'triceps-polea-alta'} folder={ folder }/>
    <Modal imgSrc={'triceps-polea-alta-2'} id={'triceps-polea-alta-2'} folder={ folder }/>
    <Modal imgSrc={'patadas-de-burro'} id={'patadas-de-burro'} folder={ folder }/>
    <Modal imgSrc={'frances-bco-plano-mancuerna'} id={'frances-bco-plano-mancuerna'} folder={ folder }/>
    <Modal imgSrc={'frances-banco-plano'} id={'frances-banco-plano'} folder={ folder }/>
    <Modal imgSrc={'extension-vertical'} id={'extension-vertical'} folder={ folder }/>
    <Modal imgSrc={'extension-sentado-1-mancuerna'} id={'extension-sentado-1-mancuerna'} folder={ folder }/>
    <Modal imgSrc={'extension-c-barra'} id={'extension-c-barra'} folder={ folder }/>
    <Modal imgSrc={'extension-alternada-1'} id={'extension-alternada-1'} folder={ folder }/>
    <Modal imgSrc={'dipping-e-bancos'} id={'dipping-e-bancos'} folder={ folder }/>
</div> {/* container-xl */}
</>
  )
}