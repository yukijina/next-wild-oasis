import { Suspense } from 'react';
import CabinList from '../_components/CabinList';
import Spinner from '../_components/Spinner';

// make this page dynamic. Reavalidate everytime
// any change in db will be reflected in front page immediately
// value is depending on how often you want to get fresh data
// value unit is per second. Here the value is 60 * 60= 1hr (3600 sec)
// data change -> 1 hr -> page refresh -> data refrect
// another way - optout from cashe. See CabinList noStore()
export const revalidate = 3600;

export const metadata = {
  title: 'Cabins',
};

export default function Page() {
  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Cabins
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {/* The above codes are loaded first without spinner (no need to fetch). Below suspens will be loaded spinner then data. Suspense has to be async component. We should wrap */}
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
