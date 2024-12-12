import React from 'react';

export function InfoSection() {
  return (
    <section className="relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ff0000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="relative">
        {/* Main Info Bar */}
        <div className="w-full bg-gradient-to-r from-black via-black/95 to-black border-y border-red-500/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* Address Section */}
              <div className="group flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gradient-to-br from-red-500/10 to-transparent group-hover:from-red-500/20 
                    transition-all duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium tracking-wide text-sm uppercase mb-1">Adresse</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Papenhuder Str. 52, 22087<br />Hamburg
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="group flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gradient-to-br from-red-500/10 to-transparent group-hover:from-red-500/20 
                    transition-all duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium tracking-wide text-sm uppercase mb-1">Telefonnummer</h3>
                  <a href="tel:+491798916405" 
                    className="text-white/90 text-sm hover:text-red-500 transition-colors duration-300">
                    +49 179 8916405
                  </a>
                </div>
              </div>

              {/* Hours Section */}
              <div className="group flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gradient-to-br from-red-500/10 to-transparent group-hover:from-red-500/20 
                    transition-all duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium tracking-wide text-sm uppercase mb-1">Öffnungszeiten</h3>
                  <div className="text-white/90 text-sm leading-relaxed">
                    <p>Mo – Fr, 9:00 – 19:00</p>
                    <p>Sa, 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="flex justify-center md:justify-end">
                <a
                  href="https://wa.me/491798916405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-25 
                    group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                  </div>
                  <div className="relative flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg 
                    hover:bg-green-500 transition-all duration-300 shadow-xl">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="font-medium whitespace-nowrap">Termin via WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
