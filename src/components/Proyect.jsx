
export const Proyect = ({ enlace, imagen }) => {
  return (
    <>
        <a className="a-tag-container" href={ enlace } target="_blank">
            <img
            className="img-tag-container"
            src={ imagen } 
            alt="" 
            />
        </a>
    </>
  )
}
