import { LinkModal } from "../components/LinkModal";
import { Modal } from "../components/Modal";

export const Arms = () => {

  return (
    <>
    <section className="text-center fw-bold fs-2 my-3">
        <h4> Biceps + Triceps </h4>
        <hr />
    </section>{/* title */}

    <div className="container-xl">
    <div className="row m-3">
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
    <Modal imgSrc={'brazos-en-cruz-polea'} id={'biceps-cruz'}/>
    <Modal imgSrc={'concentrados'} id={'concentrados'}/>
    <Modal imgSrc={'curl-antebrazos-supino'} id={'curl-antebrazos-supino'}/>
    <Modal imgSrc={'curl-antebrazos-prono'} id={'curl-antebrazos-prono'}/>
    <Modal imgSrc={'curl-biceps-supino'} id={'curl-biceps-supino'}/>
    <Modal imgSrc={'curl-con-barra-prono'} id={'curl-con-barra-prono'}/>
    <Modal imgSrc={'curl-con-barra-supino'} id={'curl-con-barra-supino'}/>
    <Modal imgSrc={'curl-con-polea'} id={'curl-con-polea'}/>
    <Modal imgSrc={'curl-hammer'} id={'curl-hammer'}/>
    <Modal imgSrc={'scott'} id={'scott'}/>
    <Modal imgSrc={'scott2'} id={'scott2'}/>
    <Modal imgSrc={'triceps-polea-alta'} id={'triceps-polea-alta'}/>
    <Modal imgSrc={'triceps-polea-alta-2'} id={'triceps-polea-alta-2'}/>
    <Modal imgSrc={'patadas-de-burro'} id={'patadas-de-burro'}/>
    <Modal imgSrc={'frances-bco-plano-mancuerna'} id={'frances-bco-plano-mancuerna'}/>
    <Modal imgSrc={'frances-banco-plano'} id={'frances-banco-plano'}/>
    <Modal imgSrc={'extension-vertical'} id={'extension-vertical'}/>
    <Modal imgSrc={'extension-sentado-1-mancuerna'} id={'extension-sentado-1-mancuerna'}/>
    <Modal imgSrc={'extension-c-barra'} id={'extension-c-barra'}/>
    <Modal imgSrc={'extension-alternada-1'} id={'extension-alternada-1'}/>
    <Modal imgSrc={'dipping-e-bancos'} id={'dipping-e-bancos'}/>
</div> {/* container-xl */}
</>
  )
}