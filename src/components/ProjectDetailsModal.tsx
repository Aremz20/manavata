
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    additionalImages?: string[];
    videoUrl?: string;
  };
}

const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-left text-2xl font-bold">{project.title}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0" 
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">About this Program</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          {project.videoUrl && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Program Video</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={project.videoUrl}
                  title={`${project.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.additionalImages.map((img, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`${project.title} image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-center">
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-semibold px-8">
              Support This Project
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
