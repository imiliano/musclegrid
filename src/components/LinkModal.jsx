import Proptypes from 'prop-types';

export const LinkModal = ( { target, name } ) => {
  return (

        <div data-bs-target={`#${ target }`} data-bs-toggle="modal" className="col-md-4 col-sm-6 col-lg-3 g-2 text-center hovr text-light">
                    <p className='text-uppercase'> { name } </p>
        </div>
  )
}


LinkModal.propTypes = {
  name: Proptypes.string,
  target: Proptypes.string,
}