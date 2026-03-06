import Link from 'next/link';
import type { FooterColumn } from '@/types/site';
import { SITE_NAME } from '@/constants/site';
import { PageContainer } from './PageContainer';

type FooterProps = {
  columns: FooterColumn[];
  copyright: string;
};

export function Footer({ columns, copyright }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-neutral-300 bg-white">
      <PageContainer>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">{SITE_NAME}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-700">
              面向竹产业上下游主体的交易协作平台，强调流程清晰、规则透明与协作可信。
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-neutral-900">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm text-neutral-700 hover:text-neutral-900" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-300 py-4">
          <p className="text-xs text-neutral-500">{copyright}</p>
        </div>
      </PageContainer>
    </footer>
  );
}
