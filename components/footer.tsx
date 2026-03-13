import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <div className="h-10 w-10 overflow-hidden bg-foreground">
            <img
              src="/images/logo/company-latest-logo.png"
              alt="Company Logo"
              className="w-full h-full object-contain  "
            />
          </div>
              </div>
               <div className="flex flex-col leading-tight ">
            <span className="text-xl font-bold">Blueline</span>
            <span className="text-sm font-medium">HealthCare System</span>
          </div>
            </div>
            <p className="text-sm text-background/70">
              Trusted supplier of quality surgical and medical equipment for hospitals, clinics, and healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-background/70 transition-colors hover:text-background">
                Home
              </Link>
              <Link href="/products" className="text-sm text-background/70 transition-colors hover:text-background">
                Products
              </Link>
              <Link href="/works" className="text-sm text-background/70 transition-colors hover:text-background">
                Our Works
              </Link>
              <Link href="/about" className="text-sm text-background/70 transition-colors hover:text-background">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-background/70 transition-colors hover:text-background">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Categories</h3>
            <nav className="flex flex-col gap-2">
             

              <Link href="/products?category=hospital" className="text-sm text-background/70 transition-colors hover:text-background">
                Hospital Equipment
              </Link>
               <Link href="/products?category=bed-strecher" className="text-sm text-background/70 transition-colors hover:text-background">
                Bed & Strecher
              </Link>
               <Link href="/products?category=ot-light" className="text-sm text-background/70 transition-colors hover:text-background">
                O.T Light
              </Link>
               <Link href="/products?category=surgical" className="text-sm text-background/70 transition-colors hover:text-background">
                Surgical Instruments
              </Link>
              <Link href="/products?category=disposable" className="text-sm text-background/70 transition-colors hover:text-background">
                Disposable Supplies
              </Link>
              <Link href="/products?category=diagnostic" className="text-sm text-background/70 transition-colors hover:text-background">
                Diagnostic Equipment
              </Link>
              <Link href="/products?category=patient-care" className="text-sm text-background/70 transition-colors hover:text-background">
                Patient Care Products
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+916201410466" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background">
                <Phone className="h-4 w-4" />
                +91 6201410466
              </a>
              <a href="mailto:Bluelinehealthcs@gmail.com" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background">
                <Mail className="h-4 w-4" />
                Bluelinehealthcs@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Kalam Seeds Complex, Kaptanpara, NH-31, Near Kaptaan Pul, Purnia, Bihar, Purnea, India, 854301</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/70">
            &copy; {new Date().getFullYear()} Blueline Health. All rights reserved.
          </p>
          <p className="text-center text-[0.75rem] text-background/70">Developed By - Aaman Khan</p>
        
          
        </div>
      </div>
    </footer>
  )
}
