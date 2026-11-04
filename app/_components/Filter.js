'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {
  // get current params. client - useSearchParams =  server - searchParams
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // fallback in case there is no url
  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    // URLSearchParams is from web api
    const params = new URLSearchParams(searchParams);
    // set params. This does not actually change the url
    params.set('capacity', filter);
    // using useRouter, we wwill replace url with the desired params
    // 2nd object scroll - we make sure it won't scroll up to top. This case, false makes sence
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='border border-primary-800 flex'>
      <Button
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
