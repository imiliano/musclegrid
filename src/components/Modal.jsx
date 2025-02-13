
export const Modal = ( {id, imgSrc, folder }) => {
  return (

    <div id={ id } className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">
                <img src={`./src/assets/${ folder }/${imgSrc}.webp`} alt={ imgSrc } className="img-fluid" />
            </div>
            </div>
        </div>

    <small className="center-class hovr mt-3 mb-1">
    <a className="text-decoration-none text-light" download={ folder } href={`./src/assets/${ folder }/${imgSrc}.webp`}> Download</a>
    </small>

    </div>

  )
}
