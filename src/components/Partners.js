import picture1 from './partners/Picture1-removebg-preview.png'
import picture2 from './partners/Picture2-removebg-preview.png'
import picture3 from './partners/Picture3.jpg'
import picture4 from './partners/Picture4-removebg-preview.png'
import picture5 from './partners/Picture5-removebg-preview.png'



export default function Partners() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by the Pune’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src={picture1}
              // src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              width={220}
              height={80}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src={picture2}
              // src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              width={220}
              height={80}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src={picture3}
              // src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              width={220}
              height={80}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src={picture4}
              // src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={220}
              height={80}
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src={picture5}
              // src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              width={220}
              height={80}
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }
  