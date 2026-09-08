import { ONLINE_STORE } from "@/const/ONLINE_STORE";
import OnlineStoreDesktop from "./onlineStoreDesktop";
import OnlineStoreMobile from "./onlineStoreMobile";

export default function OnlineStoreSection() {
  
  return (
    <>
      <OnlineStoreMobile data={ONLINE_STORE}/>
      <OnlineStoreDesktop data={ONLINE_STORE}/>
    </>
  );
}
