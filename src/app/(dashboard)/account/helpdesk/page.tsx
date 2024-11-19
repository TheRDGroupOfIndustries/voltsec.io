import HelpDesk from "@/components/dashboard/HelpDesk";
import { db } from "@/core/client/client";
import getSessionOrRedirect from "@/core/server/utils/getSessionOrRedirect";

const Page = async () => {
  const session = await getSessionOrRedirect();
  
  const helpDesks =
    (await db?.helpdesks.findMany({
      where: { userId: session.user.id },
    })) ?? [];

  return <HelpDesk helpdesks={helpDesks} />;
};

export default Page;
