import { TextButton } from '@/components/ui/TextButton';
import { authStyles } from './styles';

type AuthSwitchHintProps = {
  hint: string;
  actionLabel: string;
  href: string;
};

export function AuthSwitchHint({ hint, actionLabel, href }: AuthSwitchHintProps) {
  return (
    <div className={authStyles.splitLine}>
      <p className={authStyles.helperText}>
        {hint} <TextButton href={href}>{actionLabel}</TextButton>
      </p>
    </div>
  );
}
