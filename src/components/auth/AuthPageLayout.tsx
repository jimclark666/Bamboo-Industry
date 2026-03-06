import type { ReactNode } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { authStyles } from './styles';

type AuthPageLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export function AuthPageLayout({ left, right }: AuthPageLayoutProps) {
  return (
    <PageContainer>
      <section className={authStyles.pageSection}>
        <div className={authStyles.pageGrid}>
          <div>{left}</div>
          <div className="grid gap-4">{right}</div>
        </div>
      </section>
    </PageContainer>
  );
}
