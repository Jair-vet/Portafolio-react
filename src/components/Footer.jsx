
export const Footer = () => {
  return (
    <>
        {/* <!-- Footer --> */}
        <footer className="relative w-[100%] pt-[50px] pb-[30px] bg-grayColor text-center text-white">
        <a href="#inicio" className="arriba">
            <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="mb-[20px]">
            <a 
                className="footer-tag"
                href="https://www.facebook.com/carlos.aseves.9"
                target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a 
                className="footer-tag"
                href="https://github.com/Jair-vet" 
                target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>
            <a 
                className="footer-tag"
                href="https://wa.me/+523121555316"
                target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a 
                className="footer-tag"
                href="https://www.instagram.com/_jair0699/" 
                target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </div>
        
        </footer>
    </>
  )
}
