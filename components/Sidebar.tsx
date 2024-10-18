"use client"

import { Coins, PlusCircle, Plane, Flame, Shield, Edit3 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'CREATE TOKEN', icon: Coins, href: '/' },
  { name: 'MINT TOKENS', icon: PlusCircle, href: '/mint-tokens' },
  { name: 'AIRDROP', icon: Plane, href: '/airdrop' },
  { name: 'INCINERATOR', icon: Flame, href: '/incinerator' },
  { name: 'REVOKE OWNERSHIP', icon: Shield, href: '/revoke-ownership' },
  { name: 'UPDATE METADATA', icon: Edit3, href: '/update-metadata' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-64 bg-background md:border-r border-border p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
              pathname === item.href ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/10'
            }`}>
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;