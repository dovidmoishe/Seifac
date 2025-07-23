import Image from "next/image"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
const products = [
	{
		id: 1,
		name: "Virgin Hair",
		image:
			"https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Premium quality 100% virgin human hair with cuticles aligned from root to end, guaranteeing natural wave and fullness.",
	},
	{
		id: 2,
		name: "Lace Front Wigs",
		image:
			"https://images.unsplash.com/photo-1566726557393-64107b7857e7?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "High-quality lace front wigs for a natural hairline, made with our signature Temple-sourced hair.",
	},
	{
		id: 3,
		name: "Clip-in Extensions",
		image:
			"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Easy to apply clip-in hair extensions for instant length and volume, can be styled and treated like natural hair.",
	},
	{
		id: 4,
		name: "Closures & Frontals",
		image:
			"https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Premium closures and frontals for a flawless, natural-looking finish, reusable for up to a year.",
	},
	{
		id: 5,
		name: "Ponytails & Braiding Hair",
		image:
			"https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Quality ponytails and braiding hair for versatile styling options, perfect for all ethnicities and hair types.",
	},
	{
		id: 6,
		name: "Tape & Weave Extensions",
		image:
			"https://images.unsplash.com/photo-1595534005229-68f332bec85c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
		description: "Professional-grade tape-in and weave extensions, made with our light-weight, supple virgin hair for natural flow.",
	},
]

const Products = () => {
	return (
		<div id="products" className="container mx-auto px-4 py-8">
			<h1 className="font-bold text-3xl text-center mb-4 text-gray-800">
				Our Premium Hair Collections
			</h1>
			<div className="text-center max-w-3xl mx-auto mb-8">
				<p className="text-gray-600 mb-4">
					Seifac&apos;s hair extensions are unparalleled because the virgin hair used has cuticle layers
					facing the same direction from root to end. This ensures the extensions behave exactly like
					your own hair, guaranteeing natural wave, fullness, and luster.
				</p>
				<p className="text-gray-600">
					Our hair can be washed, blow dried, curled, flat ironed, colored and permed while 
					maintaining its original beauty for up to a year. Our exclusive collections cater to 
					people of all ages, ethnicities and hair types.
				</p>
			</div>
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
