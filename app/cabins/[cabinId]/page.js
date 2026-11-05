import { getCabin, getCabins } from '@/app/_lib/data-service';
import Reservation from '@/app/_components/Reservation';
import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import Cabin from '@/app/_components/Cabin';

// export const metadata = {
//   title: 'Cabin',
// };

// In this way, we can add cabinId to metadata
// function name has to be generateMetadata
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

// tell next js that which paramas exist dynamic routes. statically display
// you can't see a difference in frontend but when you run npm build, it changes from dynamic to static in cabinId route --> we can do static site generation
export async function generateStaticParams() {
  const cabins = await getCabins();

  // name should be cabinId - it matches params.cabinId in getCabin(params.cabinId) next
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // console.log(ids);
  // we want to these ids to prerender as static page
  return ids;
}

// cabinId can get through params in url. No need to pass props from CabinCard
export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Cabin cabin={cabin} />

      <div>
        <h2 className='text-5xl font-semibold text-center mb-10 text-accent-400'>
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
