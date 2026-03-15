import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Truck,
  Award,
  Stethoscope,
  Hospital,
  HeartPulse,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { products } from "@/lib/products";
import { VideoSlider } from "@/components/video-slider";

const featuredProducts = products.slice(88, 94);

const highlights = [
  {
    icon: Shield,
    title: "Quality Medical Products",
    description:
      "We source only the highest quality surgical and medical equipment from certified manufacturers.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Consistent and timely delivery to ensure your facility never runs out of essential supplies.",
  },
  {
    icon: Award,
    title: "Trusted by Clinics & Hospitals",
    description:
      "Partnering with healthcare institutions across the region for over a decade.",
  },
];

const categories = [
  {
    icon: Stethoscope,
    title: "Surgical Instruments",
    description: "Precision tools for surgical procedures",
    href: "/products?category=surgical",
  },
  {
    icon: Hospital,
    title: "Hospital Equipment",
    description: "Essential equipment for healthcare facilities",
    href: "/products?category=hospital",
  },
  {
    icon: HeartPulse,
    title: "Patient Care",
    description: "Products focused on patient comfort and recovery",
    href: "/products?category=patient-care",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Blueline
          </h1>
          <h1 className="text-balance text-[0.85rem] tracking-tight text-primary-foreground md:text-xl lg:text-2xl sm:text-[0.85rem] ">
            HealthCare System Pvt. ltd.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/90 md:text-xl">
            One stop solution to all your hospital related needs
          </p>
          <p
            className="
mx-auto 
mt-4 
max-w-xl 
sm:max-w-xl 
md:max-w-2xl 
lg:max-w-3xl 
text-primary-foreground/80
"
          >
            {/* <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80"> */}
            Providing quality medical products to hospitals, clinics, and healthcare professionals with reliable service and competitive pricing.
           
          
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/products">View Catalog</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-green-500 text-primary-foreground hover:bg-green-400"
              asChild
            >
              <a
                href="https://wa.me/9153542010?text=Hello! I'm interested in your medical products."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Why Choose Blueline Health?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your trusted partner in healthcare supply solutions
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="border-border bg-card transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Product Categories
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive range of medical supplies for all your healthcare
              needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.title} href={category.href}>
                <Card className="h-full border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                      <category.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Featured Products */}
          <div className="mt-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
              Featured Products
            </h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="text-sm font-medium text-card-foreground line-clamp-2">
                      {product.name}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* modular ot section*/}
      {/* Modular OT Section */}
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">

    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Modular Operation Theatre Solutions
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
        ISO certified manufacturing and turnkey execution of modern
        modular operation theatres with advanced clinical design standards.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10 items-center">

      {/* LEFT TEXT */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Complete Planning & Engineering
        </h3>

        <p className="text-muted-foreground mb-4">
          We specialise in designing and constructing modular operation
          theatres with integrated medical gas pipeline systems,
          HVAC solutions and advanced infection control concepts.
        </p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• State-of-the-art architectural design</li>
          <li>• Strict safety compliance standards</li>
          <li>• Smooth functioning of all OT components</li>
          <li>• 3D visualisation and simulation support</li>
          <li>• Optimal material selection guidance</li>
        </ul>
      </div>

      {/* CENTER IMAGE */}
      <div className="relative w-full h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow-xl">
        <Image
          src="/images/products/modular-ot.jpg"
          alt="Modular Operation Theatre"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          International Standard Construction
        </h3>

        <p className="text-muted-foreground mb-4">
          Our turnkey OT solutions follow NABH, GMP and FDA guidelines.
          We deliver complete infrastructure including wall panels,
          laminar airflow systems, antibacterial flooring and integrated
          surgical equipment installations.
        </p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Prefabricated customised modules</li>
          <li>• Laminar airflow & sterile environment</li>
          <li>• Medical gas outlets integration</li>
          <li>• Antibacterial vinyl / epoxy flooring</li>
          <li>• Future upgrade flexibility</li>
        </ul>
      </div>

    </div>

    <div className="mt-12 text-center">
      <Button size="lg" asChild>
        <Link href="/contact">Request Modular OT Consultation</Link>
      </Button>
    </div>

  </div>
</section>

      {/* Our Works Video Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Watch our product demonstrations and service videos
            </p>
          </div>
          <VideoSlider />
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/works">View All Videos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-center md:p-16">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Partner With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Get in touch today to discuss your medical supply needs. We offer
              competitive pricing and reliable delivery.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
