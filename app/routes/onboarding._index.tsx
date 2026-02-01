import { redirect } from 'react-router';
import type { Route } from './+types/onboarding._index';

export function loader({}: Route.LoaderArgs) {
  return redirect('/onboarding/step-1');
}

export default function OnboardingIndex() {
  // This component will never render because the loader redirects
  return null;
}
