import { StatusTag } from '@/components/ui/StatusTag';
import { LOGIN_COPY } from '@/constants/login';

export function LoginTrustPanel() {
  return (
    <aside className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-4 flex items-center gap-2">
        <StatusTag label="协作机制" tone="success" size="sm" />
        <h2 className="text-sm font-semibold text-neutral-900">{LOGIN_COPY.trustTitle}</h2>
      </div>

      <ul className="grid gap-3">
        {LOGIN_COPY.trustItems.map((item) => (
          <li className="rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
