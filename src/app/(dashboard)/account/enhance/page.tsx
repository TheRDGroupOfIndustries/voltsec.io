import Enhance from "@/components/dashboard/Enhance";
import { db } from "@/core/client/client";
import getSessionOrRedirect from "@/core/server/utils/getSessionOrRedirect";

const page = async () => {
  const session = await getSessionOrRedirect();
  const enhances = await db.enhances.findMany({
    where: { userId: session.user.id },
  });
  
  return <Enhance enhances={enhances} />;
};

export default page;
