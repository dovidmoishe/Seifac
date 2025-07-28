import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";

const services = [
	{
		id: 1,
		title: "Agribusiness & Farm ERP",
		description: "Precision agriculture, digital farm tools, and input financing for modern farms.",
		icon: "🌾",
		subServices: [
			"Farm ERP",
			"Extension & Advisory Services",
			"Farm Management",
		],
		image: "https://images.unsplash.com/photo-1625246333195-78d73c5207fd?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 2,
		title: "Medical Devices & Disposables",
		description: "Certified medical equipment, diagnostics, and lab supplies for institutions.",
		icon: "🏥",
		image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 3,
		title: "Computers, Smartphones & Peripherals",
		description: "Tech devices for offices, learning, and retail—from laptops to networking tools.",
		icon: "💻",
		image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 4,
		title: "Wine Importation & Lifestyle",
		description: "Premium wine imports for events, collectors, and hospitality businesses.",
		icon: "🍷",
		image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
		subServices: [
			"Red, White, and Rosé Wines",
			"Sparkling & Sweet Wines",
			"Wholesale & Retail Supply",
			"Event Curation & Education",
		],
	},
	{
		id: 5,
		title: "Bathroom Tiles & Fittings",
		description: "Imported sanitary wares, floor and wall tiles designed for elegance.",
		icon: "🚿",
		image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 6,
		title: "PP & PS Disposable Products",
		description: "FDA-certified disposable cups, cutlery, containers, and lab ware.",
		icon: "♻️",
		image: "https://images.unsplash.com/photo-1576009603568-78f904f2b253?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 7,
		title: "Hair Extensions (Slay Hair by Seifac)",
		description: "Luxury virgin hair products sourced from India and Southeast Asia.",
		icon: "💇‍♀️",
		image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=800&auto=format&fit=crop",
		subServices: [
			"Virgin Hair",
			"Private Label Extensions",
			"Clip-in Extensions",
			"Closures & Frontals",
			"Lace Front Wigs",
			"Ponytails",
			"Braiding Hair",
			"Tape Extensions",
			"Wavy Hair",
			"Weaves",
			"Human Hair Wigs",
		],
	},
];

export default function WhatWeDoSection() {
	return (
		<section id="services" className="py-20 bg-gradient-to-b from-white to-green-50">
			<div className="container mx-auto px-4 md:px-6">
				<motion.div
					className="max-w-4xl mx-auto text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our{" "}
						<span className="text-green-600" style={{ fontVariantLigatures: "none" }}>
							Divisions
						</span>
					</h2>
					<div className="mx-auto h-1 w-24 bg-gradient-to-r from-green-300 to-green-600 rounded-full mb-6"></div>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Seifac delivers solutions across agriculture, healthcare, technology, and lifestyle—
						driving innovation and empowering people and businesses nationwide.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="h-full overflow-hidden group border-none shadow-lg hover:shadow-xl transition-all duration-300">
								<div className="relative h-48 overflow-hidden">
									<Image
										src={service.image}
										alt={service.title}
										width={400}
										height={200}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<div className="absolute bottom-4 left-4 text-white">
										<span className="text-3xl mr-3">{service.icon}</span>
										<h3 className="text-xl font-semibold inline-block">
											{service.title}
										</h3>
									</div>
								</div>

								<div className="p-5">
									<p className="text-gray-600 mb-4">{service.description}</p>

									{service.subServices && (
										<div>
											<h4 className="text-sm font-medium text-green-600 mb-2 uppercase tracking-wider">
												Offerings
											</h4>
											<ul className="grid grid-cols-2 gap-x-2 gap-y-1">
												{service.subServices.map((subService, idx) => (
													<li
														key={idx}
														className="text-gray-700 text-sm flex items-center"
													>
														<span className="text-green-500 mr-2">•</span>
														{subService}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<Card className="border-none bg-gradient-to-r from-green-50 to-green-100 p-8 shadow-lg">
						<div className="flex flex-col md:flex-row gap-6 items-center">
							<div className="md:w-1/4 flex justify-center">
								<span className="text-6xl">✅</span>
							</div>
							<div className="md:w-3/4">
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">
									Why Choose Seifac?
								</h3>
								<p className="text-gray-700 mb-2">
									✓ Multisector expertise across agriculture, tech, health, and lifestyle.
								</p>
								<p className="text-gray-700 mb-2">
									✓ Trusted international sourcing & transparent pricing.
								</p>
								<p className="text-gray-700 mb-2">
									✓ Nationwide delivery and after-sales support.
								</p>
								<p className="text-gray-700">
									✓ Commitment to quality, innovation, and long-term partnerships.
								</p>
							</div>
						</div>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
