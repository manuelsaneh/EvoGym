import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
          &#169; Evogym All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor</p>
          <p className="my-5">enim ad minim veniam</p>
          <p>consectetur adipiscin</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">nostrud exercitation ullamco laboris</p>
          <p className="my-5">aliquip ex ea commod</p>
          <p>(333)432-5489</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer