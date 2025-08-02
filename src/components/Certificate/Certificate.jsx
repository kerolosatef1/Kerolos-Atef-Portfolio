import { FaDownload, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Iti from '../../assets/ITI.jpg';
import Route from '../../assets/Route.png';
import Cisco from '../../assets/cisco.jpg';
import InnovEgypt from '../../assets/INNOVEGYPT_page-0001.jpg';
import Iitidata from '../../assets/_page-0001.jpg';
import Ibm from '../../assets/IBM_page-0001.jpg';
import Udemi from '../../assets/Udemy_page-0001.jpg';
import CiscoPdf from '../../assets/CISCO.pdf';

const certificates = [
  {
    id: 1,
    title: "Front-end Diploma in Route Academy With React FrameWork",
    image: Route,
    alt: "Front-end Diploma in Route Academy With React FrameWork",
    date: "OCT 2024"
  },
  {
    id: 2,
    title: "Back-end Diploma in ITI with .NET",
    image: Iti,
    date: "JUL 2024"
  },
  {
    id: 3,
    title: "JavaScript Essintial1 in Cisco Academy",
    image: Cisco,
    date: "Sep 2023"
  },
  {
    id: 4,
    title: "Digital Marketing in InnovEgypt",
    image: InnovEgypt,
    date: "AUG 2022"
  },
  {
    id: 5,
    title: "Web Development in EFE With IBM",
    image: Iitidata,
    date: "2022"
  },
  {
    id: 6,
    title: "Web Development in EFE With IBM",
    image: Ibm,
    date: "AUG 2023"
  },
  {
    id: 7,
    title: "JavaScript in Udemy",
    image: Udemi,
    date: "AUG 2023"
  }
];

export default function Certificates() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState({});

  const handleDownload = (url, title, id) => {
    setDownloadStatus(prev => ({ ...prev, [id]: 'downloading' }));
    
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/[/\\?%*:|"<>]/g, '-')}.pdf`; // إزالة أحرف غير مسموحة في أسماء الملفات
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus(prev => ({ ...prev, [id]: 'success' }));
      
      // إعادة تعيين حالة التنزيل بعد 3 ثواني
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [id]: '' }));
      }, 3000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus(prev => ({ ...prev, [id]: 'failed' }));
      
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [id]: '' }));
      }, 3000);
    }
  };

  const handleImageClick = (cert) => {
    setZoomedImage(cert.image);
    setIsZoomed(true);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          The Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleImageClick(cert)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 hover:opacity-90 transition-opacity"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-gray-200 text-sm">{cert.date}</p>
              
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
            className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-gray-300 transition-colors"
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