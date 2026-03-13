"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
}

//https://www.instagram.com/reel/DSAdKZTk6rE/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==
//https://www.instagram.com/reel/DPZjbErE_Cm/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==
//https://www.instagram.com/reel/DMQTfrtTary/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
//https://www.instagram.com/reel/DJ654DIz-hl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
//https://www.instagram.com/reel/DFVu2CNzXIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
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
]

export function VideoSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <div className="relative">
      {/* Desktop Navigation Buttons */}
      <div className="hidden md:block">
        {canScrollLeft && (
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background shadow-lg"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Scroll left</span>
          </Button>
        )}
        {canScrollRight && (
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background shadow-lg"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Scroll right</span>
          </Button>
        )}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollButtons}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:snap-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video) => (
          <Card
            key={video.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] overflow-hidden border-border bg-card snap-start"
          >
            <div className="relative aspect-video">
              <iframe
            //  src={`https://www.instagram.com/reel/${video.youtubeId}/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==`} 
               src={`https://www.instagram.com/reel/${video.youtubeId}/embed`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="mb-1 text-base font-semibold text-card-foreground line-clamp-1">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {video.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile scroll indicator */}
      <div className="mt-2 flex justify-center gap-1.5 md:hidden">
        {videos.map((_, index) => (
          <div
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30"
          />
        ))}
      </div>
    </div>
  )
}
