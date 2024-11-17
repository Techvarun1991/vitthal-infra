import { BuildingOfficeIcon, WrenchScrewdriverIcon, CheckBadgeIcon } from '@heroicons/react/20/solid';
import { BuildingOffice2Icon, PaintBrushIcon, TruckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Road Contracts',
    description:
      'We specialize in constructing durable and reliable roads, including highways and footpath road contracts, ensuring quality and timely delivery.',
    icon: TruckIcon,
  },
  {
    name: 'Plumbing and Painting',
    description:
      'Our combined plumbing and painting services cater to all your residential and commercial needs, ensuring functionality and aesthetic appeal with expert finishes.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Building Construction',
    description:
      'From foundation to finish, we offer comprehensive building construction services, including residential, commercial, and industrial projects.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Renovation and Repairing',
    description:
      'Whether it’s a house or a commercial building, we provide comprehensive renovation and repair services to breathe new life into your space.',
    icon: PaintBrushIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-indigo-600">Why Choose Us</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Building Dreams with Excellence
              </p>
              <p className="mt-6 text-lg text-gray-600">
                At Vithal Infra, we are committed to delivering top-notch construction solutions, blending innovation and expertise to turn your vision into reality.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Construction project"
            src="https://images.unsplash.com/photo-1616179283726-e96f7aa16a56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
