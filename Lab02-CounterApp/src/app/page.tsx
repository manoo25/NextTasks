import { BasicButton } from "@/components/BasicButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <BasicButton btnColor="red">
        <Link href="/server-counter">Server Counter</Link>
      </BasicButton>
      <BasicButton btnColor="blue">
        <Link href="/server-api-counter">Server API Counter</Link>
      </BasicButton>
      <BasicButton btnColor="green">
        <Link href="/client-counter">Client Counter</Link>
      </BasicButton>
      <BasicButton btnColor="yellow">
        <Link href="/counter-provider-version">Counter Provider Version</Link>
      </BasicButton>
    </div>
  );
}
