
export const LinkModal = ( { target, name } ) => {
  return (

        <div data-bs-target={`#${target}`} data-bs-toggle="modal" className="col-lg-2 col-md-4 col-sm-6 mt-3 hovr">
            <div className="card">
                <div className="card-body">
                <div className="card-title text-center">
                    <small> { name } </small>
                </div>
                </div>
            </div>
        </div>
  )
}
