import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Works | Blueline Health",
  description: "Watch product demonstrations and videos showcasing our medical equipment and surgical instruments in action.",
}

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "OT Setup ",
    description: "A comprehensive overview of our premium service of OT Setup.",
    youtubeId: "DSAdKZTk6rE",
  },
  {
    id: "2",
    title: "Modular Operation Theatre (MOT)",
    description: "Demonstration of our Modular Operation Theatre (MOT) solution.",
    youtubeId: "DJ654DIz-hl",
  },
  {
    id: "3",
    title: "Advanced Modular OT & ICU HVAC Systems",
    description: "NABH, WHO-GMP, USFDA Certified Setup for Modular OT & ICU HVAC Systems.",
    youtubeId: "DMQTfrtTary",
  },
  {
    id: "4", 
    title: "OT Equipment Installation",
    description: "Step-by-step guide to installing our OT equipment.",
    youtubeId: "DPZjbErE_Cm",
  },
  {
    id: "5",
    title: " ICU Setup & NICU Setup",
    description: "Showcasing our ICU and NICU setup services for critical care environments.",
    youtubeId: "DFVu2CNzXIV",
  },
  {
    id: "6",
    title: "New Machine Installment",
    description: "A comprehensive overview of our premium service of new machine installment.",
    youtubeId: "DBUR5V5g5Pb",
  },
]
export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Our Works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Watch our product demonstrations and Service videos
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden border-border bg-card">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.instagram.com/reel/${video.youtubeId}/embed`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Want to See Our Products in Action?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Contact us for a personalized product demonstration at your facility.
          </p>
          <a
            href="https://wa.me/9153542010?text=Hello! I'm interested in your medical products."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#20bd5a]"
          >
            Request a Demo on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
