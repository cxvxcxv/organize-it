'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IMenuItem } from '@/types/menu-item.types';

export function NavbarItem({ item }: { item: IMenuItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.link;
  return (
    <Link
      href={item.link}
      className={clsx('flex flex-grow justify-center p-4', {
        'bg-primary bg-opacity-15': isActive,
      })}
    >
      <item.icon />
    </Link>
  );
}
