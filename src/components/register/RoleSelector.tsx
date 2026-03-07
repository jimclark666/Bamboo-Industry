import { authStyles } from '@/components/auth/styles';
import { REGISTER_COPY } from '@/constants/register';

export function RoleSelector() {
  return (
    <div>
      <p className={authStyles.formLabel}>{REGISTER_COPY.form.roleLabel}</p>
      <div className={authStyles.roleGrid}>
        {REGISTER_COPY.roles.map((role) => (
          <label className={authStyles.roleCard} key={role.value}>
            <input className="sr-only" defaultChecked={role.value === 'farmer'} name="role" type="radio" value={role.value} />
            <p className={authStyles.roleTitle}>{role.title}</p>
            <p className={authStyles.roleDesc}>{role.description}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
