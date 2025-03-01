import { LinkModal } from "../components/LinkModal";
import { Modal } from "../components/Modal";

export const Delts = () => {

  return (
    <>
    <section className="text-center fw-bold fs-2 my-3">
        <h4> Delts </h4>
        <hr />
    </section>

    <div className="container-xl">
    <div className="row mb-3">
    <LinkModal target={'pajaro-en-maquina'} name={'Pájaro máquina'} />
    <LinkModal target={'elevacion-frontal-barra'} name={'Elevación fr br'} />
    <LinkModal target={'elevacion-frontal-mancuerna'} name={'Elevación fr mc'} />
    <LinkModal target={'pajaro-polea-baja'} name={'Pájaro polea baja'} />
    <LinkModal target={'pajaro'} name={'Pájaro'} />
    <LinkModal target={'press-arnold'} name={'Press Arnold'} />
    <LinkModal target={'press-frontal'} name={'Press Frontal'} />
    <LinkModal target={'press-mancuernas'} name={'Press con mc'} />
    <LinkModal target={'press-trasnuca'} name={'Press trasnuca'} />
    <LinkModal target={'rowing-vertical'} name={'Rowing Vertical'} />
    <LinkModal target={'v-frontales-alternados-polea'} name={'V fr alt polea baja'} />
    <LinkModal target={'v-laterales-alternados-polea'} name={'V lat alt polea baja'} />
    <LinkModal target={'v-laterales-maquina'} name={'V lat máquina'} />
    <LinkModal target={'v-frontales-alternados'} name={'V fr alt'} />
    <LinkModal target={'v-laterales-45'} name={'V lat 45°'} />
    <LinkModal target={'v-laterales'} name={'V laterales'} />
    </div>{/* row */}
</div>{/* container-xl */}


<div className="container-xl"> {/* modal */}
<Modal id={'pajaro-en-maquina'} imgSrc={'delts-post-machine'}/>
<Modal id={'elevacion-frontal-barra'} imgSrc={'elev-front-br'}/>
<Modal id={'elevacion-frontal-mancuerna'} imgSrc={'elev-front-mc'}/>
<Modal id={'pajaro-polea-baja'} imgSrc={'pajaro-poleabaja'}/>
<Modal id={'pajaro'} imgSrc={'pajaro'}/>
<Modal id={'press-arnold'} imgSrc={'press-arnold'}/>
<Modal id={'press-frontal'} imgSrc={'press-frontal'}/>
<Modal id={'press-mancuernas'} imgSrc={'press-mc'}/>
<Modal id={'press-trasnuca'} imgSrc={'press-trasnuca'}/>
<Modal id={'rowing-vertical'} imgSrc={'rowing-vertical'}/>
<Modal id={'v-frontales-alternados-polea'} imgSrc={'v-front-alt-poleabaja'}/>
<Modal id={'v-laterales-alternados-polea'} imgSrc={'v-lat-alt-poleabaja'}/>
<Modal id={'v-laterales-maquina'} imgSrc={'v-lat-machine'}/>
<Modal id={'v-frontales-alternados'} imgSrc={'vuelos-front-alt'}/>
<Modal id={'v-laterales-45'} imgSrc={'vuelos-lat-45'}/>
<Modal id={'v-laterales'} imgSrc={'vuelos-lat'}/>
</div> {/* container-xl */}
</>
  )
}
