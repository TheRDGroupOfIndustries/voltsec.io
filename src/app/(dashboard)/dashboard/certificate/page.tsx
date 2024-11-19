import { CertificateDataTable } from "@/components/certificate/table/certificate-data-table";
import { columns } from "@/components/certificate/table/certificate-data-table-columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/core/client/client";
import { language } from "@/resource/language/language";
const CertificateListPage = async () => {
  const data = await db.certificates.findMany();
  return (
    <section>
      <Card className={"m-2"}>
        <CardHeader>
          <CardTitle>{language.CERTIFICATES}</CardTitle>
          <CardDescription>{language.CERTIFICATE_DESC}</CardDescription>
        </CardHeader>
        <CardContent className={"p-2 md:p-5 h-[80vh] overflow-y-auto"}>
          <CertificateDataTable
            data={data}
            columns={columns}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default CertificateListPage;
