"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import type { Product } from "@/lib/products"
import { categories } from "@/lib/products"

const WHATSAPP_NUMBER = "1234567890" // Replace with actual WhatsApp number

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryName = categories.find((c) => c.id === product.category)?.name || product.category

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(`I am interested in ${product.name}`)
    window.open(`https://wa.me/${9153542010}?text=${message}`,  "_blank")
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
      {/* <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
        />
      </div> */}
      <div className="flex h-[220px] w-full items-center justify-center bg-muted">
  <Image
    src={product.image}
    alt={product.name}
    width={600}
    height={600}
    className="h-auto max-h-[200px] w-auto object-contain"
  />
</div>
      <CardContent className="flex flex-1 flex-col p-4">
        <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {categoryName}
        </span>
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">{product.name}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleWhatsAppEnquiry} className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a]">
          <MessageCircle className="h-4 w-4" />
          Enquire on WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}
