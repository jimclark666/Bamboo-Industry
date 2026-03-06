'use client';

import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { TextButton } from '@/components/ui/TextButton';
import { LOGIN_COPY } from '@/constants/login';

export function LoginFormCard() {
  return (
    <section className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6">
      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-900" htmlFor="account">
            {LOGIN_COPY.form.accountLabel}
          </label>
          <input
            className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            id="account"
            name="account"
            placeholder={LOGIN_COPY.form.accountPlaceholder}
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-900" htmlFor="password">
            {LOGIN_COPY.form.passwordLabel}
          </label>
          <input
            className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            id="password"
            name="password"
            placeholder={LOGIN_COPY.form.passwordPlaceholder}
            type="password"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="inline-flex items-center gap-2 text-sm text-neutral-700" htmlFor="remember">
            <input className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500/30" id="remember" type="checkbox" />
            {LOGIN_COPY.form.remember}
          </label>
          <TextButton href="/rules">{LOGIN_COPY.form.forgot}</TextButton>
        </div>

        <PrimaryButton className="w-full" size="lg">
          {LOGIN_COPY.form.submit}
        </PrimaryButton>
      </form>

      <div className="mt-5 border-t border-neutral-300 pt-4">
        <p className="text-sm text-neutral-700">
          {LOGIN_COPY.registerHint}{' '}
          <TextButton href="/register">{LOGIN_COPY.registerAction}</TextButton>
        </p>
      </div>
    </section>
  );
}
