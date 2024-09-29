import Link from 'next/link';

export default function Header() {
  return (
    <div className='top-0 sticky flex text-center items-center pl-2 text-white gap-2 w-full bg-slate-500 h-12'>
      <Link href="/">
        home
      </Link>
      <Link href="/performance">
        Performance
      </Link>
      <Link href="/reliability">
        Reliability
      </Link>
      <Link href="/scale">
        Scale
      </Link>
    </div>
  );
}