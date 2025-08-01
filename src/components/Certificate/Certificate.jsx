import { FaDownload, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Iti from '../../assets/ITI.jpg';
import Route from '../../assets/Route.png';
import Cisco from '../../assets/cisco.jpg';
import InnovEgypt from '../../assets/INNOVEGYPT_page-0001.jpg';
import Iitidata from '../../assets/_page-0001.jpg';
import Ibm from '../../assets/IBM_page-0001.jpg';
import Udemi from '../../assets/Udemy_page-0001.jpg'
import route2 from '../../assets/Route.pdf';

const certificates = [
  {
    id: 1,
    title: "Front-end Diploma in Route Academy With React FrameWork",
    image: Route,
    alt: "Front-end Diploma in Route Academy With React FrameWork",
    downloadUrl: route2,
    date: "OCT 2024"
  },
  {
    id: 2,
    title: "Back-end Diploma in ITI with .NET",
    image: Iti,
    downloadUrl: "/certificates/js-certificate.pdf",
    date: "JUL 2024"
  },
  {
    id: 3,
    title: "JavaScript Essintial1 in Cisco  Academy",
    image:Cisco ,
    downloadUrl: "/certificates/web-dev-certificate.pdf",
    date: "Sep 2023"
  },
  {
    id: 4,
    title: "Digital Marketing in InnovEgypt",
    image: InnovEgypt,
    downloadUrl: "/certificates/design-certificate.pdf",
    date: "AUG 2022 "
  },
   {
    id: 5,
    title: "Web Development in EFE With IBM",
    image: Iitidata,
    downloadUrl: "/certificates/design-certificate.pdf",
    date: " 2022"
  },
  {
    id: 6,
    title: "Web Devolopment in EFE With IBM",
    image: Ibm,
    downloadUrl: "/certificates/design-certificate.pdf",
    date: "أغسطس 2023"
  },
   {
    id: 7,
    title: "JavaScript in Udemi",
    image: Udemi,
    downloadUrl: "/certificates/design-certificate.pdf",
    date: "أغسطس 2023"
  }
];

export default function Certificates() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageClick = (cert) => {
    setZoomedImage(cert.image);
    setIsZoomed(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when zoomed
  };

  const closeZoom = () => {
    setIsZoomed(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          The Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleImageClick(cert)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 hover:opacity-90 transition-opacity"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-gray-200 text-sm">{cert.date}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(cert.downloadUrl, cert.title);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 mt-2 w-fit"
                    aria-label={`Download ${cert.title}`}
                  >
                    <FaDownload />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <button 
            className="absolute top-4 right-4 text-white text-2xl z-50"
            onClick={closeZoom}
          >
            <FaTimes />
          </button>
          <div className="max-w-4xl w-full max-h-screen h-full flex items-center justify-center">
            <img
              src={zoomedImage}
              alt="Zoomed Certificate"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}