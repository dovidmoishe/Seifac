import Image from "next/image"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
const products = [
	{
		id: 1,
		name: "Virgin Hair",
		image:
			"https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Premium quality 100% virgin human hair, unprocessed and natural",
	},
	{
		id: 2,
		name: "Lace Front Wigs",
		image:
			"https://images.unsplash.com/photo-1566726557393-64107b7857e7?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "High-quality lace front wigs for a natural hairline and comfortable fit",
	},
	{
		id: 3,
		name: "Clip-in Extensions",
		image:
			"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Easy to apply clip-in hair extensions for instant length and volume",
	},
	{
		id: 4,
		name: "Closures & Frontals",
		image:
			"https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Premium closures and frontals for a flawless, natural-looking finish",
	},
	{
		id: 5,
		name: "Braiding Hair",
		image:
			"https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Quality synthetic braiding hair for all your styling needs",
	},
	{
		id: 6,
		name: "Tape Extensions",
		image:
			"https://images.unsplash.com/photo-1595534005229-68f332bec85c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Professional-grade tape-in hair extensions for seamless integration",
	},
]

const Products = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="font-bold text-3xl text-center mb-8 text-gray-800">
				Our Products
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product, index) => (
					<Card
						key={product.id}
						className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
						style={{
							animationDelay: `${index * 150}ms`,
						}}
					>
						<div className="relative overflow-hidden rounded-t-lg">
							<Image
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								width={400}
								height={300}
								className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
						</div>
						<CardHeader className="pb-2">
							<CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
								{product.name}
							</CardTitle>
						</CardHeader>
						<CardContent className="pt-0">
							<p className="text-sm text-gray-600 leading-relaxed">
								{product.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Products
