import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Blueline Health",
  description: "Get in touch with Blueline Health for all your medical supply needs. Reach us by phone, email, WhatsApp, or visit our office.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+916201410466",
    href: "tel:+916201410466",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+919153542010",
    href: "https://wa.me/919153542010",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: " Bluelinehealthcs@gmail.com",
    href: "mailto:Bluelinehealthcs@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Kalam Seeds Complex, Kaptanpara, NH-31, Near Kaptaan Pul, Purnia, Bihar, Purnea, India, 854301",
    href: null,
  },
]

const businessHours = [
  { day: "Monday - Saturday", hours: "8:00 AM - 9:00 PM" },
  // { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Get in touch with us for any inquiries or to place an order
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-lg font-semibold text-card-foreground">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noopener noreferrer" : undefined}
                              className="text-foreground hover:text-primary hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-card-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact CTA */}
              <Card className="border-0 bg-[#25D366] text-white">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="mx-auto mb-3 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-semibold">Need Quick Assistance?</h3>
                  <p className="mb-4 text-sm text-white/90">
                    Contact us on WhatsApp for faster response
                  </p>
                  <a
                    href="https://wa.me/9153542010?text=Hello! I have an inquiry about your medical products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-[#25D366] transition-colors hover:bg-white/90"
                  >
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="border-t border-border bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Find Us</h2>
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-card md:aspect-[21/9]">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81329.33706970043!2d87.3806883143062!3d25.728157912870532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9cfc846af6b%3A0x588641875ff421c1!2sKalam%20Seeds%20Store!5e0!3m2!1sen!2sin!4v1773424457802!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blueline Health Location"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
