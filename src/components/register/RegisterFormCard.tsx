'use client';

import { AuthSwitchHint } from '@/components/auth/AuthSwitchHint';
import { authStyles } from '@/components/auth/styles';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { REGISTER_COPY } from '@/constants/register';
import { RoleSelector } from './RoleSelector';

export function RegisterFormCard() {
  return (
    <section className={authStyles.panelCard}>
      <form className={authStyles.formGrid} onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={authStyles.formLabel} htmlFor="contactName">
              {REGISTER_COPY.form.contactNameLabel}
            </label>
            <input
              className={authStyles.field}
              id="contactName"
              name="contactName"
              placeholder={REGISTER_COPY.form.contactNamePlaceholder}
              type="text"
            />
          </div>

          <div>
            <label className={authStyles.formLabel} htmlFor="phone">
              {REGISTER_COPY.form.phoneLabel}
            </label>
            <input className={authStyles.field} id="phone" name="phone" placeholder={REGISTER_COPY.form.phonePlaceholder} type="text" />
          </div>
        </div>

        <div>
          <label className={authStyles.formLabel} htmlFor="orgName">
            {REGISTER_COPY.form.orgNameLabel}
          </label>
          <input
            className={authStyles.field}
            id="orgName"
            name="orgName"
            placeholder={REGISTER_COPY.form.orgNamePlaceholder}
            type="text"
          />
        </div>

        <RoleSelector />

        <div>
          <label className={authStyles.formLabel} htmlFor="region">
            {REGISTER_COPY.form.regionLabel}
          </label>
          <input className={authStyles.field} id="region" name="region" placeholder={REGISTER_COPY.form.regionPlaceholder} type="text" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={authStyles.formLabel} htmlFor="password">
              {REGISTER_COPY.form.passwordLabel}
            </label>
            <input
              className={authStyles.field}
              id="password"
              name="password"
              placeholder={REGISTER_COPY.form.passwordPlaceholder}
              type="password"
            />
          </div>

          <div>
            <label className={authStyles.formLabel} htmlFor="confirmPassword">
              {REGISTER_COPY.form.confirmPasswordLabel}
            </label>
            <input
              className={authStyles.field}
              id="confirmPassword"
              name="confirmPassword"
              placeholder={REGISTER_COPY.form.confirmPasswordPlaceholder}
              type="password"
            />
          </div>
        </div>

        <PrimaryButton className="w-full" size="lg">
          {REGISTER_COPY.form.submit}
        </PrimaryButton>
      </form>

      <AuthSwitchHint actionLabel={REGISTER_COPY.loginAction} hint={REGISTER_COPY.loginHint} href="/login" />
    </section>
  );
}
