import { SchedulePentestDataTable } from "@/components/shedule/table/pentestShedule-data-table";

import { columns } from "@/components/shedule/table/pentest-data-table-columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/core/client/client";
import { language } from "@/resource/language/language";
/// Do Correction in {colums } file & make it to get the data of the Certificates
///
const CertificateListPage = async () => {
  const data = await db.shedulePentest.findMany();
  return (
    <section>
      <Card className={"m-2"}>
        <CardHeader>
          <CardTitle>{language.SHEDULE}</CardTitle>
          <CardDescription>{language.SHEDULE_DESC}</CardDescription>
        </CardHeader>
        <CardContent className={"p-2 md:p-5 h-[80vh] overflow-y-auto"}>
          <SchedulePentestDataTable
            data={data}
            columns={columns}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default CertificateListPage;
