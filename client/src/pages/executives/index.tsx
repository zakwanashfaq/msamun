import PageTemplate from "@/components/pageTemplate";

type SketchfabEmbedProps = {
  title?: string;
  src?: string;
};

const SketchfabEmbed: React.FC<SketchfabEmbedProps> = ({ title = "Kaaba", src = "https://sketchfab.com/models/45d4b0b4404a4ad7b3f7235f7a10382c/embed?autospin=1&preload=1&dnt=1" }) => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe 
        title={title}
        frameBorder="0" 
        allowFullScreen 
        height={300}
        width="300px"
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        src={src}>
      </iframe>
    </div>
  );
}

export default function ExecutivesPage() {
  return (
    <PageTemplate>
      <div className="d-flex justify-content-center align-items-center p-5 text-wrap">
        <h1 className="fw-bold">This page is under construction. Sorry for the inconvenience...</h1>
      </div>
    </PageTemplate>
  )
}

// export default function ExecutivesPage() {
//   return (
//     <PageTemplate>
//       <div className="col-12 col-md-4 d-flex flex-column">
//         <span className="mt-1 text-dark fw-bold fs-3" >Executives</span>
//         <span className="mt-3 text-dark fs-5" >2022-23</span>
//         <span className="mt-3 text-dark fs-5" >2021-22</span>
//         <span className="mt-3 text-dark fs-5" >2020-21</span>
//         <span className="mt-3 text-dark fs-5" >2019-20</span>
//         <span className="mt-3 text-dark fs-5" >2018-19</span>
//         <span className="mt-3 text-dark fs-5" >2017-18</span>
//         <span className="mt-3 text-dark fs-5" >2016-17</span>
//         <span className="mt-3 text-dark fs-5" >2015-16</span>
//         <span className="mt-3 text-dark fs-5" >2014-15</span>
//         <span className="mt-3 text-dark fs-5" >2013-14</span>
//         <span className="mt-3 text-dark fs-5" >2012-13</span>
//         <span className="mt-3 text-dark fs-5" >2011-12</span>
//         <span className="mt-3 text-dark fs-5" >2010-11</span>
//         <span className="mt-3 text-dark fs-5" >2009-10</span>
//         <span className="mt-3 text-dark fs-5" >2008-09</span>
//         <span className="mt-3 text-dark fs-5" >2007-08</span>
//         <span className="mt-3 text-dark fs-5" >2006-07</span>
//         <span className="mt-3 text-dark fs-5" >2005-06</span>
//         <span className="mt-3 text-dark fs-5" >2004-05</span>
//         <span className="mt-3 text-dark fs-5" >2003-04</span>
//         <span className="mt-3 text-dark fs-5" >2002-03</span>
//         <span className="mt-3 text-dark fs-5" >2001-02</span>
//         <span className="mt-3 text-dark fs-5" >2000-01</span>
//         <span className="mt-3 text-dark fs-5" >1999-00</span>
//         <span className="mt-3 mb-5 text-dark fs-5" >1998-99</span>
//       </div>
//       <div className="col-12 col-md-8 mt-5 mt-md-3 d-flex flex-column">
//         <span className="pb-3 text-dark fs-5" >
//           The Legacy of MSA&apos;s Executives
//         </span>
//         <span className="pb-3">
//           Since its inception in 1998, the growth, innovation, and achievements of MSA (Modern Systems Association) can be attributed to the unwavering commitment and visionary leadership of its executives. Through each year, as reflected in our annual reports, our executives have consistently embodied the core values of MSA, steering the organization through challenges and capitalizing on opportunities.
//         </span>
//         <span className="pb-3">
//           From fostering collaborations, securing strategic partnerships, to pioneering innovative solutions, their decisive actions have been instrumental in building MSA&apos;s reputation as a leading institution in the modern systems domain. Their dedication to employee welfare, commitment to sustainability, and an unyielding stance on ethical operations have also played pivotal roles in MSA&apos;s success.
//         </span>
//         <span className="pb-3">
//           Through the years, the legacy of our executives has been one of forward-thinking, adaptability, and a commitment to excellence. Their contributions have laid a robust foundation for MSA&apos;s future, ensuring that we remain at the forefront of industry advancements for years to come.
//         </span>
//         <span className="py-3 text-dark fs-5" >
//           Current Executives
//         </span>
//         <span>
//           Executive profile element here
//         </span>
//         <span>
//           <SketchfabEmbed />
//         </span>
//       </div>
//     </PageTemplate>
//   )
// }
