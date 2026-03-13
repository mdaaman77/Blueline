"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductFilter } from "@/components/product-filter"
import { products } from "@/lib/products"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Product Catalog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Browse our comprehensive range of surgical and medical equipment
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8">
            <ProductFilter
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onSearchChange={setSearchQuery}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Count */}
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="mt-4 text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary to-accent py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Product Catalog
            </h1>
          </div>
        </section>
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-muted rounded w-full max-w-md" />
            <div className="h-8 bg-muted rounded w-full max-w-2xl" />
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
