import { ReactNode, useEffect, useRef } from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import Scrollbar from 'smooth-scrollbar';

import EdgeEasingPlugin from '../../lib/EdgeEasingPlugin';
import ScaleSpeedPlugin from '../../lib/ScaleSpeedPlugin';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof navigator === 'undefined' ? '' : navigator.userAgent,
  );

export default function Layout(props: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    // 順番大事!
    Scrollbar.use(ScaleSpeedPlugin, EdgeEasingPlugin);
    const scrollbar = Scrollbar.init(ref.current as HTMLElement, {
      damping: 0.1,
      plugins: { scaleSpeed: { speed: 0.6 } },
    });

    return () => scrollbar.destroy();
  }, []);

  const backToTop = () => {
    if (isMobile) {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const scrollbar = Scrollbar.get(ref.current as HTMLElement);
      scrollbar?.scrollTo(0, 0, 600);
    }
  };

  return (
    <>
      <div ref={ref} className="flex flex-col w-screen h-screen overflow-auto">
        <div ref={topRef} />
        <Header />
        <main className="grow">{props.children}</main>
        <Footer />
      </div>

      {/* fixed elements must be placed outside the data-scrollbar */}
      <a
        onClick={backToTop}
        className="fixed bottom-8 right-8 p-2 rounded-full bg-blue-500 text-white text-2xl"
      >
        <IoMdArrowUp />
      </a>
    </>
  );
}
