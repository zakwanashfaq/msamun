import { NavLink } from "@/enums/navLinks";

import Link from "next/link";

type TLoginButtonProps = {
  buttonLabel: string;
};

export function LoginButton(props: TLoginButtonProps) {
  return (
    <Link href={NavLink.Auth}>
      <button type="button" className="btn btn-primary">
        {props.buttonLabel}
      </button>
    </Link>
  );
}
