import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
  return <></>
}

export function getServerSideProps(){
  return {
    redirect: {
      permanent: false,
      destination: "/login"
    }
  }
    
}
