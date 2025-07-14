"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // In a real application, these would be actual images
  const galleryImages = [
    "/media/1b5b042f-2c90-4522-a56d-e14a74134b33.jpeg",
    "/media/1cfd5f9c-0a32-4c27-8305-9473591bd624.jpeg",
    "/media/9fc04fb2-4254-4818-81c2-ff613895737d.jpeg",
    "/media/31dd079d-1e8e-4b7e-b0ed-da0e0a28cc89.jpeg",
    "/media/a5a957da-125e-47fe-b226-dde0cd57c233.jpeg",
    "/media/4933074e-840b-4031-baee-0a6f0d6ca0c2.jpeg",
    "/media/d16acbe4-0a46-4623-8257-274e2b67653f.jpeg",
    "/media/ae0ae72a-f824-4eed-947b-723de7df1b57.jpeg",
  ]

  const openImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeImage = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  return (
    <section className="section-padding bg-gray-50" id="gallery">
      <div className="container mx-auto">
        <h2 className="section-title">Our Gallery</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          A glimpse into our work and the communities we serve around the world.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
              onClick={() => openImage(index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">Click to expand</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-brand-gold text-brand-blue font-medium text-lg py-6 px-8">View More Photos</Button>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && closeImage()}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={closeImage}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            {selectedImageIndex !== null && galleryImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Image */}
            {selectedImageIndex !== null && (
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={galleryImages[selectedImageIndex] || "/placeholder.svg"}
                  alt={`Gallery image ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}

            {/* Image Counter */}
            {selectedImageIndex !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Gallery
