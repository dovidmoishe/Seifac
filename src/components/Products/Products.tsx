import Image from "next/image"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"

type Props = {}

const products = [
  {
    id: 1,
    name: "Cotton Yarns",
    image:
      "https://images.unsplash.com/photo-1601758123927-8f0c1b2d3e4f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Premium quality cotton yarns for all your crafting needs",
  },
  {
    id: 2,
    name: "Wool Yarns",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Soft and warm wool yarns perfect for winter projects",
  },
  {
    id: 3,
    name: "Silk Yarns",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Luxurious silk yarns with beautiful sheen and drape",
  },
]

const Products = (props: Props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl text-center mb-8 text-gray-800">Our Products</h1>
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
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Products
