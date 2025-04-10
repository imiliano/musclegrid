import Proptypes from 'prop-types';

export const Modal = ( {id, imgSrc }) => {
  return (

    <div id={ id } className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">
                <img src={`/${ imgSrc }.webp`} alt={ imgSrc } className="img-fluid" />
            </div>
            </div>
      </div>

    <small className="center-class hovr mt-3 mb-1">
    <a className="text-decoration-none text-light" download={ imgSrc } href={`./${ imgSrc }.webp`}> Download</a>
    </small>

    </div>

  )
}

Modal.propTypes = {
  id: Proptypes.string,
  imgSrc: Proptypes.string,
}

{/*
instalar las proptypes:
yarn add prop-types
*/}
