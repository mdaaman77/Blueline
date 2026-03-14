import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Users, Clock, Target, Hospital, Stethoscope, Store, HeartPulse } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Blueline HealthCare System",
  description: "Learn about Blueline Health - your trusted partner for surgical and medical equipment supply. Over a decade of experience serving hospitals, clinics, and healthcare professionals.",
}

const stats = [
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: Building2, value: "50+", label: "Healthcare Facilities Served" },
  { icon: Users, value: "50+", label: "Dedicated Team Members" },
  { icon: Target, value: "99%", label: "Customer Satisfaction" },
]

const industries = [
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Supplying comprehensive medical equipment to hospitals of all sizes.",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    description: "Providing essential supplies for private practices and specialty clinics.",
  },
  {
    icon: Store,
    title: "Medical Stores",
    description: "Partnering with medical retail outlets for distribution.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Professionals",
    description: "Supporting individual practitioners with quality equipment.",
  },
]
//{usp section}
const usps = [
  {
    id: "usp1",
    title: "Affordable care + latest tech",
    description: [
      "Affordable treatment costs",
      "Availability of the latest medical technologies",
      "Lesser waiting period for treatment",
      "Highly‑skilled doctors",
    ],
    // icon: Hospital,  // uncomment and set a real icon component
  },
  {
    id: "usp2",
    title: "Medical + vacation combo",
    description: [
      "Opportunity to combine medical treatment with a vacation",
      "Personalized travel packages and concierge services",
      "High‑quality accommodation and amenities",
      "Multilingual staff and translation services",
    ],
    // icon: Travel,
  },
  {
    id: "usp3",
    title: "Holistic multidisciplinary care",
    description: [
      "Multi‑disciplinary approach to healthcare",
      "Availability of alternative and complementary therapies",
      "Multilingual staff and translation services",
    ],
    // icon: Wellness,
  },
  {
    id: "usp4",
    title: "Personalized, safe treatment plans",
    description: [
      "Personalized treatment plans tailored to each patient’s unique needs",
      "Use of modern medical equipment",
      "Strict adherence to safety and hygiene standards",
      "Personalized packages tailored to the requirements of individual patients",
      "Accommodation for the patients",
    ],
    // icon: Custom,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            About Blueline HealthCare System Pvt. ltd.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
          One stop solution to all your hospital related needs
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Our Company</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Blueline Health has been a cornerstone in the medical supply industry for over a decade. 
                Founded with a vision to provide healthcare facilities with reliable access to quality 
                surgical and medical equipment, we have grown to become one of the most trusted names 
                in the industry.
              </p>
              <p>
                Our commitment to quality, reliability, and customer satisfaction has earned us the 
                trust of hundreds of healthcare facilities across the region. We understand the critical 
                nature of medical supplies and ensure that our products meet the highest standards of 
                quality and safety.
              </p>
              <p>
                From surgical instruments to hospital equipment, diagnostic devices to patient care 
                products, we offer a comprehensive range of medical supplies to meet all your healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border bg-card text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To empower healthcare providers with access to high-quality, reliable medical equipment 
              and supplies, enabling them to deliver exceptional patient care. We strive to be the 
              trusted partner that healthcare facilities can depend on for timely delivery, competitive 
              pricing, and uncompromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      {/* <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Blueline Health was founded in 2014 by a team of healthcare professionals who recognized 
                the challenges that medical facilities faced in sourcing quality medical equipment. 
                What started as a small operation serving local clinics has grown into a comprehensive 
                medical supply company serving hundreds of facilities.
              </p>
              <p>
                Our founders brought together their expertise in healthcare and supply chain management 
                to create a company that truly understands the needs of medical professionals. We built 
                our business on the principles of quality, reliability, and customer service.
              </p>
              <p>
                Today, Blueline Health continues to expand its product range and reach, always maintaining 
                the commitment to excellence that has been our hallmark since day one. We are proud to be 
                a trusted partner to healthcare facilities and look forward to continuing to serve the 
                medical community for many years to come.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* USPs */}
       <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Our USP
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our unique strengths that set us apart
          </p>
        </div>

        {/* cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <Card
              key={usp.id}
              className="border-border bg-card"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                {/* optional icon */}
               

                {/* title */}
                <h3 className="mb-2 font-semibold text-card-foreground">
                  {usp.title}
                </h3>

                {/* description bullets */}
                <ul className="text-sm text-muted-foreground list-disc space-y-1">
                  {usp.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>



      {/* Industries Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Industries We Serve</h2>
            <p className="mt-4 text-muted-foreground">
              Providing medical supplies across the healthcare spectrum
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry.title} className="border-border bg-card">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <industry.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Partner With Blueline HealthCare System
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Ready to experience the Blueline HealthCare System difference? Contact us today to discuss your medical supply needs.
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
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
