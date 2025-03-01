import { LinkModal } from "../components/LinkModal";
import { Modal } from "../components/Modal";

export const Pec = () => {

  return (
    <>
  <section className="text-center fw-bold fs-2 my-3">
    <h4> Pecs </h4>
    <hr />
  </section>

<div className="container-xl">
<div className="row mb-3">
    <LinkModal target={'aperturas-mc-45'} name={'Aperturas 45'}/>
    <LinkModal target={'aperturas-plano-mc'} name={'Aperturas mc'}/>
    <LinkModal target={'bench-press-toma-cerrada'} name={'Press plano t-ce'}/>
    <LinkModal target={'cruces-pie-poleas'} name={'Cruces poleas'}/>
    <LinkModal target={'dips-paralelas'} name={'Dips'}/>
    <LinkModal target={'pec-fly'} name={'Pec-fly'}/>
    <LinkModal target={'press-45'} name={'Press 45°'}/>
    <LinkModal target={'press-declinado'} name={'Press decli'}/>
    <LinkModal target={'press-mc-45'} name={'Press mc 45°'}/>
    <LinkModal target={'press-plano-bench-press-1'} name={'Press plano 1'}/>
    <LinkModal target={'press-plano-bench-press-2'} name={'Press plano 2'}/>
    <LinkModal target={'press-plano-mc'} name={'Press plano mc'}/>
    <LinkModal target={'pull-over-plano-br'} name={'Pull-over br'}/>
    <LinkModal target={'pull-over-plano-mc'} name={'Pull-over mc'}/>
    <LinkModal target={'push-ups'} name={'Push ups'}/>
  </div> {/* row */}
</div> {/* container-xl */}


<div className="container-xl">{/* modal */}
  <Modal id={'aperturas-mc-45'} imgSrc={'01-aperturas-mc-45'}/>
  <Modal id={'aperturas-plano-mc'} imgSrc={'02-aperturas-plano-mc'}/>
  <Modal id={'bench-press-toma-cerrada'} imgSrc={'03-bench-press-toma-cerrada'}/>
  <Modal id={'cruces-pie-poleas'} imgSrc={'04-cruces-pie-poleas'}/>
  <Modal id={'dips-paralelas'} imgSrc={'05-dips-paralelas'}/>
  <Modal id={'pec-fly'} imgSrc={'06-pec-fly'}/>
  <Modal id={'press-45'} imgSrc={'07-press-45'}/>
  <Modal id={'press-declinado'} imgSrc={'08-press-declinado'}/>
  <Modal id={'press-mc-45'} imgSrc={'09-press-mc-45'}/>
  <Modal id={'press-plano-bench-press-1'} imgSrc={'10-press-plano-bench-press-1'}/>
  <Modal id={'press-plano-bench-press-2'} imgSrc={'11-press-plano-bench-press-2'}/>
  <Modal id={'press-plano-mc'} imgSrc={'12-press-plano-mc'}/>
  <Modal id={'pull-over-plano-br'} imgSrc={'13-pull-over-plano-br'}/>
  <Modal id={'pull-over-plano-mc'} imgSrc={'14-pull-over-plano-mc'}/>
  <Modal id={'push-ups'} imgSrc={'15-push-ups'}/>

</div> {/* container-xl */}
    </>
  )
}
