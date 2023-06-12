import { User } from "firebase/auth";
import { createGlobalState } from "react-hooks-global-state";

export const { useGlobalState } = createGlobalState<{ user: User | null }>({ user: null });
