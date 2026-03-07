'use client';

import { AuthSwitchHint } from '@/components/auth/AuthSwitchHint';
import { authStyles } from '@/components/auth/styles';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { TextButton } from '@/components/ui/TextButton';
import { LOGIN_COPY } from '@/constants/login';

export function LoginFormCard() {
  return (
    <section className={authStyles.panelCard}>
      <form className={authStyles.formGrid} onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className={authStyles.formLabel} htmlFor="account">
            {LOGIN_COPY.form.accountLabel}
          </label>
          <input
            className={authStyles.field}
            id="account"
            name="account"
            placeholder={LOGIN_COPY.form.accountPlaceholder}
            type="text"
          />
        </div>

        <div>
          <label className={authStyles.formLabel} htmlFor="password">
            {LOGIN_COPY.form.passwordLabel}
          </label>
          <input
            className={authStyles.field}
            id="password"
            name="password"
            placeholder={LOGIN_COPY.form.passwordPlaceholder}
            type="password"
          />
        </div>

        <div className={authStyles.helperRow}>
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

      <AuthSwitchHint actionLabel={LOGIN_COPY.registerAction} hint={LOGIN_COPY.registerHint} href="/register" />
    </section>
  );
}
