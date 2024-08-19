import CardRow from './CardRow'

const SubContainer = () => {
  return (
    <div className="flex flex-col items-center gap-[150px] relative">
      <div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
        <button className="all-[unset] box-border inline-flex items-start gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-[#8f5afe] rounded-lg overflow-hidden border-2 border-solid border-white">
          <div className="relative flex-1 mt-[-2.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[26.0px]">
            All
          </div>
        </button>
        <button className="all-[unset] box-border inline-flex items-start gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-absolutewhite rounded-lg overflow-hidden border-2 border-solid border-white">
          <div className="relative flex-1 mt-[-2.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#c2a6ff] text-xl tracking-[0] leading-[26.0px]">
            Classrooms
          </div>
        </button>
        <button className="all-[unset] box-border inline-flex items-start gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-absolutewhite rounded-lg overflow-hidden border-2 border-solid border-white">
          <div className="relative flex-1 mt-[-2.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#c2a6ff] text-xl tracking-[0] leading-[26.0px]">
            Library
          </div>
        </button>
        <button className="all-[unset] box-border inline-flex items-start gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-absolutewhite rounded-lg overflow-hidden border-2 border-solid border-white">
          <div className="relative flex-1 mt-[-2.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#c2a6ff] text-xl tracking-[0] leading-[26.0px]">
            Science Lab
          </div>
        </button>
        <button className="all-[unset] box-border inline-flex items-start gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-absolutewhite rounded-lg overflow-hidden border-2 border-solid border-white">
          <div className="relative flex-1 mt-[-2.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#c2a6ff] text-xl tracking-[0] leading-[26.0px]">
            Computer Lab
          </div>
        </button>
        <button className="all-[unset] box-border inline-flex items-start gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-absolutewhite rounded-lg overflow-hidden border-2 border-solid border-white">
          <div className="relative flex-1 mt-[-2.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#c2a6ff] text-xl tracking-[0] leading-[26.0px]">
            Garden and Nature Area
          </div>
        </button>
      </div>
      <CardRow
        images={['image.png', 'image-2.png', 'image-3.png', 'image-4.png']}
        title="Classrooms"
        description="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
      />
      <CardRow
        images={['image-5.png', 'image-6.png', 'image-7.png', 'image-8.png']}
        title="Library"
        description="Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
        buttonSrc="buttons-container.svg"
      />
      <CardRow
        images={['image-9.png', 'image-10.png', 'image-11.png', 'image-12.png']}
        title="Science Lab"
        description="Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
        buttonSrc="image.svg"
      />
      <CardRow
        images={['image-13.png', 'image-14.png', 'image-15.png', 'image-16.png']}
        title="Computer Lab"
        description="Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills."
        buttonSrc="buttons-container-2.svg"
      />
      <CardRow
        images={['image-17.png', 'image-18.png', 'image-19.png', 'image-20.png']}
        title="Garden and Nature Area"
        description="Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
        buttonSrc="buttons-container-3.svg"
      />
    </div>
  );
};

export default SubContainer;
