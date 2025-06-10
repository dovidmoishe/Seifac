import { Card } from "@/components/ui/card"

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-green-600 md:text-5xl">What we do</h2>
              <div className="mx-auto h-1 w-20 bg-green-400"></div>
            </div>

            <div className="space-y-6 text-black">
              <p>
                We manufacture our range in synchronies with latest designs, patterns and color combinations. All
                products are at par with international quality standards.
              </p>
              <p>
                In order to meet the ever changing need of our customers, we maintain a flexible, quality & cost
                effective portfolio.
              </p>
              <p>
                Our philosophy is one of constant improvement and emphasizing quality at the source mentality, resulting
                in enhancement to process, service and product quality keeping customer needs and satisfaction in mind.
              </p>
            </div>

            <Card className="border-green-200 bg-green-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-black">Our key features</h3>
              <ul className="grid gap-3 text-black md:grid-cols-2 list-disc list-inside">
                <li>Flexible, quality & cost effective product portfolio</li>
                <li>State of art manufacturing facility with precision machinery</li>
                <li>Alliance with best organizations for quality product supply</li>
                <li>Well equipped warehouse and packaging facility</li>
               
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
