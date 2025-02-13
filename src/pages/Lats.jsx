import { LinkModal } from "../components/LinkModal";
import { Modal } from "../components/Modal";

export const Lats = () => {
  const folder = 'lats';

  return (
    <>
    <section className="text-center fw-bold fs-2 my-2">
      <h4> Lats + Lowback + Traps </h4>
      <hr />
    </section>{/* title */}

    <div className="container-xl mb-2">
    <div className="row">
    <LinkModal target={'dominadas-extrecho-supino'} name={'Dominadas t-ce'}/>
    <LinkModal target={'dominadas-toma-ancha'} name={'Dominadas t-ancha'}/>
    <LinkModal target={'encogimientos-barra'} name={'Encogimientos br'}/>
    <LinkModal target={'encogimientos-machine'} name={'Encogimientos'}/>
    <LinkModal target={'encogimientos-mc-c-rotacion'} name={'Encogimientos mc'}/>
    <LinkModal target={'hiperextensiones'} name={'Hiperextensiones'}/>
    <LinkModal target={'peso-muerto-barra-1'} name={'Peso muerto br 1'}/>
    <LinkModal target={'peso-muerto-barra-2'} name={'Peso muerto br 2'}/>
    <LinkModal target={'peso-muerto-pp-semirrigidas'} name={'Peso m pp semi'}/>
    <LinkModal target={'peso-muerto-sumo'} name={'Peso m sumo'}/>
    <LinkModal target={'polea-al-pecho'} name={'Polea al pecho'}/>
    <LinkModal target={'polea-al-pecho-estrecho'} name={ 'Polea t-estrecha'}/>
    <LinkModal target={'polea-trasnuca'} name={'Polea trasnuca'}/>
    <LinkModal target={'pullover-polea-alta'} name={'Pullover polea alta'}/>
    <LinkModal target={'remo-90-semiprono'} name={'Remo 90°'}/>
    <LinkModal target={'remo-al-menton-estrecho'} name={'Remo mentón t-ce'}/>
    <LinkModal target={'remo-barra-prono'} name={'Remo br prono'}/>
    <LinkModal target={'remo-horizontal-unilateral-mc'} name={ 'Remo hzntl uni'}/>
    <LinkModal target={'remo-t-con-apoyo'} name={'Remo T c apoyo'}/>
</div> {/* row */}
</div>{/* container-xl */}

<div className="container-xl"> {/* modal */}
    <Modal imgSrc={'01-dominadas-supino-estrecho'} id={'dominadas-extrecho-supino'} folder={ folder }/>
    <Modal imgSrc={'02-dominadas-toma-ancha'} id={'dominadas-toma-ancha'} folder={ folder }/>
    <Modal imgSrc={'03-encogimientos-barra'} id={'encogimientos-barra'} folder={ folder }/>
    <Modal imgSrc={'04-encogimientos-machine'} id={'encogimientos-machine'} folder={ folder }/>
    <Modal imgSrc={'05-encogimientos-mc-c-rotacion'} id={'encogimientos-mc-c-rotacion'} folder={ folder }/>
    <Modal imgSrc={'06-hiperextensiones'} id={'hiperextensiones'} folder={ folder }/>
    <Modal imgSrc={'07-peso-muerto-barra-1'} id={'peso-muerto-barra-1'} folder={ folder }/>
    <Modal imgSrc={'07bis-peso-muerto-barra-2'} id={'peso-muerto-barra-2'} folder={ folder }/>
    <Modal imgSrc={'08-peso-muerto-pp-semirrigidas'} id={'peso-muerto-pp-semirrigidas'} folder={ folder }/>
    <Modal imgSrc={'09-peso-muerto-sumo'} id={'peso-muerto-sumo'} folder={ folder }/>
    <Modal imgSrc={'10-polea-al-pecho'} id={'polea-al-pecho'} folder={ folder }/>
    <Modal imgSrc={'11-polea-al-pecho-estrecho'} id={'polea-al-pecho-estrecho'} folder={ folder }/>
    <Modal imgSrc={'12-polea-trasnuca'} id={'polea-trasnuca'} folder={ folder }/>
    <Modal imgSrc={'13-pullover-polea-alta'} id={'pullover-polea-alta'} folder={ folder }/>
    <Modal imgSrc={'14-remo-90-semiprono'} id={'remo-90-semiprono'} folder={ folder }/>
    <Modal imgSrc={'15-remo-al-menton-estrecho'} id={'remo-al-menton-estrecho'} folder={ folder }/>
    <Modal imgSrc={'16-remo-barra-prono'} id={'remo-barra-prono'} folder={ folder }/>
    <Modal imgSrc={'17-remo-horizontal-unilateral-mc'} id={'remo-horizontal-unilateral-mc'} folder={ folder }/>
    <Modal imgSrc={'18-remo-t-con-apoyo'} id={'remo-t-con-apoyo'} folder={ folder }/>
</div>{/* container-xl */}
</>
  )
}
