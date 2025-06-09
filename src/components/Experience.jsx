import React from 'react';

const HowItWorksCard = ({ card, index, totalCards }) => {
  // Sticky top positioning for desktop. On mobile, they stack or scroll horizontally.
  // The original HTML uses different top values for each card.
  const stickyTops = ['md:top-[120px]', 'md:top-[140px]', 'md:top-[160px]', 'md:top-[180px]']; // Adjusted slightly

  return (
    <div 
      className={`
        w-full md:w-auto
        md:sticky ${stickyTops[index % stickyTops.length]} 
        bg-[#DCF251] border-t md:border-t-0 md:border-l border-[#343434]/25 
        min-h-[60vh] md:min-h-[auto] md:h-auto 
        p-8 md:p-0
        flex flex-col justify-center md:block <!-- Adjust flex for mobile card content -->
        mb-4 md:mb-0 <!-- Spacing for mobile stacking -->
      `}
    > {/* lmEFkc, dRKxbx, etc. approximation. Simplified sticky behavior for mobile. */}
      <div className="md:p-8 lg:p-12"> {/* CardContent fBzbqJ */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8"> {/* eGNQzP */}
          <div className="w-full md:w-1/12"> {/* bPakEj */}
            <p className="text-sm font-sans text-[#343434]">0{index + 1}</p>
          </div>
          <div className="w-full md:w-11/12 md:pl-4"> {/* djFYlz GQRYs */}
            <h3 className="text-4xl md:text-5xl lg:text-[80px] font-sans text-[#343434] mb-6 md:mb-8 leading-none"> {/* jcFPxW ePRVvm */}
              {card.title}
            </h3>
            <div className="w-full md:w-4/5 lg:w-3/5"> {/* ftrNJa */}
              <p className="text-base font-sans text-[#343434] leading-relaxed"> {/* brRNNY fnWAqT */}
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ title, buttonLabel, buttonLink, cards }) => {
  return (
    <section className="bg-[#DCF251] py-16 md:py-24 lg:py-32 px-0 md:px-8"> {/* cNyXXQ jyPmkK */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Text Column (Sticky on Large Screens) */}
        <div className="lg:w-2/5 px-4 md:px-0 lg:sticky lg:top-[100px] h-fit self-start mb-12 lg:mb-0"> {/* grdKsk approximation */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#343434] mb-8 leading-tight"> {/* fezXLA hAxhyZ */}
            {title}
          </h2>
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#343434] text-[#DCF251] text-sm font-plain px-6 py-3 rounded hover:bg-[#343434]/80 transition-colors" /* hPqyqB */
          >
            {buttonLabel}
          </a>
        </div>

        {/* Right Cards Column (Horizontal scroll on mobile, stacked for sticky on desktop) */}
        <div className="lg:w-3/5 lg:pl-8">
           {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden flex overflow-x-auto space-x-4 pb-4 px-4 -mx-4">
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-[80vw] bg-[#DCF251] border border-[#343434]/25 rounded-lg p-6">
                <p className="text-sm font-sans text-[#343434] mb-2">0{index + 1}</p>
                <h3 className="text-3xl font-sans text-[#343434] mb-4 leading-tight">{card.title}</h3>
                <p className="text-base font-sans text-[#343434] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
          {/* Desktop: Stacked for sticky effect */}
          <div className="hidden md:block space-y-0"> {/* iJDUAP for mobile, ggoIqu is scroller parent */}
            {cards.map((card, index) => (
              <HowItWorksCard key={index} card={card} index={index} totalCards={cards.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 