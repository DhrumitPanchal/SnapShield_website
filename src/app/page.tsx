// import React from 'react';
// import Hero from '../components/Hero';
// import AboutPage from './about/page';
// // import About from '../components/about';

// export default function Home() {
//   return (
//     <main className="pt-16 bg-gray-100 min-h-screen">
//       <section className="container mx-auto px-4">
//         <Hero />
//         <AboutPage/>
//       </section>
//     </main>
//   );
// }

import React from 'react';
import Hero from '../components/Hero';
import About from '../components/about';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto px-4">
        <Hero/>
      </section>
      <section className="container mx-auto px-4 mt-16">
        {/* <About /> */}
      </section>
    </Layout>
  );
}