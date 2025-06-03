import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "212773443694";
  const message = "Bonjour! Je voudrais discuter avec vous.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 flex items-center">
      <div className="relative group">
        <button
          onClick={handleClick}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-whatsapp-pulse"
          aria-label="Contactez-moi sur WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Contactez-moi maintenant
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton; 