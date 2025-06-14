import { Card } from "@/components/ui/card"

const services = [
	{
		id: 1,
		title: "Agriculture",
		subServices: [
			"Farm ERP",
			"Extension & Advisory Services",
			"Farm Management",
			"Produce Sales",
		],
	},
	{
		id: 2,
		title: "Wines Supply",
		description: "Premium wine supply services",
	},
	{
		id: 3,
		title: "Medical Devices Supply",
		description: "Quality medical equipment and devices",
	},
	{
		id: 4,
		title: "Computers & Smartphones",
		description: "Latest technology products",
	},
	{
		id: 5,
		title: "Bathroom Fittings & Tiles",
		description: "High-quality bathroom solutions",
	},
	{
		id: 6,
		title: "PP & PS Disposables Products",
		description: "Eco-friendly disposable solutions",
	},
	{
		id: 7,
		title: "Hair Extensions",
		description:
			"Premium Quality Virgin Hair Extensions from India and South East Asia",
	},
]

export default function WhatWeDoSection() {
	return (
		<section className="bg-white py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-4xl text-center">
					<div className="space-y-8">
						<div>
							<h2 className="mb-4 text-4xl font-bold tracking-tight text-green-600 md:text-5xl">
								Our Services
							</h2>
							<div className="mx-auto h-1 w-20 bg-green-400"></div>
						</div>

						<div className="space-y-6 text-black">
							<p>
								We manufacture our range in synchronies with latest designs,
								patterns and color combinations. All products are at par with
								international quality standards.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{services.map((service) => (
								<Card
									key={service.id}
									className="border-green-200 bg-green-50 p-6"
								>
									<h3 className="mb-4 text-xl font-semibold text-black">
										{service.title}
									</h3>
									{service.subServices ? (
										<ul className="list-disc list-inside space-y-2">
											{service.subServices.map((subService, index) => (
												<li
													key={index}
													className="text-gray-700"
												>
													{subService}
												</li>
											))}
										</ul>
									) : (
										<p className="text-gray-700">
											{service.description}
										</p>
									)}
								</Card>
							))}
						</div>

						<Card className="border-green-200 bg-green-50 p-6 mt-8">
							<h3 className="mb-4 text-xl font-semibold text-black">
								Our Quality Assurance
							</h3>
							<p className="text-gray-700">
								We own and operate our own overseas factories and domestic
								operations to ensure total control of the process from start to
								finish. Our commitment to quality and customer satisfaction sets
								the industry standard.
							</p>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
