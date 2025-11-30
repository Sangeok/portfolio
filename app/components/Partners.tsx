export default function Partners() {
  const partners = [
    "zoom",
    "coinbase",
    "Spotify",
    "zoom",
    "slack",
    "Dropbox",
    "zoom"
  ];

  return (
    <section className="py-10 px-6 border-t border-gray-100 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="flex items-center justify-between gap-8 overflow-x-auto no-scrollbar">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 px-8 py-3 bg-gray-50 rounded-full text-lg font-medium text-gray-600 min-w-[120px] text-center whitespace-nowrap"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
