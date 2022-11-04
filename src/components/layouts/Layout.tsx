import { ReactNode, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

import EdgeEasingPlugin from '../../lib/EdgeEasingPlugin';
import ScaleSpeedPlugin from '../../lib/ScaleSpeedPlugin';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

export default function Layout(props: { children: ReactNode }) {
  useEffect(() => {
    Scrollbar.use(ScaleSpeedPlugin, EdgeEasingPlugin);
    const scrollbar = Scrollbar.initAll({
      damping: 0.1,
      alwaysShowTracks: true,
      plugins: {
        scaleSpeed: { speed: 0.6 },
      },
    });
    return () => {
      scrollbar.map(x => x.destroy());
    };
  }, []);

  return (
    <>
      <div data-scrollbar className="flex flex-col w-screen h-screen">
        <Header />
        <main className="grow">{props.children}</main>
        <Footer />
      </div>

      {/* fixed elements must be placed outside the data-scrollbar */}
      <div className="fixed bottom-8 right-16 z-30 bg-blue-500 text-white px-4 rounded-md">
        Fixed Element
      </div>
    </>
  );
}
